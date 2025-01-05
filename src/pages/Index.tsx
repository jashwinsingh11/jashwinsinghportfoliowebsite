import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import Background3D from "@/components/Background3D";
import { Suspense } from "react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<div>Loading...</div>}>
        <Background3D />
      </Suspense>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;