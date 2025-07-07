"use client";
import { LinksHeaderDefinition } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LinksHeaderMobile({
  arrLinks,
}: Readonly<{ arrLinks: LinksHeaderDefinition[] }>) {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={``}>
      <button className="sm:hidden mr-5" onClick={handleShowMenu}>
        <Image
          src={"/assets/images/icon-hamburger.svg"}
          alt={showMenu ? "icon-close" : "icon-hamburger"}
          width={20}
          height={20}
        />
      </button>

      {showMenu && (
        <ul className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col gap-5 sm:hidden z-99">
          <li className=" ml-5 mt-20 full flex flex-row">
            <Link href="/" className=" sm:ml-0 w-full justify-between">
              <Image
                src="/assets/images/logo.svg"
                alt="logo loopstudios"
                width={150}
                height={150}
              />
            </Link>
            <button className="sm:hidden  z-101 mr-5" onClick={handleShowMenu}>
              <Image
                src={"/assets/images/icon-close.svg"}
                alt={showMenu ? "icon-close" : "icon-hamburger"}
                width={20}
                height={20}
              />
            </button>
          </li>
          {arrLinks.map((link, index) => (
            <LinksHeader
              key={index}
              name={link.name}
              url={link.url}
              index={index}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export function LinksHeader({
  name,
  url,
  index,
}: {
  name: string;
  url: string;
  index: number;
}) {
  return (
    <li className={`${index === 0 ? "mt-25" : ""} font ml-5`}>
      <Link href={url} className="uppercase text-xl">
        {name}
      </Link>
    </li>
  );
}
