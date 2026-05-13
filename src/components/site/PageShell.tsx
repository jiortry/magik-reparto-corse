import { motion } from "framer-motion";

export function PageShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`relative pt-28 lg:pt-32 pb-24 ${className}`}
    >
      {children}
    </motion.main>
  );
}
