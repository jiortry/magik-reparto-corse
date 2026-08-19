import type { GalleryItem } from "@/components/site/Gallery";
import gokart from "@/assets/gokart.png";
import directDrive from "@/assets/kart/direct-drive.png";
import type { KartVariant } from "@/components/site/KartPills";

const shifterModules = import.meta.glob<{ default: string }>("../assets/kart/shifter/*.jpg", {
  eager: true,
});
const directModules = import.meta.glob<{ default: string }>("../assets/kart/direct-drive/*.jpg", {
  eager: true,
});

function fileNameFromPath(path: string): string {
  const seg = path.split("/");
  return seg[seg.length - 1] ?? path;
}

function itemsFromGlob(
  modules: Record<string, { default: string }>,
  altPrefix: string,
): GalleryItem[] {
  return Object.keys(modules)
    .sort((a, b) =>
      fileNameFromPath(a).localeCompare(fileNameFromPath(b), undefined, { numeric: true }),
    )
    .map((path) => {
      const file = fileNameFromPath(path);
      const label = file.replace(/\.(jpe?g|png|webp)$/i, "").replace(/_/g, " ");
      return {
        src: modules[path]!.default,
        alt: `${altPrefix} — ${label}`,
        caption: label,
      };
    });
}

export const kartMedia: Record<
  KartVariant,
  { hero: string; contain: boolean; details: GalleryItem[] }
> = {
  shifter: {
    hero: gokart,
    contain: true,
    details: itemsFromGlob(shifterModules, "Kart Magik Shifter"),
  },
  "direct-drive": {
    hero: directDrive,
    contain: true,
    details: itemsFromGlob(directModules, "Kart Magik Direct Drive"),
  },
};
