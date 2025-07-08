"use client";
import Image from "next/image";
import ButtonCreations from "./ButtonCreations";
import { CreationDefinition } from "@/lib/definitions";
import Link from "next/link";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

export default function Creations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const refButton = useRef(null);
  const isInViewButton = useInView(refButton, { once: true, amount: 0.3 });

  const containerVariantsFather = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const creations = [
    {
      title: "Deep earth",
      img: "/assets/images/desktop/image-deep-earth.jpg",
      imgMobile: "/assets/images/mobile/image-deep-earth.jpg",
    },
    {
      title: "Night arcade",
      img: "/assets/images/desktop/image-night-arcade.jpg",
      imgMobile: "/assets/images/mobile/image-night-arcade.jpg",
    },
    {
      title: "Soccer team VR",
      img: "/assets/images/desktop/image-soccer-team.jpg",
      imgMobile: "/assets/images/mobile/image-soccer-team.jpg",
    },
    {
      title: "The grid",
      img: "/assets/images/desktop/image-grid.jpg",
      imgMobile: "/assets/images/mobile/image-grid.jpg",
    },
    {
      title: "From up above VR",
      img: "/assets/images/desktop/image-from-above.jpg",
      imgMobile: "/assets/images/mobile/image-from-above.jpg",
    },
    {
      title: "Pocket borealis",
      img: "/assets/images/desktop/image-pocket-borealis.jpg",
      imgMobile: "/assets/images/mobile/image-pocket-borealis.jpg",
    },
    {
      title: "The curiosity",
      img: "/assets/images/desktop/image-curiosity.jpg",
      imgMobile: "/assets/images/mobile/image-curiosity.jpg",
    },
    {
      title: "Make it fisheye",
      img: "/assets/images/desktop/image-fisheye.jpg",
      imgMobile: "/assets/images/mobile/image-fisheye.jpg",
    },
  ];

  return (
    <>
      <section className="flex flex-col gap-10 pb-20 pt-5 sm:px-15 lg:px-0 bg-white text-black max-w-5xl w-full m-auto">
        <motion.header
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center sm:justify-between items-center uppercase "
        >
          <h3 className="text-4xl sm:text-5xl  ">Our creations</h3>
          <div className="hidden sm:block">
            <ButtonCreations />
          </div>
        </motion.header>
        <motion.section
          variants={containerVariantsFather}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-4 gap-5 "
        >
          {creations.map((creation, index) => (
            <Creation key={index} {...creation} index={index} />
          ))}
        </motion.section>

        <motion.div
          ref={refButton}
          initial={{ opacity: 0, y: 50 }}
          animate={isInViewButton ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="block sm:hidden m-auto "
        >
          <ButtonCreations />
        </motion.div>
      </section>
    </>
  );
}

export function Creation({
  img,
  title,
  imgMobile,
  index,
}: CreationDefinition & { index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
      className=" flex flex-col items-center sm:nth-[4n]:items-end sm:nth-[4n+1]:items-start "
    >
      <Link
        href="#"
        className="group relative hover:cursor-pointer w-fit hover:after:content-[''] hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:w-full hover:after:h-full hover:after:bg-white/50 hover:after:z-0 hover:after:transition-all hover:after:duration-500 ease-in-out"
      >
        <Image
          src={img}
          alt={title}
          className="hidden sm:block"
          width={250}
          height={500}
        />
        <Image
          src={imgMobile}
          alt={title}
          className="block sm:hidden"
          width={350}
          height={500}
        />
        <h3 className="absolute -bottom-[0.5rem] sm:-bottom-[0rem] left-[5rem]  max-w-[7rem] -translate-x-1/2 -translate-y-1/2 uppercase text-xl text-balance text-white group-hover:text-black z-10 transition-all">
          {title}
        </h3>
      </Link>
    </motion.div>
  );
}
