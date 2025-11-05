"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="relative">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 bg-primary pointer-events-none z-50"
        />
        <div className="min-h-screen overflow-x-hidden overflow-y-auto">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
