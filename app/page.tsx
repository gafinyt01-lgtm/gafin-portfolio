
"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Instagram,
  Code2,
  Gamepad2,
  Box,
  Sparkles,
  Menu,
  X,
  Cpu,
  Layers3,
} from "lucide-react";

const roles = [
  "PROGRAMMER",
  "GAME DEVELOPER",
  "3D DESIGNER",
];

const skills = [
  {
    number: "01",
    title: "Programming",
    description:
      "Turning ideas into useful digital experiences through code.",
    icon: Code2,
    tags: ["Web", "Logic", "Development"],
  },
  {
    number: "02",
    title: "Game Development",
    description:
      "Building interactive worlds, gameplay systems, and experiences.",
    icon: Gamepad2,
    tags: ["Roblox", "Game Systems", "Interactive"],
  },
  {
    number: "03",
    title: "3D Design",
    description:
      "Exploring shapes, objects, and visual ideas in three dimensions.",
    icon: Box,
    tags: ["Modeling", "Assets", "Visuals"],
  },
];

const navItems = [
  ["ABOUT", "about"],
  ["EXPERTISE", "skills"],
  ["PROJECTS", "projects"],
  ["CONTACT", "contact"],
];

export default function Home() {
  const [activeRole, setActiveRole] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveRole((current) => (current + 1) % roles.length);
    }, 2500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="site-shell" id="home">
      <div className="ambient ambient-blue" />
      <div className="ambient ambient-purple" />
      <div className="grid-overlay" />
      <div className="noise" />

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo text-flow">
          GBS<span>.</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          {navItems.map(([label, id], index) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-flow"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav-contact text-flow">
          LET&apos;S CONNECT <ArrowUpRight size={15} />
        </a>

        <button
          className="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      {/* HERO */}
      <section className="hero section-wrap">
        <div className="hero-content">
          <div className="availability text-flow">
            <span className="status-dot" />
            CREATIVE MIND · DIGITAL WORLD
          </div>

          <p className="eyebrow text-flow">HELLO, I&apos;M</p>

          <h1 className="hero-title">
            <span className="hero-title-line text-flow glitch">
              GAFIN
            </span>
            <span className="hero-title-line gradient-text text-flow glitch">
              BAGOES.
            </span>
          </h1>

          <p className="full-name text-flow">
            GAFIN BAGOES SYAHPUTRA
          </p>

          <div className="role-line">
            <span className="role-prefix text-flow">I CREATE AS</span>
            <span className="role-text" key={activeRole}>
              {roles[activeRole]}
            </span>
          </div>

          <p className="hero-description text-flow">
            Exploring the intersection of code, interactive worlds,
            and three-dimensional design. Turning imagination into
            digital experiences, one idea at a time.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button-primary">
              EXPLORE MY WORLD <ArrowUpRight size={17} />
            </a>
            <a href="#about" className="button-ghost">
              GET TO KNOW ME
            </a>
          </div>

          <div className="social-row">
            <span className="text-flow">FOLLOW THE JOURNEY</span>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={19} />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={19} />
            </a>
          </div>
        </div>

        {/* PROFILE */}
        <div className="hero-visual">
          <div className="portrait-halo" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit-dot" />

          <div className="portrait-stage">
            <img
              src="/images/gafin.png"
              alt="Gafin Bagoes Syahputra"
              className="gafin-portrait"
            />
          </div>

          <div className="floating-card card-code">
            <Code2 size={19} />
            <span className="text-flow">CODE / CREATE</span>
          </div>

          <div className="floating-card card-3d">
            <Box size={19} />
            <span className="text-flow">DESIGN / BUILD</span>
          </div>

          <div className="portrait-caption">
            <span className="text-flow">GBS — 001</span>
            <span className="text-flow">CREATIVE PORTFOLIO</span>
          </div>
        </div>

        <a href="#about" className="scroll-cue text-flow">
          <span className="scroll-icon">
            <ArrowDown size={15} />
          </span>
          SCROLL TO EXPLORE
        </a>

        <div className="hero-index text-flow">
          01 <span>/</span> 05
        </div>
      </section>

      {/* MOVING TEXT */}
      <section className="marquee-section">
        <div className="marquee-track">
          {[0, 1, 2, 3].map((item) => (
            <div className="marquee-content" key={item}>
              <span>PROGRAMMER</span>
              <i>✳</i>
              <span>GAME DEVELOPER</span>
              <i>✳</i>
              <span>3D DESIGNER</span>
              <i>✳</i>
              <span>CREATIVE MIND</span>
              <i>✳</i>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="content-section section-wrap" id="about">
        <div className="section-heading">
          <p className="section-label text-flow">
            01 / A LITTLE INTRODUCTION
          </p>
          <span className="section-mark text-flow">
            <Sparkles size={16} /> ABOUT
          </span>
        </div>

        <div className="about-layout">
          <h2 className="section-title">
            <span className="title-line text-flow">BEYOND</span>
            <span className="title-line gradient-text text-flow">
              THE CODE.
            </span>
          </h2>

          <div className="about-copy">
            <p className="large-copy text-flow">
              I&apos;m <strong>Gafin Bagoes Syahputra</strong> — a
              creative learner passionate about technology and
              digital creation.
            </p>

            <p className="text-flow">
              From programming and game development to 3D design,
              I enjoy experimenting, learning new tools, and
              bringing ideas to life. This space is where I share
              that journey.
            </p>

            <a href="#skills" className="text-link text-flow">
              EXPLORE MY EXPERTISE <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="content-section section-wrap" id="skills">
        <div className="section-heading">
          <p className="section-label text-flow">
            02 / WHAT I DO
          </p>
          <span className="section-mark text-flow">
            MY EXPERTISE
          </span>
        </div>

        <h2 className="section-title skills-heading">
          <span className="text-flow">IDEAS INTO</span>{" "}
          <span className="gradient-text text-flow">
            REALITY.
          </span>
        </h2>

        <div className="skill-grid">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <article className="skill-card" key={skill.number}>
                <div className="skill-top">
                  <span className="text-flow">{skill.number}</span>
                  <Icon size={26} />
                </div>

                <h3 className="text-flow">{skill.title}</h3>

                <p className="text-flow">{skill.description}</p>

                <div className="skill-tags">
                  {skill.tags.map((tag) => (
                    <span className="text-flow" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        className="content-section section-wrap projects-section"
        id="projects"
      >
        <div className="section-heading">
          <p className="section-label text-flow">
            03 / SELECTED WORKS
          </p>
          <span className="section-mark text-flow">
            IN PROGRESS
          </span>
        </div>

        <h2 className="section-title">
          <span className="text-flow">MADE WITH</span>{" "}
          <span className="gradient-text text-flow">
            INTENTION.
          </span>
        </h2>

        <p className="section-description text-flow">
          A collection of experiments, ideas, and projects.
          More work will appear here as the journey grows.
        </p>

        <div className="project-placeholder">
          <div className="project-symbol">
            <Layers3 size={34} />
          </div>

          <div>
            <span className="project-kicker text-flow">
              PORTFOLIO / 001
            </span>
            <h3 className="text-flow">
              Something is taking shape.
            </h3>
            <p className="text-flow">
              Projects and creative experiments coming soon.
            </p>
          </div>

          <span className="project-status text-flow">
            COMING SOON
          </span>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section section-wrap" id="contact">
        <p className="section-label text-flow">
          04 / HAVE AN IDEA?
        </p>

        <h2>
          <span className="title-line text-flow">LET&apos;S MAKE</span>
          <span className="title-line gradient-text text-flow">
            IT HAPPEN.
          </span>
        </h2>

        <p className="text-flow">
          Have a project, collaboration, or just want to say hello?
        </p>

        <a
          className="button-primary"
          href="mailto:hello@example.com"
        >
          GET IN TOUCH <ArrowUpRight size={17} />
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="footer-logo text-flow">
          GBS<span>.</span>
        </a>

        <span className="text-flow">
          DESIGNED & BUILT WITH CURIOSITY.
        </span>

        <span className="text-flow">
          © {new Date().getFullYear()} GAFIN BAGOES SYAHPUTRA
        </span>
      </footer>
    </main>
  );
}
