import { useLang } from "@/i18n/LanguageProvider";
import { SiteSplash } from "./SiteSplash";

export function KartTransition() {
  const { isTransitioning } = useLang();
  return <SiteSplash visible={isTransitioning} variant="kart" playIntro className="z-[200]" />;
}
