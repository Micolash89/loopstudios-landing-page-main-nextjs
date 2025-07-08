import Link from "next/link";

export default function ButtonCreations() {
  return (
    <>
      <Link
        href="#"
        className="font-bold hover:bg-black bg-white border tracking-[0.35rem] border-black hover:border-none text-sm hover:text-white px-10 py-3 h-fit text-black transition-all uppercase "
      >
        See all
      </Link>
    </>
  );
}
