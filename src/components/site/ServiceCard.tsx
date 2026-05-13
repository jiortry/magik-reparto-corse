import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export function ServiceCard({
  icon,
  title,
  body,
  index,
}: {
  icon: string;
  title: string;
  body: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 20 });
  const sy = useSpring(my, { stiffness: 200, damping: 20 });
  const rx = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const ry = useTransform(sx, [-0.5, 0.5], [-6, 6]);

  const fromLeft = index % 2 === 0;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, x: fromLeft ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: fromLeft ? -80 : 80 }}
      viewport={{ margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="group relative overflow-hidden border border-border bg-card carbon-texture p-6 md:p-7 hover:border-primary/60 transition-colors"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 transition-opacity" />
      <div className="relative">
        <div className="flex items-start justify-between">
          <span className="text-4xl select-none drop-shadow-[0_4px_12px_rgba(225,6,0,0.4)]">
            {icon}
          </span>
          <span className="font-display text-[10px] uppercase tracking-widest text-accent/70">
            0{index + 1}
          </span>
        </div>
        <h3 className="mt-5 font-display font-bold uppercase tracking-tight text-xl leading-tight text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
        <div className="mt-5 h-px bg-border group-hover:bg-primary/60 transition-colors" />
      </div>
    </motion.article>
  );
}
