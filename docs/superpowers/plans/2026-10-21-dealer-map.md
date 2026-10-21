# Interactive dealer map

**Goal:** Replace the dealer card list with a premium, mobile-friendly world map whose red markers open every available dealer contact.

**Architecture:** Bundle public-domain Natural Earth paths locally; render a responsive SVG with HTML marker buttons and a single selected dealer detail panel. Keep existing dealer data and three languages. No external map service, API keys or new runtime dependencies.

**Design:** Existing Saira Condensed/Rajdhani typography. Carbon #0b0c0e, sea #101216, land #242a30, borders #41484e, MAGIK red #ed292f, text #f4f4f5. Desktop map beside a contact panel; mobile map over the panel with easy country selection, 44px controls, zoom and reset. Callout labels distinguish neighboring European markers. Locations with no street address are shown at city/region level.

- [x] Add map coordinates and local cartography, retaining all existing dealer information.
- [x] Implement selectable markers, zoom/reset and keyboard-accessible country controls with synchronized details.
- [x] Integrate the map into the route and translate map instructions and labels.
- [x] Verify all four dealers and contact URLs, country switching, desktop/mobile layouts, formatting and production builds.

**Deployment investigation:** Inspect the failed Vercel logs if available. Connected API currently returns 403 for deployment logs/listing; reproduce the Vercel production build locally and request the exact online error while continuing implementation. Do not claim the remote deployment is fixed without evidence.

**Verified outcome:** The reported deployment block is CVE-2026-102989. Updated and pinned React Start to 1.168.60, React Router to 1.170.41 and Router Plugin to 1.168.42, synchronizing npm and Bun lockfiles. The patched server core resolves to 1.169.39. TypeScript, scoped ESLint, formatting and three map geometry/zoom tests pass. The Vercel output renders the dealer route with HTTP 200. Browser checks cover desktop, mobile at 390px and 320px, direct dealer fragments, map selection and zoom/reset. Remote redeployment has not been performed.

**Review fixes:** Preserve fragment-aware selection and stable dealer IDs. Spread neighboring European marker buttons vertically with stems retaining their geographic reference; confirmed that the actual Italy dot selects CBK on a 320px viewport.
