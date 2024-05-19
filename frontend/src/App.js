import React, { useCallback } from "react";
import "./App.css";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Skills from "./pages/skills/skills";
import Experience from "./pages/experience/experience";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";

const App = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log(container);
  }, []);

  const options = {
    background: {
      color: {
        value: "hsl(0, 0%, 6%)",
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <div>
      <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options} />
      <div className="navbar-container">
        <Navbar />
      </div>
      <main className="main-content">
        <section id="home">
          <Home />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
