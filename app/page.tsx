import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome, FaUserAlt, FaLightbulb, FaEnvelope } from "react-icons/fa";
import { TimelineDemo } from "@/components/TimelineDemo";
import Footer from "@/components/Footer";
import { ThreeDMarqueeDemo } from "@/components/three-d-marquee-demo";
import Services from "@/components/Services";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {/* Background effect */}
      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-[#1ca8bb] bg-white [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
      />
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "#home", icon: <FaHome /> },
            { name: "About", link: "#about", icon: <FaUserAlt /> },
            { name: "Projects", link: "#projects", icon: <FaLightbulb /> },
            { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
          ]}
        />

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <TimelineDemo />
        </section>

        <section id="projects">
          <ThreeDMarqueeDemo />
        

       
          <Services />
          <Experience/></section>
 <section id="contact">
          <Footer />
        </section>
      </div>
    </main>
  );
}
