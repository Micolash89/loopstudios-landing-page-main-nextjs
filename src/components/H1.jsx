"use client";
import React from "react";
import { motion } from "framer-motion";

export default function H1() {
    
  const variantsNormal = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className=" w-full  max-w-5xl m-auto">
      <motion.h1
        variants={variantsNormal}
        initial="hidden"
        animate="visible"
        className="uppercase m-auto sm:mr-auto sm:ml-0 text-4xl sm:text-6xl border border-white p-5 w-fit sm:max-w-[30rem] text-balance text-left sm:justify-self-start  max-w-[20rem]"
      >
        Immersive experiences that deliver
      </motion.h1>
    </div>
  );
}
