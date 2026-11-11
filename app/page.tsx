"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Instagram, Code2, Gamepad2, Box, Sparkles, Menu, X } from "lucide-react";

const roles = ["PROGRAMMER", "GAME DEVELOPER", "3D DESIGNER"];
const skills = [
  { number: "01", title: "Programming", description: "Turning ideas into useful digital experiences through code.", icon: Code2, tags: ["Web", "Logic", "Development"] },
  { number: "02", title: "Game Development", description: "Building interactive worlds, gameplay systems, and experiences.", icon: Gamepad2, tags: ["Game systems", "Roblox", "Interactive"] },
  { number: "03", title: "3D Design", description: "Exploring shapes, objects, and visual ideas in three dimensions.", icon: Box, tags: ["Modeling", "Assets", "Visuals"] }
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 26, filter: "blur(8px)" }} whileInView={reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: .72, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function WordReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const reduce = useReducedMotion();
  return <span className="word-reveal" aria-label={text}>{text.split(" ").map((word, i) => <span className="word-mask" key={`${word}-${i}`} aria-hidden="true"><motion.span className="word-inner" initial={reduce ? false : { y: "115%", opacity: 0, filter: "blur(8px)" }} whileInView={reduce ? undefined : { y: "0%", opacity: 1, filter: "blur(0px)" }} viewport={{ once: true, amount: .8 }} transition={{ duration: .75, delay: delay + i * .075, ease: [0.22, 1, 0.36, 1] }}>{word}</motion.span></span>)}</span>;
}

export default function Home() {
  const [activeRole, setActiveRole] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const timer = window.setInterval(() => setActiveRole(v => (v + 1) % roles.length), 2600);
    return () => window.clearInterval(timer);
  }, [reduce]);

  const nav = [["ABOUT", "about"], ["EXPERTISE", "skills"], ["PROJECTS", "projects"], ["CONTACT", "contact"]];

  return <main className="site-shell">
    <div className="ambient ambient-blue" /><div className="ambient ambient-purple" /><div className="grid-overlay" /><div className="noise" />
    <header className="navbar">
      <motion.a href="#home" className="logo" initial={reduce ? false : { opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }}>GBS<span>.</span></motion.a>
      <nav className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>{nav.map(([label, id], i) => <motion.a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} initial={reduce ? false : { opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 + i * .08 }}>{label}</motion.a>)}</nav>
      <motion.a href="#contact" className="nav-contact" initial={reduce ? false : { opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .4 }}>LET&apos;S CONNECT <ArrowUpRight size={15} /></motion.a>
      <button className="mobile-menu" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(v => !v)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
    </header>

    <section className="hero section-wrap" id="home">
      <div className="hero-content">
        <Reveal className="availability"><span className="status-dot" /><span>CREATIVE MIND · DIGITAL WORLD</span></Reveal>
        <Reveal className="eyebrow" delay={.12}>HELLO, I&apos;M</Reveal>
        <h1 className="hero-title"><span className="hero-title-line"><WordReveal text="GAFIN" delay={.18} /></span><span className="hero-title-line gradient-text"><WordReveal text="BAGOES." delay={.3} /></span></h1>
        <div className="role-line"><span className="role-prefix">I CREATE AS</span><AnimatePresence mode="wait"><motion.span key={roles[activeRole]} className="role-text" initial={reduce ? false : { opacity: 0, y: 18, filter: "blur(8px)", letterSpacing: "5px" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)", letterSpacing: "2px" }} exit={reduce ? undefined : { opacity: 0, y: -18, filter: "blur(8px)" }} transition={{ duration: .48 }}>{roles[activeRole]}</motion.span></AnimatePresence></div>
        <Reveal className="hero-description" delay={.22}>Exploring the intersection of code, interactive worlds, and three-dimensional design. Turning imagination into digital experiences, one idea at a time.</Reveal>
        <Reveal className="hero-actions" delay={.3}><motion.a href="#projects" className="button-primary" whileHover={reduce ? undefined : { y: -4, scale: 1.025 }} whileTap={{ scale: .97 }}>EXPLORE MY WORLD <ArrowUpRight size={17} /></motion.a><motion.a href="#about" className="button-ghost" whileHover={reduce ? undefined : { y: -4 }} whileTap={{ scale: .97 }}>GET TO KNOW ME</motion.a></Reveal>
        <Reveal className="social-row" delay={.38}><span>FOLLOW THE JOURNEY</span><motion.a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" whileHover={{ y: -4, color: "#a58aff" }}><Github size={18} /></motion.a><motion.a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" whileHover={{ y: -4, color: "#a58aff" }}><Instagram size={18} /></motion.a></Reveal>
      </div>
      <motion.div className="hero-visual" initial={reduce ? false : { opacity: 0, scale: .9, x: 28 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1.1, delay: .2 }}>
        <div className="portrait-halo" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit-dot" />
        <div className="portrait-stage"><img src="/images/gafin.png" alt="Portrait of Gafin Bagoes Syahputra" className="gafin-portrait" /></div>
        <motion.div className="floating-card card-code" animate={reduce ? undefined : { y: [0, -11, 0] }} transition={{ duration: 4.2, repeat: Infinity }}><Code2 size={18} /><span>CODE / CREATE</span></motion.div>
        <motion.div className="floating-card card-3d" animate={reduce ? undefined : { y: [0, 10, 0] }} transition={{ duration: 4.8, repeat: Infinity }}><Box size={18} /><span>DESIGN / BUILD</span></motion.div>
        <div className="portrait-caption"><span>GBS — 001</span><span>CREATIVE PORTFOLIO</span></div>
      </motion.div>
      <motion.a href="#about" className="scroll-cue" animate={reduce ? undefined : { y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}><span className="scroll-icon"><ArrowDown size={15} /></span>SCROLL TO EXPLORE</motion.a>
      <div className="hero-index">01 <span>/</span> 05</div>
    </section>

    <section className="marquee-section" aria-label="Areas of expertise"><div className="marquee-track">{[0,1,2,3].map(n => <div className="marquee-content" key={n}><span>PROGRAMMER</span><i>✳</i><span>GAME DEVELOPER</span><i>✳</i><span>3D DESIGNER</span><i>✳</i></div>)}</div></section>

    <section className="content-section section-wrap" id="about">
      <div className="section-heading"><Reveal><p className="section-label">01 / A LITTLE INTRODUCTION</p></Reveal><Reveal delay={.1}><span className="section-mark"><Sparkles size={16} /> ABOUT</span></Reveal></div>
      <div className="about-layout">
        <h2 className="section-title"><span className="title-line"><WordReveal text="BEYOND" /></span><span className="title-line gradient-text"><WordReveal text="THE CODE." delay={.12} /></span></h2>
        <div className="about-copy"><Reveal><p className="large-copy">I&apos;m <strong>Gafin Bagoes Syahputra</strong> — a creative learner passionate about technology and digital creation.</p></Reveal><Reveal delay={.12}><p>From programming and game development to 3D design, I enjoy experimenting, learning new tools, and bringing ideas to life. This space is where I share that journey.</p></Reveal><Reveal delay={.2}><motion.a href="#skills" className="text-link" whileHover={{ x: 6 }}>EXPLORE MY EXPERTISE <ArrowUpRight size={16} /></motion.a></Reveal></div>
      </div>
    </section>

    <section className="content-section section-wrap" id="skills">
      <div className="section-heading"><Reveal><p className="section-label">02 / WHAT I DO</p></Reveal><Reveal delay={.1}><span className="section-mark">MY EXPERTISE</span></Reveal></div>
      <h2 className="section-title skills-heading"><WordReveal text="IDEAS INTO" /> <span className="gradient-text"><WordReveal text="REALITY." delay={.14} /></span></h2>
      <div className="skill-grid">{skills.map((skill, i) => { const Icon = skill.icon; return <motion.article className="skill-card" key={skill.number} initial={reduce ? false : { opacity: 0, y: 45, rotateX: 8 }} whileInView={reduce ? undefined : { opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7, delay: i * .13 }} whileHover={reduce ? undefined : { y: -8, borderColor: "#8065ff" }}><div className="skill-top"><span>{skill.number}</span><Icon size={25} /></div><h3><WordReveal text={skill.title} /></h3><p>{skill.description}</p><div className="skill-tags">{skill.tags.map((tag, j) => <motion.span key={tag} initial={reduce ? false : { opacity: 0, y: 10 }} whileInView={reduce ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .13 + j * .07 + .2 }}>{tag}</motion.span>)}</div></motion.article>; })}</div>
    </section>

    <section className="content-section section-wrap projects-section" id="projects">
      <div className="section-heading"><Reveal><p className="section-label">03 / SELECTED WORKS</p></Reveal><Reveal delay={.1}><span className="section-mark">IN PROGRESS</span></Reveal></div>
      <h2 className="section-title"><WordReveal text="MADE WITH" /> <span className="gradient-text"><WordReveal text="INTENTION." delay={.14} /></span></h2>
      <Reveal className="section-description" delay={.15}>A collection of experiments, ideas, and projects. More work will appear here as the journey grows.</Reveal>
      <motion.div className="project-placeholder" initial={reduce ? false : { opacity: 0, y: 35, scale: .98 }} whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .75 }} whileHover={reduce ? undefined : { y: -5, borderColor: "#8065ff" }}><div className="project-symbol"><Box size={34} /></div><div><span className="project-kicker">PORTFOLIO / 001</span><h3>Something is taking shape.</h3><p>Projects and creative experiments coming soon.</p></div><span className="project-status">COMING SOON</span></motion.div>
    </section>

    <section className="contact-section section-wrap" id="contact">
      <Reveal><p className="section-label">04 / HAVE AN IDEA?</p></Reveal>
      <h2><span className="title-line"><WordReveal text="LET'S MAKE" /></span><span className="title-line gradient-text"><WordReveal text="IT HAPPEN." delay={.12} /></span></h2>
      <Reveal delay={.18}><p>Have a project, collaboration, or just want to say hello?</p></Reveal>
      <Reveal delay={.25}><motion.a className="button-primary" href="mailto:hello@example.com" whileHover={reduce ? undefined : { y: -4, scale: 1.025 }} whileTap={{ scale: .97 }}>GET IN TOUCH <ArrowUpRight size={17} /></motion.a></Reveal>
    </section>

    <footer className="footer"><Reveal><a href="#home" className="footer-logo">GBS<span>.</span></a></Reveal><Reveal delay={.08}><span>DESIGNED & BUILT WITH CURIOSITY.</span></Reveal><Reveal delay={.16}><span>© {new Date().getFullYear()} GAFIN BAGOES SYAHPUTRA</span></Reveal></footer>
  </main>;
}
