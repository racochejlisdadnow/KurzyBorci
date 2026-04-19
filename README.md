# KurzyBorci

Web for `kurzyproborce.cz` built with Astro and deployed via GitHub Actions to GitHub Pages.

## Recent Changes

### 2026-04-15
- Added standalone quiz page at `public/quiz/index.html` (live path `/quiz/`).
- Matched quiz visual style to main website (fonts, colors, gradients, glass card style).
- Updated intro badge to KPB wordmark.
- Shortened loading countdown to 15 seconds (3 intervals, 5 seconds each).
- Added Apps Script integration for result submit:
  - sends `email`, `profile`, `freeText`, `answers`, `timestamp`, `pageUrl`, `userAgent`
  - shows submit loading and error states in UI
- Verified local end-to-end flow with Google Sheets + email notification.
