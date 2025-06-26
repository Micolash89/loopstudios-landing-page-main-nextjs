import Image from "next/image";
import React from "react";

export default function Content() {
  return (
    <>
      <section className="flex w-full py-25 sm:px-15 lg:px-20 bg-white text-black justify-start relative">
        <div className="h-full">
          <Image src={"/assets/images/desktop/image-interactive.jpg"} className="h-full" alt="image" width={500} height={500} />
        </div>

        <div className="flex flex-col gap-5 max-w-lg pt-12 pl-12 absolute bottom-[6rem] right-[0rem] bg-white text-balance">

        <h2 className="text-3xl uppercase">The leader in interactive VR</h2>

        <p className="text-sm">
          Founded in 2011, <strong>Loopstudios</strong> has been producing
          world-class virtual reality projects for some of the best companies
          around the globe. Our award-winning creations have transformed
          businesses through digital experiences that bind to their brand.
        </p>
        </div>
      </section>
    </>
  );
}
