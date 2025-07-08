"use client";

import { arrImgLinksDefinition, arrLinksDefinition } from "@/lib/definitions";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const refSpan = useRef(null);
  const isInViewSpan = useInView(refSpan, { once: true, amount: 0.3 });

  const arrLinks: arrLinksDefinition[] = [
    { name: "About", url: "#" },
    { name: "Careers", url: "#" },
    { name: "Events", url: "#" },
    { name: "Support", url: "#" },
    { name: "Products", url: "#" },
  ];

  const arrImgLinks: arrImgLinksDefinition[] = [
    { name: "Facebook", urlRef: "#", url: "assets/images/icon-facebook.svg" },
    { name: "Twitter", urlRef: "#", url: "assets/images/icon-twitter.svg" },
    { name: "Pinterest", urlRef: "#", url: "assets/images/icon-pinterest.svg" },
    { name: "Instagram", urlRef: "#", url: "assets/images/icon-instagram.svg" },
  ];

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

  return (
    <>
      <footer className="py-12 flex flex-col gap-10 items-center sm:flex-row sm:justify-between w-full m-auto bg-black">
        <div className="max-w-5xl w-full m-auto flex flex-col items-center sm:grid sm:grid-cols-2 gap-10 ">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-center sm:justify-start w-full  sm:order-1"
          >
            <Link href="/">
              <Image
                src="/assets/images/logo.svg"
                alt="logo"
                width={135}
                height={135}
              />
            </Link>
          </motion.div>
          <nav className="sm:order-3 ">
            <motion.ul
              variants={containerVariantsFather}
              initial="hidden"
              animate="visible"
              className="flex justify-center sm:justify-start  flex-col gap-5 sm:gap-10 sm:flex-row"
            >
              {arrLinks.map((link, index) => (
                <LinksFooter key={index} {...link} index={index} />
              ))}
            </motion.ul>
          </nav>

          <nav className="sm:order-2">
            <motion.ul
              variants={containerVariantsFather}
              initial="hidden"
              animate="visible"
              className="flex justify-center sm:justify-end gap-4 "
            >
              {arrImgLinks.map((link, index) => (
                <ImgLinksFooter key={index} {...link} index={index} />
              ))}
            </motion.ul>
          </nav>
          <motion.span
            ref={refSpan}
            initial={{ opacity: 0, y: 50 }}
            animate={
              isInViewSpan ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-sm font-light sm:text-right sm:order-4"
          >
            © 2021 <strong>Loopstudios</strong>. All rights reserved.
          </motion.span>
        </div>
      </footer>
    </>
  );
}

export function LinksFooter({
  name,
  url,
  index,
}: Readonly<arrLinksDefinition> & { index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="font-bold "
    >
      <Link
        href={url}
        className="relative group transition-all duration-300 ease-in-out"
      >
        <span className="text-sm font-bold">{name}</span>
        <span className="absolute -bottom-2 left-2 right-2 h-0.5 bg-current transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-75"></span>
      </Link>
    </motion.li>
  );
}

export function ImgLinksFooter({
  name,
  url,
  urlRef,
  index,
}: Readonly<arrImgLinksDefinition> & { index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="font-bold "
    >
      <Link
        href={urlRef}
        className="relative group transition-all duration-300 ease-in-out"
        title={name}
      >
        <Image src={url} alt={name} width={25} height={25} />

        <span className="absolute -bottom-2 left-2 right-2 h-0.5 bg-current transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-[300%]"></span>
      </Link>
    </motion.li>
  );
}
