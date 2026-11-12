# Amplitude Jazz

A first functional website for the student-founded, all-girls jazz ensemble at Wilcox High School. Built with React, Vite, and plain CSS. All seven pages work without a backend, accounts, or payments.

## Preview on your computer

1. Install the current Node.js LTS release from https://nodejs.org (Node 22.12+ or 24 recommended).
2. Download or clone this repository and open its folder in a terminal.
3. Run `npm install` once.
4. Run `npm run dev` and open the local address printed in the terminal.
5. Stop the server with Ctrl+C.

## Edit the writing

Open **`src/content.js`**. This is the single place to edit page headings, navigation labels, descriptions, member information, events, contact details, and placeholder text. Comments explain the fields. Keep quotes and commas in place. Save the file while the development server is running to see your changes.

- **About / initiatives / support:** replace the bracketed text in each section.
- **Members:** update the objects in `ensemble.members`. Copy a whole member object to add a musician; give each a unique `id`. Remove unwanted objects. An empty `bio: ''` hides the biography.
- **Events:** `performances.upcomingEvents` and `pastEvents` start empty. Copy the commented event example, replace every placeholder with real information, and use a unique `id`. Move an event to the past list after it happens. Dates are plain display text, so write them the way you want visitors to read them.
- **Email:** `contact.email` contains the official organization email and powers both Contact page email links.
- **Socials:** the official Instagram link is configured in `contact.socials`. Update its label or official `https://` URL there.
- **Home introduction:** replace `home.intro` with your final introduction and set `introPlaceholder` to `''` to remove its editing prompt.

The small `a✳j` brand mark and decorative arrows/stars live in `src/main.jsx`; all normal page copy lives in the content file. The browser description and default document title are in `index.html`.

## Add your photos

1. Create `public/images/` and add your own licensed images, for example `ensemble.jpg`.
2. Set the appropriate photo object's `src` to `'images/ensemble.jpg'` (no leading slash).
3. Set `alt` to a short description of the real photo, for example `'Amplitude Jazz performing together on stage'` if that describes the image.
4. Update its caption. Placeholder artwork disappears automatically when a source is supplied.

Use your own or properly licensed photos and make sure you have permission to publish member images. No external images, fonts, or tracking scripts are loaded by this prototype.

## Build and preview the finished version

```sh
npm run build
npm run preview
```

`dist/` contains the finished website. Do not edit this generated folder; rebuild after source changes. The site uses hash navigation (`#about`, `#ensemble`, etc.), so static hosts do not need special page-rewrite rules.

## Deploy

For Netlify or Cloudflare Pages, connect the GitHub repository, choose `npm run build` as the build command and `dist` as the output directory. For Vercel, use the Vite preset with the same settings. No environment variables are required.

For GitHub Pages, enable Pages with **GitHub Actions** in repository Settings, then use GitHub's Vite deployment instructions: https://vite.dev/guide/static-deploy.html#github-pages. This project uses Vite's relative base (`./`) so assets also work beneath a repository subpath. Upload the built `dist` directory as the Pages artifact, not the source folder.

## Project map

- `src/content.js` — editable content and photos
- `src/main.jsx` — reusable components and seven page layouts
- `src/styles.css` — responsive styles, colors, spacing, and typography
- `vite.config.js` — relative asset paths for static hosting
- `public/` — your future photos and other static assets

## Before sharing publicly

Replace the clearly marked writing/photo placeholders, verify the configured official contact details, and check the website on a phone. No real member names, performance dates, venues, contact addresses, nonprofit claims, or tax claims have been invented.

## Replace the illustrated artwork

The original decorative illustrations are separate, editable SVG files in `public/art/`. They are graphic artwork, not representations of actual ensemble members or instrumentation.

- `band-garden.svg` — homepage instrument scene
- `little-melody.svg` — secondary community illustration
- `star-cursor.svg` — original small pink star cursor
- `sound-wave.svg` — two reusable, thin waveform doodles
- `home-mark.svg` — navigation star and wave mark

Replace either illustration file with your own artwork, or change its path in `content.artwork` in `src/content.js`. SVG, PNG, and WebP work; keep a similar aspect ratio (650×560 for the hero and 420×300 for the secondary illustration). These images are decorative and hidden from screen readers; real ensemble photos keep their editable alt text.

The palette and handwriting font stack are defined at the top of `src/styles.css`. The custom cursor applies to the page, links, and buttons only with a fine pointer, hover support, and no reduced-motion preference. Editable text fields keep native text-selection cursors. To replace it, use a small SVG (28×28) at the same path, or update the cursor declaration in the CSS. Its hotspot is the star center at (13, 13). Hover motion is disabled when visitors prefer reduced motion. No new dependencies are needed for the artwork or interactions.


The cursor’s music-note trail is managed in `src/cursorTrail.js`, with animation styling in `.cursor-note` in `src/styles.css`. At most six notes are present, emitted at least 115ms apart and removed after 780ms. It uses no React state or continuous animation loop. Touch, reduced motion, dragging, and editing text suppress the effect; scrolling or losing focus clears it. Run `node --test tests/cursorTrail.test.js` to check these safeguards.

Only the ticker uses the locally hosted Caveat variable font in `public/fonts/`. Its SIL Open Font License is included as `Caveat-OFL.txt`. All primary typefaces remain unchanged. Replace waveform and home-mark paths under `content.artwork` to use your own artwork.
