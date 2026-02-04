import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Career from "@/components/Career";
import Awards from "@/components/Awards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Career />
        <Awards />
      </main>
      <Footer />
    </>
  );
}
