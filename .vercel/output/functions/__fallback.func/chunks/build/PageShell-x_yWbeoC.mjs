import { V as jsxRuntimeExports } from "./server-DVrhaJxa.mjs";
import { m as motion } from "./router-DrWWhRp2.mjs";
function PageShell({
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.main,
    {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4 },
      className: `relative pt-28 lg:pt-32 pb-24 ${className}`,
      children
    }
  );
}
export {
  PageShell as P
};
