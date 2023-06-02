import { Cooperation } from "../../components/Cooperation/Cooperation";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Process from "../../components/Process";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Process />
      <Projects />
      <Cooperation />
      <Footer />
    </>
  );
};
