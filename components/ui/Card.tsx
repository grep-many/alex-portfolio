"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "./Icon";

const Card = ({
  title,
  icon,
  children,
  // add this one for the desc
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
      // change h-[30rem] to h-[35rem], add rounded-3xl
      className="group/canvas-card relative mx-auto flex w-full max-w-sm items-center justify-center rounded-3xl border border-black/20 p-4 lg:h-140 dark:border-white/20"
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* change to h-10 w-10 , add opacity-30  */}
      <Icon className="absolute -top-3 -left-3 h-10 w-10 transform text-black opacity-30 transition-transform group-hover/canvas-card:rotate-105 motion-safe:duration-300 dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-10 w-10 transform text-black opacity-30 transition-transform group-hover/canvas-card:-rotate-105 motion-safe:duration-300 dark:text-white" />
      <Icon className="absolute -top-3 -right-3 h-10 w-10 transform text-black opacity-30 transition-transform group-hover/canvas-card:-rotate-105 motion-safe:duration-300 dark:text-white" />
      <Icon className="absolute -right-3 -bottom-3 h-10 w-10 transform text-black opacity-30 transition-transform group-hover/canvas-card:rotate-105 motion-safe:duration-300 dark:text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          // add this for making it center
          // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          className="absolute top-[50%] left-[50%] mx-auto flex min-w-40 translate-x-[-50%] translate-y-[-50%] items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0"
        >
          {icon}
        </div>
        <h2
          // change text-3xl, add text-center
          className="relative z-10 mt-4 text-center text-3xl font-bold text-black opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white"
        >
          {title}
        </h2>
        {/* add this one for the description */}
        <p
          className="relative z-10 mt-4 text-center text-sm opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

export default Card;
