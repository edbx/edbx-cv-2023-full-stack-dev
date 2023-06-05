import { Cooperation } from "../../components/Cooperation/Cooperation";
import Hero from "../../components/Hero";
import Process from "../../components/Process";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

export const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Process />
      <Projects />
      <Cooperation />
    </>
  );
};
