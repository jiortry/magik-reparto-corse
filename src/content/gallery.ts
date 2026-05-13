import type { GalleryItem } from "@/components/site/Gallery";

const jpgModules = import.meta.glob<{ default: string }>("../assets/gallery/*.jpg", {
  eager: true,
});
const upperJpgModules = import.meta.glob<{ default: string }>("../assets/gallery/*.JPG", {
  eager: true,
});
const jpegModules = import.meta.glob<{ default: string }>("../assets/gallery/*.jpeg", {
  eager: true,
});

const modules = { ...jpgModules, ...upperJpgModules, ...jpegModules };

function fileNameFromPath(path: string): string {
  const seg = path.split("/");
  return seg[seg.length - 1] ?? path;
}

function labelFromFileName(name: string): string {
  return name.replace(/\.(jpe?g)$/i, "").replace(/_/g, " ");
}

const sortedPaths = Object.keys(modules).sort((a, b) =>
  fileNameFromPath(a).localeCompare(fileNameFromPath(b), undefined, { numeric: true }),
);

export const galleryItems: GalleryItem[] = sortedPaths.map((path) => {
  const file = fileNameFromPath(path);
  const label = labelFromFileName(file);
  return {
    src: modules[path]!.default,
    alt: `Kart Magik — MAGIK Reparto Corse (${label})`,
    caption: `MAGIK · ${label}`,
  };
});
