import Content from "@/components/Content";
import Creations from "@/components/Creations";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
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
    </>
  );
}
