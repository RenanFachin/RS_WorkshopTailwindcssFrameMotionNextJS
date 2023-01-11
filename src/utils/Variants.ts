import { Variants } from "framer-motion";

export const variants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delayChildren: 0.4,
        staggerChildren: 0.5
      }
    }
  }