"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Gamepad2,
  Box,
  Sparkles,
  Github,
  Menu,
  X,
  Cpu,
  Layers3,
  Send,
} from "lucide-react";

const roles = ["PROGRAMMER", "GAME DEVELOPER", "3D DESIGNER"];

const projects = [
  {
    number: "01",
    title: "ROBLOX EXPERIENCE",
    category: "GAME DEVELOPMENT",
    description: "Membangun pengalaman game dengan gameplay, obstacle, dan dunia virtual yang interaktif.",
    icon: Gamepad2,
    tag: "ROBLOX STUDIO",
  },
  {
    number: "02",
    title: "WEB DEVELOPMENT",
    category: "FRONT-END DEVELOPMENT",
    description: "Membuat website modern dengan tampilan responsif, animasi, dan pengalaman pengguna yang nyaman.",
    icon: Code2,
    tag: "NEXT.JS",
  },
  {
    number: "03",
    title: "3D CREATION",
    category: "3D DESIGN",
    description: "Eksplorasi bentuk, model, dan aset 3D untuk kebutuhan visual maupun pengalaman digital.",
    icon: Box,
    tag: "3D DESIGN",
  },
];

const skills = [
  { name: "HTML & CSS", level: "WEB", icon: Code2 },
  { name: "JavaScript", level: "WEB", icon: Cpu },
  { name: "Roblox Studio", level: "GAME", icon: Gamepad2 },
  { name: "3D Design", level: "3D", icon: Box },
  { name: "UI / UX", level: "DESIGN", icon: Layers3 },
  { name: "Creative Coding", level: "EXPERIMENTAL", icon: Sparkles },
];

const rainSymbols = ["0", "1", "{ }", "/", "<", ">", "01", "λ", "∑", "&&", "=>", "404", "G", "const", "{}", "[]", "npm", "git", "CSS", "JS"];

function TypeText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <span className={`type-text ${className}`} aria-label={text} data-text={text}>
      {Array.from(text).map((char, index) => (
        <span
          className="type-char"
          aria-hidden="true"
          key={`${char}-${index}`}
          style={{ animationDelay: `${delay + Math.min(index * 0.018, 1.15)}s` }}
        >
          {char === " " ? "\u00a0" : char}
        </span>
      ))}
    </span>
  );
}

function InstagramMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="brand-svg instagram-svg">
      <defs>
        <linearGradient id="ig-gradient" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffd776" />
          <stop offset="45%" stopColor="#ff4d6d" />
          <stop offset="100%" stopColor="#9b5cff" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig-gradient)" />
      <rect x="6.2" y="6.2" width="11.6" height="11.6" rx="3.5" fill="none" stroke="white" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="2.8" fill="none" stroke="white" strokeWidth="1.8" />
      <circle cx="17.1" cy="6.9" r="1.1" fill="white" />
    </svg>
  );
}

function WhatsAppMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="brand-svg whatsapp-svg">
      <path
        fill="#25D366"
        d="M12.04 2C6.53 2 2.05 6.48 2.05 11.99c0 1.76.46 3.48 1.34 4.99L2 22l5.14-1.35a9.96 9.96 0 0 0 4.9 1.28h.01c5.51 0 9.99-4.48 9.99-9.99A9.93 9.93 0 0 0 19.1 4.9 9.93 9.93 0 0 0 12.04 2Z"
      />
      <path
        fill="#fff"
        d="M17.83 14.55c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.06 1.3 3.27c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.53 1.81.68.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.26-.74.26-1.37.18-1.51-.08-.13-.29-.21-.61-.37Z"
      />
    </svg>
  );
}

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [introVisible, setIntroVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const instagramUrl = "https://www.instagram.com/gfinbgsptra/";
  const whatsappUrl = "https://wa.me/6285809498801";
  const whatsappDisplay = "0858 0949 8801";

  useEffect(() => {
    const timer = window.setTimeout(() => setIntroVisible(false), 8000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(
      () => setRoleIndex((current) => (current + 1) % roles.length),
      2600
    );
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorGlow = document.querySelector<HTMLElement>(".global-cursor-glow");
    if (!cursorGlow) return;

    const moveGlow = (event: PointerEvent) => {
      cursorGlow.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursorGlow.style.setProperty("--cursor-y", `${event.clientY}px`);
      cursorGlow.classList.add("cursor-visible");
    };

    const hideGlow = () => cursorGlow.classList.remove("cursor-visible");

    window.addEventListener("pointermove", moveGlow, { passive: true });
    document.addEventListener("pointerleave", hideGlow);
    return () => {
      window.removeEventListener("pointermove", moveGlow);
      document.removeEventListener("pointerleave", hideGlow);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("intro-lock", introVisible);
    return () => document.body.classList.remove("intro-lock");
  }, [introVisible]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="global-cursor-glow" aria-hidden="true" />
      {introVisible && (
        <div className="cinematic-intro" role="dialog" aria-label="Welcome to Gafin's portfolio">
          <div className="intro-grid" />
          <div className="code-rain" aria-hidden="true">
            {Array.from({ length: 32 }).map((_, index) => (
              <span
                className="code-rain-column"
                key={index}
                style={{
                  left: `${(index / 32) * 100}%`,
                  animationDelay: `${-((index * 0.37) % 5.5)}s`,
                  animationDuration: `${4.2 + (index % 7) * 0.42}s`,
                }}
              >
                {Array.from({ length: 24 }).map((__, charIndex) => (
                  <i key={charIndex}>
                    {rainSymbols[(index * 7 + charIndex * 11 + (index % 5)) % rainSymbols.length]}
                  </i>
                ))}
              </span>
            ))}
          </div>
          <div className="intro-orb intro-orb-one" />
          <div className="intro-orb intro-orb-two" />
          <div className="intro-content">
            <span className="intro-kicker"><span className="status-dot" /> PERSONAL DIGITAL SPACE</span>
            <p className="intro-welcome">WELCOME TO</p>
            <h1 className="intro-title" data-text="GAFIN'S PORTFOLIO">GAFIN&apos;S PORTFOLIO</h1>
            <p className="intro-subtitle">GAFIN BAGOES SYAHPUTRA</p>
            <div className="intro-progress"><span /></div>
            <div className="intro-bottom">
              <span>INITIALIZING EXPERIENCE...</span>
              <button onClick={() => setIntroVisible(false)}>SKIP INTRO <ArrowUpRight size={14} /></button>
            </div>
          </div>
          <span className="intro-coordinate">IDN / PLB — 2026</span>
        </div>
      )}

      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="noise-overlay" />

      <header className="site-header">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">G<span>.</span></span>
          <span>GAFIN<span className="brand-muted">/PORTFOLIO</span></span>
        </a>
        <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "main-nav nav-open" : "main-nav"}>
          <a href="#home" onClick={closeMenu}><TypeText text="HOME" /></a>
          <a href="#about" onClick={closeMenu}><TypeText text="ABOUT" /></a>
          <a href="#skills" onClick={closeMenu}><TypeText text="SKILLS" /></a>
          <a href="#projects" onClick={closeMenu}><TypeText text="PROJECTS" /></a>
          <a href="#contact" className="nav-contact" onClick={closeMenu}>LET&apos;S TALK <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <div className="eyebrow reveal-up"><span className="status-dot" /> AVAILABLE FOR CREATIVE PROJECTS</div>
          <p className="hero-pretitle reveal-up delay-1">HELLO, WORLD! I&apos;M</p>
          <h1 className="hero-name">
            <span className="name-line"><TypeText text="GAFIN" delay={0.2} /></span>
            <span className="name-line name-outline"><TypeText text="BAGOES." delay={0.55} /></span>
          </h1>
          <p className="hero-fullname full-name-glitch reveal-up delay-2" data-text="GAFIN BAGOES SYAHPUTRA">GAFIN BAGOES SYAHPUTRA</p>
          <div className="role-row reveal-up delay-3">
            <span className="role-prefix">I AM A</span>
            <span className="role-value" key={roleIndex}>{roles[roleIndex]}</span>
            <span className="role-cursor" />
          </div>
          <p className="hero-description reveal-up delay-4">
            Menciptakan pengalaman digital melalui kode, game, dan visual 3D. Selalu bereksperimen, belajar, dan membangun sesuatu yang baru.
          </p>
          <div className="hero-actions reveal-up delay-5">
            <a href="#projects" className="button-primary">EXPLORE MY WORK <ArrowUpRight size={17} /></a>
            <a href="#contact" className="button-ghost">CONTACT ME <Send size={15} /></a>
          </div>
          <div className="hero-socials reveal-up delay-6">
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram Gafin" className="social-link">
              <InstagramMark /><span>@gfinbgsptra</span><ArrowUpRight size={12} />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp Gafin" className="social-link">
              <WhatsAppMark /><span>{whatsappDisplay}</span><ArrowUpRight size={12} />
            </a>
          </div>
        </div>

        <div className="hero-visual reveal-zoom">
          <div className="visual-label label-top"><span>FIG. 001</span><span>CREATIVE MINDSET</span></div>
          <div className="portrait-orbit orbit-one" />
          <div className="portrait-orbit orbit-two" />
          <div className="portrait-stage">
            <div className="portrait-backlight" />
            <img src="/images/gafin.png" alt="Foto Gafin Bagoes Syahputra" className="portrait-image" />
            <div className="portrait-tint" />
            <div className="scan-grid" />
            <div className="face-id-frame"><i /><i /><i /><i /><span>FACE ID / SCANNING</span></div>
            <div className="scan-line"><span>BIOMETRIC SCAN</span></div>
            <div className="scan-corners"><i /><i /><i /><i /></div>
            <div className="portrait-crosshair crosshair-one">+</div>
            <div className="portrait-crosshair crosshair-two">+</div>
          </div>
          <div className="floating-chip chip-code"><Code2 size={15} /> <span>CODE / CREATE</span></div>
          <div className="floating-chip chip-3d"><Box size={15} /> <span>3D / DESIGN</span></div>
          <div className="visual-label label-bottom"><span>PALEMBANG, ID</span><span>EST. 2026</span></div>
        </div>
        <a href="#about" className="scroll-indicator"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
      </section>

      <div className="marquee-strip" aria-label="Creative disciplines">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, index) => (
            <div className="marquee-group" key={index}>
              {["CODE", "CREATE", "INNOVATE", "DESIGN", "BUILD", "REPEAT"].map((item) => (
                <span key={`${index}-${item}`}>{item}<b>✳</b></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="content-section section-shell" id="about">
        <div className="section-heading">
          <span className="section-index">01 / ABOUT ME</span>
          <h2><TypeText text="BEHIND THE" /><br /><span className="gradient-text"><TypeText text="PIXELS." delay={0.3} /></span></h2>
        </div>
        <div className="about-content">
          <div className="about-lead">
            <span className="mini-label">A LITTLE INTRODUCTION</span>
            <h3>Halo, saya <span className="gradient-text">Gafin.</span></h3>
            <p>Saya adalah kreator digital yang tertarik pada dunia programming, game development, dan desain 3D. Saya suka mengubah ide menjadi sesuatu yang bisa dilihat, digunakan, dan dirasakan.</p>
          </div>
          <div className="about-details">
            <p>Perjalanan saya masih terus berkembang. Setiap project adalah kesempatan untuk mencoba hal baru, menyelesaikan tantangan, dan meningkatkan kemampuan.</p>
            <div className="about-signature">GAFIN BAGOES SYAHPUTRA <span>— CREATIVE DEVELOPER</span></div>
          </div>
        </div>
        <div className="stats-row">
          <div><strong>03<span>+</span></strong><small>CREATIVE FIELDS</small></div>
          <div><strong>∞</strong><small>IDEAS TO EXPLORE</small></div>
          <div><strong>100<span>%</span></strong><small>PASSION TO CREATE</small></div>
        </div>
      </section>

      <section className="content-section section-shell" id="skills">
        <div className="section-heading">
          <span className="section-index">02 / WHAT I DO</span>
          <h2><TypeText text="MY CREATIVE" /><br /><span className="gradient-text"><TypeText text="TOOLKIT." delay={0.3} /></span></h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div className="skill-card hover-card" key={skill.name} style={{ animationDelay: `${index * 0.08}s` }}>
                <div className="skill-icon"><Icon size={21} /></div>
                <span className="skill-level">{skill.level}</span>
                <h3>{skill.name}</h3>
                <span className="card-arrow"><ArrowUpRight size={16} /></span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="content-section section-shell" id="projects">
        <div className="section-heading project-heading">
          <div><span className="section-index">03 / SELECTED INTERESTS</span><h2><TypeText text="THINGS I" /><br /><span className="gradient-text"><TypeText text="BUILD." delay={0.3} /></span></h2></div>
          <p className="project-heading-note">Ide, eksperimen, dan karya yang terus berkembang.</p>
        </div>
        <div className="projects-list">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="project-card" key={project.number}>
                <span className="project-number">{project.number}</span>
                <div className="project-icon"><Icon size={25} /></div>
                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <span className="project-tag">{project.tag}</span>
                <ArrowUpRight className="project-arrow" size={22} />
              </article>
            );
          })}
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <div className="contact-glow" />
        <span className="section-index">04 / GET IN TOUCH</span>
        <h2>HAVE AN IDEA?<br /><span className="gradient-text">LET&apos;S CREATE.</span></h2>
        <p>Punya project, ide, atau sekadar ingin ngobrol? Hubungi saya melalui salah satu platform di bawah ini.</p>
        <div className="contact-actions">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="contact-button whatsapp-button">
            <WhatsAppMark /> CHAT ON WHATSAPP <ArrowUpRight size={17} />
          </a>
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="contact-button instagram-button">
            <InstagramMark /> FOLLOW INSTAGRAM <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="contact-handle-row">
          <span><WhatsAppMark /> {whatsappDisplay}</span>
          <span><InstagramMark /> @gfinbgsptra</span>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <a href="#home" className="footer-brand">GAFIN<span>.</span></a>
        <p>DESIGNED & BUILT BY GAFIN BAGOES SYAHPUTRA</p>
        <span>© 2026 — ALL RIGHTS RESERVED</span>
      </footer>
    </main>
  );
}
