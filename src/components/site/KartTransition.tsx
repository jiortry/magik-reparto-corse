import { useLang } from "@/i18n/LanguageProvider";
import { SiteSplash } from "./SiteSplash";

export function KartTransition() {
  const { isTransitioning } = useLang();
  return <SiteSplash visible={isTransitioning} className="z-[200]" />;
}
