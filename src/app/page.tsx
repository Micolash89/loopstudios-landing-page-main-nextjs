import Content from "@/components/Content";
import Creations from "@/components/Creations";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {  josefin_Sans } from "@/lib/fonts";

export default function Home() {
  return (
    <div className={`${josefin_Sans.className} min-h-screen flex flex-col max-w-5xl mx-auto w-full`}>
      <Header />
      <main>
        <Content />
        <Creations />
      </main>
      <Footer />

      {/* <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div> */}
    </div>
  );
}
