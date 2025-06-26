"use client";
import { LinksHeaderDefinition } from "@/lib/definitions";
import Image from "next/image";
import { useState } from "react";

export default function LinksHeaderMobile({
  arrLinks,
}: Readonly<{ arrLinks: LinksHeaderDefinition[] }>) {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <button className="sm:hidden mr-5" onClick={handleShowMenu}>
        <Image
          src={
            showMenu
              ? "/assets/images/icon-close.svg"
              : "/assets/images/icon-hamburger.svg"
          }
          alt={showMenu ? "icon-close" : "icon-hamburger"}
          width={20}
          height={20}
        />
      </button>
     {showMenu && <ul className="fixed top-25 left-0 w-full h-screen bg-black flex flex-col gap-5 sm:hidden">
        {arrLinks.map((link, index) => (
          <LinksHeader key={index} name={link.name} url={link.url} index = {index}/>
        ))}
      </ul>}
    </>
  );
}

export function LinksHeader({ name, url, index }: {name : string, url: string, index: number}) {
  return (
    <li className={`${index==0 ? "mt-20" : ""} ml-5`}>
      <a href={url} className="uppercase text-xl">
        {name}
      </a>
    </li>
  );
}
