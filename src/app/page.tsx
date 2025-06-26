import Content from "@/components/Content";
import Creations from "@/components/Creations";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {  josefin_Sans } from "@/lib/fonts";

export default function Home() {
  return (
    <div className={`${josefin_Sans.className} min-h-screen flex flex-col  mx-auto w-full`}>
      <div className="sm:bg-[url('/assets/images/desktop/image-hero.jpg')] bg-cover bg-center bg-no-repeat bg-[url('/assets/images/mobile/image-hero.jpg')] pt-10 pb-20 sm:px-15 lg:px-20 flex flex-col gap-10">

      <Header />

      <h1 className="uppercase text-4xl sm:text-6xl border border-white p-5 w-fit sm:max-w-[30rem] text-balance  text-left justify-self-start">Immersive experiences that deliver</h1>

      </div>
        <Content />
        <Creations />
      
      <Footer />

      {/* <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div> */}
    </div>
  );
}
