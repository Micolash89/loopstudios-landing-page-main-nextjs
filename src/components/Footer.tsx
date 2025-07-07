import { arrImgLinksDefinition, arrLinksDefinition } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
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

  return (
    <>
      <footer className="py-12 flex flex-col gap-10 items-center sm:flex-row sm:justify-between w-full m-auto bg-black">
        <div className="max-w-5xl w-full m-auto">

        
        <div className="flex flex-col items-center gap-10 sm:items-start">
          <Link href="/">
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              width={135}
              height={135}
            />
          </Link>

          <nav>
            <ul className="flex justify-center flex-col gap-5 sm:gap-10 sm:flex-row">
              {arrLinks.map((link, index) => (
                <LinksFooter key={index} {...link} />
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col items-center gap-5 mt-10 sm:mt-0 sm:items-end">
          <nav>
            <ul className="flex justify-center gap-4 ">
              {arrImgLinks.map((link, index) => (
                <ImgLinksFooter key={index} {...link} />
              ))}
            </ul>
          </nav>
          <span className="text-sm font-light">
            © 2021 <strong>Loopstudios</strong>. All rights reserved.
          </span>
        </div>
        </div>
      </footer>
    </>
  );
}

export function LinksFooter({ name, url }: Readonly<arrLinksDefinition>) {
  return (
    <li className="font-bold ">
      <Link
        href={url}
        className="relative group transition-all duration-300 ease-in-out"
      >
        <span className="text-sm font-bold">{name}</span>
        <span className="absolute -bottom-2 left-2 right-2 h-0.5 bg-current transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-75"></span>
      </Link>
    </li>
  );
}

export function ImgLinksFooter({
  name,
  url,
  urlRef,
}: Readonly<arrImgLinksDefinition>) {
  return (
    <li className="font-bold ">
      <Link
        href={urlRef}
        className="relative group transition-all duration-300 ease-in-out"
        title={name}
      >
        <Image src={url} alt={name} width={25} height={25} />

        <span className="absolute -bottom-2 left-2 right-2 h-0.5 bg-current transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-[300%]"></span>
      </Link>
    </li>
  );
}
