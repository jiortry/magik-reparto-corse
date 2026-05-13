import kartPit from "@/assets/kart-pitlane.jpg";
import pilot from "@/assets/pilot-helmet.jpg";
import kartCorner from "@/assets/kart-corner.jpg";
import kartTrack from "@/assets/kart-track.jpg";
import kartStudio from "@/assets/kart-studio.jpg";
import team from "@/assets/team.jpg";
import type { GalleryItem } from "@/components/site/Gallery";

export const galleryItems: GalleryItem[] = [
  { src: kartPit, alt: "Kart Magik in pit lane", caption: "Pit Lane" },
  { src: pilot, alt: "Pilota MAGIK Reparto Corse", caption: "Pilot Focus" },
  { src: kartCorner, alt: "Kart Magik in curva", caption: "Apex" },
  { src: kartTrack, alt: "Kart Magik in pista", caption: "Race Pace" },
  { src: kartStudio, alt: "Kart Magik allestito", caption: "Studio Setup" },
  { src: team, alt: "Team MAGIK Reparto Corse", caption: "The Team" },
  { src: kartCorner, alt: "Kart Magik #130", caption: "#130" },
  { src: kartTrack, alt: "Kart Magik on track" , caption: "Full Throttle" },
];
