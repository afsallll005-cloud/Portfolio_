"use client";



import Navbar from "@/components/Navbar/Navbar";
import "./Home.css";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contacts";
import Footer from "@/components/Footer/Footer";
import IntroTxt from "@/components/IntroTxt/IntroText";
import VisionSection from "@/components/VisionSection/VisionSection";
import Works from "@/components/Works/Works";

export default function Home() {
  return (
    <main className="portfolio">

      <Navbar />
      <Hero />
      <IntroTxt/>
      <VisionSection />
      <About />
      <Works />
      <Projects />
      {/* <Experience /> */}
      <Contact />
      <Footer />

    </main>
  );
}