import { useEffect, useState } from "react";
import { INTRO_SPLASH_GONE_MS, SiteSplash } from "./SiteSplash";

export function IntroLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const delay = reduce ? 500 : INTRO_SPLASH_GONE_MS;
    const t = window.setTimeout(() => setVisible(false), delay);
    return () => window.clearTimeout(t);
  }, []);

  return <SiteSplash visible={visible} playIntro />;
}
