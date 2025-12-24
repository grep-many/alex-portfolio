"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "./Icon";

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative mx-auto flex w-full max-w-sm items-center justify-center rounded-3xl border border-black/20 p-4 lg:h-140 dark:border-white/20"
      style={{
        background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Decorative corner icons (no hover logic needed) */}
      <Icon className="absolute -top-3 -left-3 h-10 w-10 opacity-30 dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-10 w-10 opacity-30 dark:text-white" />
      <Icon className="absolute -top-3 -right-3 h-10 w-10 opacity-30 dark:text-white" />
      <Icon className="absolute -right-3 -bottom-3 h-10 w-10 opacity-30 dark:text-white" />

      {/* Canvas reveal layer */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-10 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-30 px-10 text-center">
        {/* Phase 1 icon */}
        <motion.div
          animate={{
            opacity: hovered ? 0 : 1,
            y: hovered ? -16 : 0,
            scale: hovered ? 0.95 : 1,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 flex min-w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
        >
          {icon}
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={false}
          animate={{
            opacity: hovered ? 1 : 0,
            y: hovered ? -8 : 0,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="mt-4 text-3xl font-bold text-white"
        >
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={false}
          animate={{
            opacity: hovered ? 1 : 0,
            y: hovered ? -8 : 0,
          }}
          transition={{ duration: 0.2, delay: 0.05, ease: "easeOut" }}
          className="mt-4 text-sm"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </motion.p>
      </div>
    </div>
  );
};

export default Card;
