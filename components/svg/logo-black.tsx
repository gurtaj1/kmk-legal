import { motion } from "framer-motion";
import type { MotionSVGProps } from "./types";

const LogoBlack = (props: MotionSVGProps) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    id="Layer_1"
    data-name="Layer 1"
    {...props}
  >
    <defs>
      <style>{`fill:${props.fill || "#fff"}`}</style>
    </defs>
    <path d="M257.941 216.221v.082L144.377 61.39H65.719l120.524 166.267L60.15 357.529h78.262l91.884-85.421 27.645 28.689v56.732h63.742v-55.191zM621.303 227.657 741.829 61.39h-78.662L549.605 216.303v-.082l-63.842 86.117v55.191h63.842v-56.732l27.645-28.689 91.884 85.421h78.262zM479.399 61.39l-75.676 122.114L328.047 61.39h-70.106v122.413l63.742 86.117V165.406l82.04 125.198 82.04-125.198V269.92l63.842-86.117V61.39z" />
  </motion.svg>
);

export default LogoBlack;
