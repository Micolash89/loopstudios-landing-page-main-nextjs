import Image from "next/image";
import React from "react";

export default function Content() {
  return (
    <>
      <section className="flex sm:flex-row flex-col justify-center w-full pt-25 pb-15 bg-white text-black sm:justify-start relative gap-5 m-auto max-w-5xl">
        <div className="max-w-5xl w-full flex justify-center items-center flex-col sm:block ">
          <div className="h-full sm:w-full">
            <Image
              src={"/assets/images/desktop/image-interactive.jpg"}
              className="h-full hidden sm:inline-block"
              alt="image"
              width={800}
              height={800}
            />
            <Image
              src={"/assets/images/mobile/image-interactive.jpg"}
              className="h-full inline-block sm:hidden"
              alt="image"
              width={500}
              height={500}
            />
          </div>
          <div
            className="flex flex-col gap-10 max-w-lg p-10 sm:p-0 sm:pt-20 sm:pl-20 sm:absolute sm:bottom-[3.6rem] sm:-right-[3rem] bg-white text-balance
        "
          >
            <h2 className="sm:text-5xl text-4xl uppercase text-center mt-10 sm:mt-0 sm:text-left font-medium">
              The leader in interactive VR
            </h2>

            <p className="text-sm text-gray-500 font-bold sm:text-left  text-center leading-7">
              Founded in 2011, <strong>Loopstudios</strong> has been producing
              world-class virtual reality projects for some of the best
              companies around the globe. Our award-winning creations have
              transformed businesses through digital experiences that bind to
              their brand.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
