import Image from "next/image";
import React from "react";

export default function Content() {
  return (
    <>
      <section className="flex sm:flex-row flex-col w-full pt-20 pb-10 sm:py-25 sm:px-15 lg:px-20 bg-white px-5 text-black justify-start relative gap-5">
        <div className="h-full">
          <Image src={"/assets/images/desktop/image-interactive.jpg"} className="h-full hidden sm:block" alt="image" width={500} height={500} />
          <Image src={"/assets/images/mobile/image-interactive.jpg"} className="h-full block sm:hidden" alt="image" width={500} height={500} />

        </div>

        <div className="flex flex-col gap-5 max-w-lg p-5 sm:p-0 sm:pt-12 sm:pl-12 sm:absolute sm:bottom-[6rem] sm:right-[0rem] bg-white text-balance
        ">

        <h2 className="text-3xl uppercase text-center sm:text-left">The leader in interactive VR</h2>

        <p className="text-sm text-gray-600 font-bold sm:text-left text-center px-5 ">
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
