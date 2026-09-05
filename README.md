# Steampunk Punch

Photo-first punch list for the Jackson rendering plant. Assets come from Maintenance Connection (`data/mc_assets.csv`).

Live: https://steampunk1.github.io/steampunk-punch/

Progressive web app: open the link on an iPhone and use Share > Add to Home Screen to install the Punch icon.

## Layout

- `index.html` - entry page; shows the app inside an iOS frame on wide screens and full-bleed on phones.
- `PunchApp.dc.html` - the app itself (design-canvas component).
- `punch-data.js` - zones, asset classification rules, and helpers.
- `ios-frame.jsx` - iOS device frame used for the desktop preview.
- `support.js` - design-canvas runtime.
- `_ds/` - Steampunk Fabrication design-system tokens and bundle.
- `assets/`, `manifest.webmanifest` - PWA icons and manifest.

## Source of truth

The app is authored in Claude Design project `4600910b-a0a5-4ebf-a3d6-e4c837dd5134` ("Steampunk maintenance tracking app"). This repo is the `punch-app/` folder of that project. To update: sync the changed files here, commit, and push. GitHub Pages redeploys from `main`.
