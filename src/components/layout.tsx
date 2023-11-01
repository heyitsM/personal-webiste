"use client"
import { motion } from "framer-motion";

interface LayoutContent {
  route: string;
  children: React.ReactNode;
}

export default function Layout(props: LayoutContent) {
  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      key={props.route}
    >
      {props.children}
    </motion.div>
  );
};