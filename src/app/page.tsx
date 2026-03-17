import { Navbar }       from "@/components/sections/Navbar";
import { Hero }         from "@/components/sections/Hero";
import { About }        from "@/components/sections/About";
import { WhyMe }        from "@/components/sections/WhyMe";
import { Projects }     from "@/components/sections/Projects";
import { Contact }      from "@/components/sections/Contact";
import { Footer }       from "@/components/sections/Footer";
import { SplashScreen } from "@/components/sections/SplashScreen";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
