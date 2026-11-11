 "use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
  X
} from "lucide-react";

const roles = ["PROGRAMMER", "GAME DEVELOPER", "3D DESIGNER"];

const skills = [
  {
    number: "01",
    title: "Programming",
    description: "Turning ideas into useful digital experiences through code.",
    icon: Code2,
    tags: ["Web", "Logic", "Development"]
  },
  {
    number: "02",
    title: "Game Development",
    description: "Building interactive worlds, gameplay systems, and experiences.",
    icon: Gamepad2,
    tags: ["Game systems", "Roblox", "Interactive"]
  },
  {
    number: "03",
    title: "3D Design",
    description: "Exploring shapes, objects, and visual ideas in three dimensions.",
    icon: Box,
    tags: ["Modeling", "Assets", "Visuals"]
  }
];

export default function Home() {
  const [activeRole, setActiveRole] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setActiveRole((current) => (current + 1) % roles.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <div className="ambient ambient-blue" aria-hidden="true" />
      <div className="ambient ambient-purple" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <header className="navbar">
        <a href="#home" className="logo" aria-label="GBS home">
          GBS<span>.</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          <a href="#about" onClick={closeMenu}>ABOUT</a>
          <a href="#skills" onClick={closeMenu}>EXPERTISE</a>
          <a href="#projects" onClick={closeMenu}>PROJECTS</a>
          <a href="#contact" onClick={closeMenu}>CONTACT</a>
        </nav>

        <a href="#contact" className="nav-contact">
          LET&apos;S CONNECT <ArrowUpRight size={15} />
        </a>

        <button
          className="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <section className="hero section-wrap" id="home">
        <motion.div
          className="hero-content"
          initial={reduceMotion ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="availability">
            <span className="status-dot" />
            <span>CREATIVE MIND · DIGITAL WORLD</span>
          </div>

          <p className="eyebrow">HELLO, I&apos;M</p>
          <h1 className="hero-title">
            GAFIN
            <br />
            <span>BAGOES.</span>
          </h1>

          <div className="role-line" aria-live="polite">
            <span className="role-prefix">I CREATE AS</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[activeRole]}
                className="role-text"
                initial={reduceMotion ? false : { opacity: 0, y: 17, filter: "blur(7px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -17, filter: "blur(7px)" }}
                transition={{ duration: 0.42 }}
              >
                {roles[activeRole]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="hero-description">
            Exploring the intersection of code, interactive worlds, and
            three-dimensional design. Turning imagination into digital
            experiences, one idea at a time.
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
            <span>FOLLOW THE JOURNEY</span>
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92, x: 28 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.15 }}
        >
          <div className="portrait-halo" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit-dot" />
          <div className="portrait-stage">
            <img
              src="/images/gafin.png"
              alt="Portrait of Gafin Bagoes Syahputra"
              className="gafin-portrait"
            />
          </div>
          <div className="floating-card card-code">
            <Code2 size={18} />
            <span>CODE / CREATE</span>
          </div>
          <div className="floating-card card-3d">
            <Box size={18} />
            <span>DESIGN / BUILD</span>
          </div>
          <div className="portrait-caption">
            <span>GBS — 001</span>
            <span>CREATIVE PORTFOLIO</span>
          </div>
        </motion.div>

        <a href="#about" className="scroll-cue">
          <span className="scroll-icon"><ArrowDown size={15} /></span>
          SCROLL TO EXPLORE
        </a>
        <div className="hero-index">01 <span>/</span> 05</div>
      </section>

      <section className="marquee-section" aria-label="Areas of expertise">
        <div className="marquee-track">
          {[0, 1, 2, 3].map((item) => (
            <div className="marquee-content" key={item}>
              <span>PROGRAMMER</span><i>✳</i>
              <span>GAME DEVELOPER</span><i>✳</i>
              <span>3D DESIGNER</span><i>✳</i>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section section-wrap" id="about">
        <div className="section-heading">
          <p className="section-label">01 / A LITTLE INTRODUCTION</p>
          <span className="section-mark"><Sparkles size={16} /> ABOUT</span>
        </div>
        <div className="about-layout">
          <h2 className="section-title">
            BEYOND
            <br />
            <span>THE CODE.</span>
          </h2>
          <div className="about-copy">
            <p className="large-copy">
              I&apos;m <strong>Gafin Bagoes Syahputra</strong> — a creative
              learner passionate about technology and digital creation.
            </p>
            <p>
              From programming and game development to 3D design, I enjoy
              experimenting, learning new tools, and bringing ideas to life.
              This space is where I share that journey.
            </p>
            <a href="#skills" className="text-link">
              EXPLORE MY EXPERTISE <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="content-section section-wrap" id="skills">
        <div className="section-heading">
          <p className="section-label">02 / WHAT I DO</p>
          <span className="section-mark">MY EXPERTISE</span>
        </div>
        <h2 className="section-title">
          IDEAS INTO <span>REALITY.</span>
        </h2>
        <div className="skill-grid">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.article
                className="skill-card"
                key={skill.number}
                whileHover={reduceMotion ? undefined : { y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <div className="skill-top">
                  <span>{skill.number}</span>
                  <Icon size={25} />
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <div className="skill-tags">
                  {skill.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="content-section section-wrap projects-section" id="projects">
        <div className="section-heading">
          <p className="section-label">03 / SELECTED WORKS</p>
          <span className="section-mark">IN PROGRESS</span>
        </div>
        <h2 className="section-title">
          MADE WITH <span>INTENTION.</span>
        </h2>
        <p className="section-description">
          A collection of experiments, ideas, and projects. More work will
          appear here as the journey grows.
        </p>
        <div className="project-placeholder">
          <div className="project-symbol"><Box size={34} /></div>
          <div>
            <span className="project-kicker">PORTFOLIO / 001</span>
            <h3>Something is taking shape.</h3>
            <p>Projects and creative experiments coming soon.</p>
          </div>
          <span className="project-status">COMING SOON</span>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <p className="section-label">04 / HAVE AN IDEA?</p>
        <h2>
          LET&apos;S MAKE
          <br />
          <span>IT HAPPEN.</span>
        </h2>
        <p>Have a project, collaboration, or just want to say hello?</p>
        <a className="button-primary" href="mailto:hello@example.com">
          GET IN TOUCH <ArrowUpRight size={17} />
        </a>
      </section>

      <footer className="footer">
        <a href="#home" className="footer-logo">GBS<span>.</span></a>
        <span>DESIGNED & BUILT WITH CURIOSITY.</span>
        <span>© {new Date().getFullYear()} GAFIN BAGOES SYAHPUTRA</span>
      </footer>
    </main>
  );
}
