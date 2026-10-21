import { writeFile } from "node:fs/promises";

// Public-domain cartography: https://www.naturalearthdata.com/about/terms-of-use/
// Run manually to refresh the bundled map. No network requests are made by the site.
const source =
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson";
const response = await fetch(source);
if (!response.ok) throw new Error(`Natural Earth: ${response.status}`);
const { features } = await response.json();
const project = ([longitude, latitude]) => [
  30 + ((longitude + 180) / 360) * 940,
  20 + ((85 - latitude) / 145) * 450,
];
const countries = features
  .filter((feature) => feature.properties.ADMIN !== "Antarctica")
  .map((feature) => {
    const polygons =
      feature.geometry.type === "Polygon"
        ? [feature.geometry.coordinates]
        : feature.geometry.coordinates;
    return {
      code: feature.properties.ISO_A2_EH,
      path: polygons
        .map((polygon) =>
          polygon
            .map(
              (ring) =>
                ring
                  .map((point, i) => {
                    const [x, y] = project(point);
                    return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
                  })
                  .join("") + "Z",
            )
            .join(""),
        )
        .join(""),
    };
  });
await writeFile(
  new URL("../src/content/world-map.json", import.meta.url),
  JSON.stringify(countries),
);
console.log(`Bundled ${countries.length} countries from Natural Earth.`);
