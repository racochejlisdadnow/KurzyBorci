# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/` contains route-based Astro pages (subfolders group sections like `about/`, `courses/`).
- `src/components/` holds shared UI components (PascalCase filenames).
- `src/layouts/` defines layout wrappers used by pages.
- `src/styles/global.css` is the global stylesheet (Tailwind utilities + base styles).
- `public/` stores static assets copied to the build output as-is.
- `dist/` is the generated production build output; do not edit by hand.
- `legacy_src/` is legacy code kept for reference; avoid new changes there.

## Build, Test, and Development Commands
- `npm install` or `bun install` installs dependencies (both npm and Bun are supported).
- `npm run dev` starts the Astro dev server for local development.
- `npm run build` builds the static site into `dist/`.
- `npm run preview` serves the production build locally.
- `npm run astro -- <command>` runs Astro CLI tasks as needed.

## Coding Style & Naming Conventions
- Use 2-space indentation in `.astro`, `.css`, and config files.
- Use double quotes and semicolons in frontmatter imports and JS blocks.
- Component and layout filenames are PascalCase (for example, `Navigation.astro`).
- Keep Tailwind utility class lists readable; group by layout, typography, and color when editing.
- No formatter or linter is configured, so follow existing file conventions.

## Testing Guidelines
- No automated test framework is configured in this repo.
- For changes, do a quick manual smoke test by running `npm run dev` and checking key routes like `/`, `/courses/`, `/contact/`, and `/reviews/`.
- If you add tests later, document the framework and commands here.

## Commit & Pull Request Guidelines
- Existing release commits follow `version X.YY` (for example, `version 1.03`); use the same pattern for release bumps.
- For non-release work, use short, imperative commit summaries.
- PRs should include a clear description, list affected routes/pages, and add screenshots for UI changes.

## Configuration Notes
- Deployment settings live in `astro.config.mjs`; `site` and `base` are set for GitHub Pages.
- If the deployment URL or repository path changes, update `site` and `base` together.
