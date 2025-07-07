import { LinksHeaderDefinition } from "@/lib/definitions";
import Image from "next/image";
import LinksHeaderMobile from "./LinksHeaderMobile";
import Link from "next/link";

export default function Header() {
  const arrLinks = [
    { name: "About", url: "#" },
    { name: "Careers", url: "#" },
    { name: "Events", url: "#" },
    { name: "Support", url: "#" },
    { name: "Products", url: "#" },
  ];

  return (
    <header className="py-10 max-w-5xl w-full mx-auto">
      <nav className="flex w-full justify-between">
        <Link href="/" className="ml-5 sm:ml-0 ">
          <Image
            src="/assets/images/logo.svg"
            alt="logo loopstudios"
            width={150}
            height={150}
          />
        </Link>
        <ul className="gap-10 hidden sm:flex">
          {arrLinks.map((link, index) => (
            <LinksHeader key={index} name={link.name} url={link.url} />
          ))}
        </ul>
        <LinksHeaderMobile arrLinks={arrLinks} />
      </nav>
    </header>
  );
}

export function LinksHeader({ name, url }: Readonly<LinksHeaderDefinition>) {
  return (
    <>
      <li className="font-bold ">
        <Link
          href={url}
          className="relative group transition-all duration-300 ease-in-out"
        >
          <span className="">{name}</span>
          <span className="absolute -bottom-2 left-2 right-2 h-0.5 bg-current transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-75"></span>
        </Link>
      </li>
    </>
  );
}
