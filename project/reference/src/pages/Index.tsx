import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Journey from "@/components/Journey";
import ProjectsIA from "@/components/ProjectsIA";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Journey />
      <ProjectsIA />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
