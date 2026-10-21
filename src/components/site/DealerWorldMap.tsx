import { useEffect, useId, useRef, useState } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpLeft,
  ArrowUpRight,
  Globe2,
  LocateFixed,
  Minus,
  Plus,
} from "lucide-react";
import { dealers } from "@/content/dealers";
import countries from "@/content/world-map.json";
import { dealerMapPoint, dealerMapView } from "@/lib/dealer-map";
import type { Dict, Lang } from "@/i18n/dictionary";
import { DealerContactPanel } from "./DealerContactPanel";
import "./dealer-world-map.css";

type Props = { lang: Lang; copy: Dict["dealers"] };
const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

export function DealerWorldMap({ lang, copy }: Props) {
  const [selectedId, setSelectedId] = useState(dealers[0].id);
  const [zoom, setZoom] = useState(1);
  const navigate = useNavigate();
  const hash = useRouterState({ select: (state) => state.location.hash });
  const reducedMotion = useReducedMotion();
  const mapRef = useRef<HTMLElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const id = useId().replace(/:/g, "");
  const selected = dealers.find((dealer) => dealer.id === selectedId) ?? dealers[0];
  const view = dealerMapView(selected.coordinates, zoom);
  const servedCountries = new Set(
    dealers.flatMap((dealer) => dealer.areaServed ?? [dealer.countryCode]),
  );
  const selectedCountries = selected.areaServed ?? [selected.countryCode];

  useEffect(() => {
    const linkedDealer = dealers.find((dealer) => dealer.id === hash);
    setSelectedId(linkedDealer?.id ?? dealers[0].id);
  }, [hash]);

  function selectDealer(dealerId: string) {
    setSelectedId(dealerId);
    void navigate({ hash: dealerId, replace: true, resetScroll: false, hashScrollIntoView: false });
    if (window.matchMedia("(max-width: 1023px)").matches) {
      detailRef.current?.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  }

  const markers = dealers.map((dealer) => {
    const point = dealerMapPoint(dealer.coordinates);
    const x = ((point.x - view.x) / view.width) * 100;
    const y = ((point.y - view.y) / view.height) * 100;
    const label =
      zoom === 1
        ? dealer.mapLabel
        : {
            x: clamp(x + (dealer.countryCode === "DE" ? -14 : 14), 15, 85),
            y: clamp(y + (dealer.countryCode === "DE" ? -22 : 22), 10, 90),
          };
    return { dealer, x, y, label, visible: x >= 1 && x <= 99 && y >= 2 && y <= 98 };
  });

  return (
    <section ref={mapRef} className="dealer-network scroll-mt-24" aria-label={copy.mapTitle}>
      <div className="dealer-network-bar">
        <span className="flex items-center gap-2.5">
          <Globe2 size={15} aria-hidden="true" />
          MAGIK WORLDWIDE
        </span>
        <span className="dealer-network-status">
          <span />
          {copy.mapNetwork}
        </span>
      </div>

      <div className="dealer-network-grid">
        <div className="dealer-map-side">
          <div className="dealer-map-intro">
            <p>{copy.mapExplore}</p>
            <span>
              <span className="text-primary">{String(dealers.length).padStart(2, "0")}</span>{" "}
              {copy.mapDealers}
            </span>
          </div>

          <div className="dealer-map-canvas" role="group" aria-label={copy.mapTitle}>
            <svg
              className="dealer-map-geography"
              viewBox={`${view.x} ${view.y} ${view.width} ${view.height}`}
              aria-hidden="true"
            >
              <defs>
                <pattern id={`${id}-dots`} width="6" height="6" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.65" fill="#6c747d" opacity="0.25" />
                </pattern>
                <radialGradient id={`${id}-sea`}>
                  <stop offset="0" stopColor="#20262c" />
                  <stop offset="1" stopColor="#0d1013" />
                </radialGradient>
                <linearGradient id={`${id}-land`} x1="0" x2="0.4" y1="0" y2="1">
                  <stop offset="0" stopColor="#30373e" />
                  <stop offset="1" stopColor="#1a2026" />
                </linearGradient>
              </defs>
              <rect width="1000" height="500" fill={`url(#${id}-sea)`} />
              <g
                className="dealer-map-graticule"
                fill="none"
                stroke="#68727e"
                strokeWidth="0.45"
                opacity="0.13"
              >
                {[-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150].map((longitude) => {
                  const x = dealerMapPoint({ longitude, latitude: 0 }).x;
                  return <path key={longitude} d={`M${x},0V500`} />;
                })}
                {[-45, -15, 15, 45, 75].map((latitude) => {
                  const y = dealerMapPoint({ longitude: 0, latitude }).y;
                  return <path key={latitude} d={`M0,${y}H1000`} />;
                })}
              </g>
              <g strokeLinejoin="round" strokeWidth="0.6" vectorEffect="non-scaling-stroke">
                {countries.map((country) => (
                  <path
                    key={`${country.code}-${country.path.slice(0, 25)}`}
                    d={country.path}
                    fill={
                      selectedCountries.includes(country.code)
                        ? "#8b232b"
                        : servedCountries.has(country.code)
                          ? "#4a272d"
                          : `url(#${id}-land)`
                    }
                    stroke={servedCountries.has(country.code) ? "#d8494e" : "#47505a"}
                    className="dealer-map-country"
                  />
                ))}
              </g>
              <g fill={`url(#${id}-dots)`} pointerEvents="none">
                {countries.map((country) => (
                  <path key={`${country.code}-${country.path.slice(0, 25)}`} d={country.path} />
                ))}
              </g>
            </svg>

            <svg className="dealer-map-connectors" viewBox="0 0 1000 500" aria-hidden="true">
              {markers
                .filter((marker) => marker.visible)
                .map(({ dealer, x, y, label }) => (
                  <path
                    key={dealer.id}
                    d={`M${x * 10},${y * 5}L${label.x * 10},${label.y * 5}`}
                    fill="none"
                    stroke={selectedId === dealer.id ? "#ed383f" : "#9d535a"}
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                    opacity={selectedId === dealer.id ? 0.85 : 0.5}
                  />
                ))}
            </svg>

            {markers
              .filter((marker) => marker.visible)
              .map(({ dealer, x, y, label }) => {
                const active = selectedId === dealer.id;
                return (
                  <div key={dealer.id}>
                    <button
                      type="button"
                      className={`dealer-map-dot ${active ? "is-active" : ""}`}
                      style={{ left: `${x}%`, top: `calc(${y}% + ${dealer.mapOffsetY ?? 0}px)` }}
                      aria-label={`${dealer.name} — ${dealer.country[lang]}`}
                      aria-pressed={active}
                      aria-controls="dealer-details"
                      onClick={() => selectDealer(dealer.id)}
                    >
                      {dealer.mapOffsetY ? (
                        <span
                          className="dealer-map-dot-stem"
                          aria-hidden="true"
                          style={{
                            height: Math.abs(dealer.mapOffsetY),
                            ...(dealer.mapOffsetY < 0 ? { top: "50%" } : { bottom: "50%" }),
                          }}
                        />
                      ) : null}
                      <span className="dealer-map-dot-halo" />
                      <span className="dealer-map-dot-core" />
                    </button>
                    <button
                      type="button"
                      className={`dealer-map-label ${active ? "is-active" : ""}`}
                      style={{ left: `${label.x}%`, top: `${label.y}%` }}
                      onClick={() => selectDealer(dealer.id)}
                      aria-pressed={active}
                      aria-controls="dealer-details"
                    >
                      <span className="dealer-map-label-code">
                        {(dealer.areaServed ?? [dealer.countryCode]).join(" / ")}
                      </span>
                      <span className="dealer-map-label-name">{dealer.country[lang]}</span>
                      <ArrowUpRight size={12} aria-hidden="true" />
                    </button>
                  </div>
                );
              })}
          </div>

          <div className="dealer-map-toolbar">
            <p className="dealer-map-hint">
              <span className="dealer-map-hint-dot" />
              {copy.mapHint}
            </p>
            <div className="dealer-map-controls" role="group" aria-label={copy.mapControls}>
              <button
                type="button"
                onClick={() => setZoom((value) => Math.max(1, value - 1))}
                disabled={zoom === 1}
                aria-label={copy.mapZoomOut}
              >
                <Minus size={17} />
              </button>
              <button
                type="button"
                onClick={() => setZoom((value) => Math.min(4, value + 1))}
                disabled={zoom === 4}
                aria-label={copy.mapZoomIn}
              >
                <Plus size={17} />
              </button>
              <button
                type="button"
                onClick={() => setZoom(1)}
                disabled={zoom === 1}
                aria-label={copy.mapReset}
              >
                <LocateFixed size={17} />
              </button>
            </div>
          </div>

          <nav className="dealer-country-selector" aria-label={copy.mapSelect}>
            {dealers.map((dealer) => (
              <button
                type="button"
                key={dealer.id}
                id={dealer.id}
                onClick={() => selectDealer(dealer.id)}
                aria-pressed={selectedId === dealer.id}
                aria-controls="dealer-details"
                className={selectedId === dealer.id ? "is-active" : ""}
              >
                <span className="dealer-selector-code">
                  {(dealer.areaServed ?? [dealer.countryCode]).join("/")}
                </span>
                <span className="min-w-0">
                  <span className="block text-[13px] font-semibold">{dealer.country[lang]}</span>
                  <span className="mt-0.5 block text-[10px] text-muted-foreground">
                    {dealer.city ?? dealer.region}
                  </span>
                </span>
                <ArrowDownRight size={14} aria-hidden="true" className="ml-auto shrink-0" />
              </button>
            ))}
          </nav>
          <p className="dealer-map-location-note">{copy.mapLocationNote}</p>
        </div>

        <div ref={detailRef} className="dealer-detail-side">
          <button
            type="button"
            className="dealer-back-map"
            onClick={() =>
              mapRef.current?.scrollIntoView({
                behavior: reducedMotion ? "auto" : "smooth",
                block: "start",
              })
            }
          >
            <ArrowUpLeft size={15} aria-hidden="true" />
            {copy.mapBack}
          </button>
          <div aria-live="polite" aria-atomic="true">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.15 }}
              >
                <DealerContactPanel dealer={selected} lang={lang} copy={copy} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
