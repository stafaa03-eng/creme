#!/usr/bin/env python3
"""
Lean project dump for a Next.js (app router) codebase.

Includes by default:
- Source dirs: app/**, components/**, lib/**
- Public assets: public/** (images omitted unless INCLUDE_IMAGES=True)
- Root configs: package.json, tsconfig.json, next.config.ts, postcss.config.mjs,
  tailwind.config.{ts,js}, README.md

Excludes:
- Dirs: node_modules, .next, .git, .turbo, .vercel, .vscode, .idea, dist, build, coverage
- Noisy/generated: package-lock.json, yarn.lock, pnpm-lock.yaml, next-env.d.ts
- Editor/OS junk: .DS_Store, Thumbs.db
- Secrets by pattern: .env*, *.pem, *.key, *.pfx, *service-account*.json, *.sqlite, *.db, *.bak
- Images are excluded unless INCLUDE_IMAGES=True

Optional (off by default): eslint.config.mjs, components.json
"""

from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parent
OUT_PATH = ROOT / "all_files_dump.txt"

# ---- knobs ---------------------------------------------------------------
INCLUDE_IMAGES = False            # set True to include image bytes as placeholders
INCLUDE_OPTIONAL_CONFIGS = False  # include eslint.config.mjs and components.json

# Treat SVG as text; other raster formats are images
TEXT_EXTS = {
    ".ts", ".tsx", ".js", ".jsx", ".json", ".mjs", ".cjs",
    ".css", ".md", ".svg"
}
IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".gif", ".webp"}

SOURCE_DIRS = ["app", "components", "lib", "public"]

ALWAYS_EXCLUDE_DIRS = {
    "node_modules", ".next", ".git", ".turbo", ".vercel",
    ".vscode", ".idea", "dist", "build", "coverage"
}

ALWAYS_EXCLUDE_FILE_GLOBS = {
    "package-lock.json", "yarn.lock", "pnpm-lock.yaml",
    "next-env.d.ts", ".DS_Store", "Thumbs.db",
    ".env", ".env.*", "*.pem", "*.key", "*.pfx",
    "*service-account*.json", "*.sqlite", "*.db", "*.bak"
}

OPTIONAL_CONFIG_FILES = {"eslint.config.mjs", "components.json"}
ROOT_CONFIG_FILES = {
    "package.json", "tsconfig.json", "next.config.ts",
    "postcss.config.mjs", "tailwind.config.ts", "tailwind.config.js",
    "README.md"
}

# -------------------------------------------------------------------------

def path_matches_globs(path: Path, patterns: set[str]) -> bool:
    for pat in patterns:
        if path.match(pat) or path.name == pat or path.match(f"**/{pat}"):
            return True
    return False

def is_excluded(path: Path) -> bool:
    if any(part in ALWAYS_EXCLUDE_DIRS for part in path.parts):
        return True
    if path_matches_globs(path, ALWAYS_EXCLUDE_FILE_GLOBS):
        return True
    if (path.name in OPTIONAL_CONFIG_FILES) and not INCLUDE_OPTIONAL_CONFIGS:
        return True
    return False

def should_include_file(p: Path) -> bool:
    if is_excluded(p):
        return False
    ext = p.suffix.lower()
    if ext in IMAGE_EXTS:
        return INCLUDE_IMAGES
    if ext in TEXT_EXTS:
        return True
    if p.parent == ROOT and (p.name in ROOT_CONFIG_FILES or
                             (INCLUDE_OPTIONAL_CONFIGS and p.name in OPTIONAL_CONFIG_FILES)):
        return True
    return False

def iter_candidates():
    # Root configs
    for name in ROOT_CONFIG_FILES | (OPTIONAL_CONFIG_FILES if INCLUDE_OPTIONAL_CONFIGS else set()):
        p = ROOT / name
        if p.exists() and should_include_file(p):
            yield p

    # Source trees
    for d in SOURCE_DIRS:
        root = ROOT / d
        if root.exists():
            for p in root.rglob("*"):
                if p.is_file() and should_include_file(p):
                    yield p

def read_text(p: Path) -> str:
    return p.read_text(encoding="utf-8", errors="replace")

def main():
    files = sorted(set(iter_candidates()), key=lambda x: str(x).lower())
    dumped_paths: list[str] = []

    with OUT_PATH.open("w", encoding="utf-8") as out:
        out.write("# Consolidated file dump (lean)\n")
        out.write(f"# Root: {ROOT}\n")
        out.write(f"# Included roots: {', '.join(sorted(ROOT_CONFIG_FILES))}\n")
        out.write(f"# Included source dirs: {', '.join(SOURCE_DIRS)}\n")
        out.write(f"# Included text extensions: {', '.join(sorted(TEXT_EXTS))}\n")
        out.write(f"# Images included: {INCLUDE_IMAGES}\n")
        out.write(f"# Optional configs included: {INCLUDE_OPTIONAL_CONFIGS}\n")
        out.write(f"# Excluded dirs: {', '.join(sorted(ALWAYS_EXCLUDE_DIRS))}\n\n")

        for p in files:
            rel = p.relative_to(ROOT)
            out.write("===== FILE START =====\n")
            out.write(f"NAME: {p.name}\n")
            out.write(f"DIR: {str(p.parent.relative_to(ROOT)) if p.parent != ROOT else '.'}\n")
            out.write(f"RELATIVE_PATH: {rel}\n")

            if p.suffix.lower() in IMAGE_EXTS and not INCLUDE_IMAGES:
                out.write("CONTENT_TYPE: binary\n[image omitted]\n")
            else:
                out.write("CONTENT_TYPE: text\n----- CONTENT BEGIN -----\n")
                out.write(read_text(p))
                out.write("\n----- CONTENT END -----\n")

            out.write("===== FILE END =====\n\n")
            dumped_paths.append(str(rel))

        out.write(f"# Total files dumped: {len(dumped_paths)}\n# File list:\n")
        for rel in dumped_paths:
            out.write(f"- {rel}\n")

    print(f"Wrote {len(dumped_paths)} files to {OUT_PATH}")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        sys.exit(1)
