"use client";
import { LinksHeaderDefinition } from "@/lib/definitions";
import Image from "next/image";
import LinksHeaderMobile from "./LinksHeaderMobile";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const arrLinks = [
    { name: "About", url: "#" },
    { name: "Careers", url: "#" },
    { name: "Events", url: "#" },
    { name: "Support", url: "#" },
    { name: "Products", url: "#" },
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

  const variantsNormal = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <header className="py-10 max-w-5xl w-full mx-auto">
      <motion.nav
        variants={variantsNormal}
        initial="hidden"
        animate="visible"
        className="flex w-full justify-between"
      >
        <Link href="/" className="ml-5 sm:ml-0 ">
          <Image
            src="/assets/images/logo.svg"
            alt="logo loopstudios"
            width={150}
            height={150}
          />
        </Link>
        <motion.ul
          variants={containerVariantsFather}
          initial="hidden"
          animate="visible"
          className="gap-10 hidden sm:flex"
        >
          {arrLinks.map((link, index) => (
            <LinksHeader
              key={index}
              name={link.name}
              url={link.url}
              index={index}
            />
          ))}
        </motion.ul>
        <LinksHeaderMobile arrLinks={arrLinks} />
      </motion.nav>
    </header>
  );
}

export function LinksHeader({
  name,
  url,
  index,
}: LinksHeaderDefinition & { index: number }) {
  const variantsChildren = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: index * 0.1,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <>
      <motion.li
        variants={variantsChildren}
        initial="hidden"
        animate="visible"
        className="font-bold "
      >
        <Link
          href={url}
          className="relative group transition-all duration-300 ease-in-out"
        >
          <span className="">{name}</span>
          <span className="absolute -bottom-2 left-2 right-2 h-0.5 bg-current transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-75"></span>
        </Link>
      </motion.li>
    </>
  );
}
