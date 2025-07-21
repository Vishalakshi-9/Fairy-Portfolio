import { useEffect, useState } from "react";
import WelcomeModal from "@/components/WelcomeModal";
import MushroomNav from "@/components/MushroomNav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import FairyGuideNav from "@/components/FairyGuideNav";
import About from "@/components/About";
import SkillsSection from "@/components/Skills";
import ProjectsSection from "@/components/Projects";
import ContactSection from "@/components/contact";

export default function Home() {
  const [modalClosed, setModalClosed] = useState(false);



  return (
    <div>
      <section
  className="bg-[url('/images/bg.png')] bg-repeat bg-fixed bg-[length:1300px_auto] bg-[width:1000px_auto]"
>

      {!modalClosed && <WelcomeModal onClose={() => setModalClosed(true)} />}

      {modalClosed && (
        <>
          {/* <MushroomNav /> */}
          {/* <MushroomRingNav /> */}
          <FairyGuideNav/>
          <Hero />
          <About/>
          <SkillsSection/>
          <ProjectsSection/>
          <ContactSection/>
        </>
      )}
       </section>
    </div>
   
  );
}
