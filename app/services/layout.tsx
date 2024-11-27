"use client";

import { ServicesNav } from "@/components/services-nav";
import { motion } from "framer-motion";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container py-12">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <aside className="hidden md:block">
          <ServicesNav />
        </aside>
        <main>{children}</main>
      </motion.div>
    </div>
  );
}