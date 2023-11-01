"use client"
import { motion } from "framer-motion";

const Layout = ({ children }: {children: React.ReactNode}) => (
  <motion.div
    initial={{ x: 0, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 0, opacity: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}
  >
    {children}
  </motion.div>
);
export default Layout;