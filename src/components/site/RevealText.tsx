import { useEffect, useRef, useState } from "react";
import { motion, useInView, type HTMLMotionProps } from "framer-motion";

type Tag = "h1" | "h2" | "h3" | "p" | "span" | "div";

const MOTION_TAG: Record<Tag, React.ElementType> = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
  div: motion.div,
};

/**
 * Word-by-word reveal: the sentence "writes itself" as it enters the viewport.
 * Blur + lift per word, staggered — expensive to tune, effortless to read.
 */
export function RevealText({
  text,
  as = "p",
  className = "",
  delay = 0,
  stagger = 0.035,
  once = true,
  ...rest
}: {
  text: string;
  as?: Tag;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
} & Omit<HTMLMotionProps<"div">, "children">) {
  const Comp = MOTION_TAG[as];
  const words = text.split(" ");
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px 0px -15% 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      aria-label={text}
      {...rest}
    >
      {words.map((w, i) => (
        // Padding + negative margin keep italic overhang and descenders out of the clip mask.
        <span
          key={`${w}-${i}`}
          className="inline-block overflow-hidden align-bottom pb-[0.16em] -mb-[0.16em] pr-[0.1em] -mr-[0.1em]"
        >
          <motion.span
            aria-hidden
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: "0.9em", opacity: 0, filter: "blur(6px)" },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Comp>
  );
}

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#*";

/**
 * Telemetry-style scramble: the label resolves character by character.
 * Runs once on enter, respects reduced motion.
 */
export function ScrambleText({
  text,
  className = "",
  speed = 28,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const [out, setOut] = useState(text);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOut(text);
      return;
    }
    let frame = 0;
    const id = window.setInterval(() => {
      frame += 1;
      const revealed = Math.floor(frame / 2);
      if (revealed >= text.length) {
        setOut(text);
        window.clearInterval(id);
        return;
      }
      setOut(
        text
          .split("")
          .map((c, i) => {
            if (i < revealed || c === " ") return c;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join(""),
      );
    }, speed);
    return () => window.clearInterval(id);
  }, [inView, text, speed]);

  return (
    <span ref={ref} className={className}>
      {out}
    </span>
  );
}
