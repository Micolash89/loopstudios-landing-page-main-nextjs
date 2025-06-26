import Image from "next/image";
import ButtonCreations from "./ButtonCreations";

export default function Creations() {
  const creations = [
    {
      title: "Deep earth",
      img: "/assets/images/desktop/image-deep-earth.jpg",
    },
    {
      title: "Night arcade",
      img: "/assets/images/desktop/image-night-arcade.jpg",
    },
    {
      title: "Soccer team VR",
      img: "/assets/images/desktop/image-soccer-team.jpg",
    },
    {
      title: "The grid",
      img: "/assets/images/desktop/image-grid.jpg",
    },
    {
      title: "From up above VR",
      img: "/assets/images/desktop/image-from-above.jpg",
    },
    {
      title: "Pocket borealis",
      img: "/assets/images/desktop/image-pocket-borealis.jpg",
    },
    {
      title: "The curiosity",
      img: "/assets/images/desktop/image-curiosity.jpg",
    },
    {
      title: "Make it fisheye",
      img: "/assets/images/desktop/image-fisheye.jpg",
    },
  ];

  return (
    <>
      <section className="flex flex-col gap-10 pb-20 pt-5 sm:px-15 lg:px-20 bg-white text-black">
        <header className="flex justify-between items-center uppercase">
          <h3 className="text-3xl ">Our creations</h3>
          <div className="hidden sm:block">
            <ButtonCreations />
          </div>
        </header>
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {creations.map((creation, index) => (
            <Creation key={index} title={creation.title} img={creation.img} />
          ))}
        </section>

        {/* Deep earth
  Night arcade
  Soccer team VR
  The grid
  From up above VR
  Pocket borealis
  The curiosity
  Make it fisheye */}
        <div className="block sm:hidden">
          <ButtonCreations />
        </div>
      </section>
    </>
  );
}

export function Creation({ title, img }: { title: string; img: string }) {
  return (
    <div className="relative flex flex-col gap-5 hover:cursor-pointer ">
      <Image src={img} alt={title} width={100} height={500} />
      <h3 className="absolute -bottom-[0.5rem] left-[2.7rem] max-w-[3.4rem] -translate-x-1/2 -translate-y-1/2 uppercase text-xs text-balance text-white">
        {title}
      </h3>
    </div>
  );
}
