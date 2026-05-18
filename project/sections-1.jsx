// Hero, Manifesto, About sections
const { useState, useEffect, useRef } = React;

// Reveal helper — animates children in on scroll
function Reveal({ children, delay = 0, y = 24, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 1.1s cubic-bezier(.2,.8,.2,1) ${delay}ms, transform 1.1s cubic-bezier(.2,.8,.2,1) ${delay}ms`
      }}>
      
      {children}
    </div>);

}

// Magnetic button — gently follows the cursor on hover
function Magnetic({ children, strength = 0.25, className = "", ...props }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0,0)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ transition: "transform 0.4s cubic-bezier(.2,.8,.2,1)", display: "inline-block" }}
      {...props}>
      
      {children}
    </div>);

}

function Hero({ t, heroVariant }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => {
      setMouse({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const orbStyle = {
    transform: `translate(${mouse.x * 30}px, ${mouse.y * 30}px)`
  };

  if (heroVariant === "giant") {
    return (
      <section id="home" className="hero hero--giant" data-screen-label="01 Hero">
        <div className="hero__orb" style={orbStyle} />
        <div className="hero__giant-wrap">
          <Reveal>
            <p className="eyebrow">{t.heroEyebrow}</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="hero__giant-name">
              <span>{t.heroName[0]}</span>
              <span className="serif-italic">{t.heroName[1]}</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero__giant-meta">
              <p className="hero__subtitle">{t.heroSubtitle}</p>
              <p className="hero__mantra serif-italic">{t.heroMantra}</p>
            </div>
          </Reveal>
          <Reveal delay={360}>
            <div className="hero__cta-row">
              <Magnetic>
                <a href="#contact" className="btn btn--primary">{t.heroCta} <span>→</span></a>
              </Magnetic>
              <Magnetic strength={0.15}>
                <a href="#" className="btn btn--ghost">{t.heroCv} <span>↓</span></a>
              </Magnetic>
            </div>
          </Reveal>
        </div>
        <div className="hero__scroll-hint">
          <span className="dot-pulse" />
          {t.scrollHint}
        </div>
      </section>);

  }

  if (heroVariant === "asymmetric") {
    return (
      <section id="home" className="hero hero--asym" data-screen-label="01 Hero">
        <div className="hero__orb" style={orbStyle} />
        <div className="hero__asym-grid">
          <div className="hero__asym-left">
            <Reveal>
              <p className="eyebrow">{t.heroEyebrow}</p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="hero__asym-name">
                {t.heroName[0]}<br />
                <span className="serif-italic">{t.heroName[1]}.</span>
              </h1>
            </Reveal>
          </div>
          <div className="hero__asym-right">
            <Reveal delay={240}>
              <p className="hero__subtitle">{t.heroSubtitle}</p>
            </Reveal>
            <Reveal delay={300}>
              <p className="hero__description">{t.heroDescription}</p>
            </Reveal>
            <Reveal delay={360}>
              <p className="hero__mantra serif-italic">— {t.heroMantra}</p>
            </Reveal>
            <Reveal delay={420}>
              <div className="hero__cta-row">
                <Magnetic>
                  <a href="#contact" className="btn btn--primary">{t.heroCta} <span>→</span></a>
                </Magnetic>
                <Magnetic strength={0.15}>
                  <a href="#" className="btn btn--ghost">{t.heroCv} <span>↓</span></a>
                </Magnetic>
              </div>
            </Reveal>
          </div>
          <div className="hero__asym-portrait">
            <Reveal delay={480}>
              <div className="portrait-slot" style={orbStyle}>
                <span className="portrait-mono">portrait · drop in</span>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="hero__scroll-hint">
          <span className="dot-pulse" />
          {t.scrollHint}
        </div>
      </section>);

  }

  // default: split
  return (
    <section id="home" className="hero hero--split" data-screen-label="01 Hero">
      <div className="hero__orb" style={orbStyle} />
      <div className="hero__split-grid">
        <div className="hero__split-left">
          <Reveal>
            <p className="eyebrow">{t.heroEyebrow}</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="hero__split-name">
              {t.heroName[0]}<br />
              <span className="serif-italic">{t.heroName[1]}</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="hero__subtitle">{t.heroSubtitle}</p>
          </Reveal>
          <Reveal delay={300}>
            <p className="hero__description">{t.heroDescription}</p>
          </Reveal>
          <Reveal delay={360}>
            <div className="hero__cta-row">
              <Magnetic>
                <a href="#contact" className="btn btn--primary">{t.heroCta} <span>→</span></a>
              </Magnetic>
              <Magnetic strength={0.15}>
                <a href="#" className="btn btn--ghost">{t.heroCv} <span>↓</span></a>
              </Magnetic>
            </div>
          </Reveal>
        </div>
        <Reveal delay={300} className="hero__split-right">
          <div className="hero__visual" style={orbStyle}>
            <div className="hero__visual-disc">
              <span className="hero__visual-mono">B · K</span>
              <svg className="hero__visual-ring" viewBox="0 0 200 200">
                <defs>
                  <path id="circle" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
                </defs>
                <text className="hero__visual-text">
                  <textPath href="#circle">
                    {t.heroMantra} ✦ {t.heroMantra} ✦ {t.heroMantra} ✦
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="hero__scroll-hint">
        <span className="dot-pulse" />
        {t.scrollHint}
      </div>
    </section>);

}

// Marquee strip between sections
function Marquee({ items, speed = 40 }) {
  const repeated = [...items, ...items, ...items];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track" style={{ animationDuration: `${speed}s` }}>
        {repeated.map((it, i) =>
        <span key={i} className="marquee__item">
            {it}
            <span className="marquee__sep serif-italic">✦</span>
          </span>
        )}
      </div>
    </div>);

}

function Manifesto({ t }) {
  const [scroll, setScroll] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const progress = 1 - (r.top + r.height) / (window.innerHeight + r.height);
      setScroll(Math.max(0, Math.min(1, progress)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlighted keywords pulled from the description
  const fullText = t.heroDescription;
  const keywords = ["Digital", "IA", "AI", "créativité", "stratégie", "creativity", "strategy"];
  const tokens = fullText.split(/(\s+)/);

  return (
    <section ref={ref} className="manifesto" data-screen-label="02 Manifesto">
      <div className="manifesto__bg-word" style={{ transform: `translateX(${-15 + scroll * 30}%)` }}>
        BINTA · KANDE
      </div>
      <div className="container manifesto__inner">
        <div className="manifesto__side">
          <span className="manifesto__quote-mark serif-italic">“</span>
          <span className="mono manifesto__label">Manifesto</span>
        </div>
        <Reveal>
          <p className="manifesto__text">
            {tokens.map((tok, i) => {
              const clean = tok.replace(/[^\p{L}]/gu, "");
              const isKw = keywords.some(k => clean.toLowerCase() === k.toLowerCase());
              return (
                <span key={i} className={isKw ? "manifesto__big manifesto__kw serif-italic" : "manifesto__big"}>
                  {tok}
                </span>
              );
            })}
          </p>
          <div className="manifesto__sign">
            <span className="serif-italic">— Binta K.</span>
            <span className="manifesto__rule" />
            <span className="mono">Becc's Studio · 2026</span>
          </div>
        </Reveal>
      </div>
    </section>);

}

function About({ t }) {
  return (
    <section id="about" className="about" data-screen-label="03 About">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">{t.aboutEyebrow}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="section-title">
              {t.aboutTitle.split(" ").map((w, i) =>
              <span key={i} className={i % 5 === 2 ? "serif-italic" : ""}>{w} </span>
              )}
            </h2>
          </Reveal>
        </div>

        <div className="about__collage">
          <Reveal delay={100} className="about__photo about__photo--1">
            <div className="about__photo-inner">
              <span className="portrait-mono">portrait · 4:5</span>
            </div>
            <span className="about__photo-tag mono">studio · 2026</span>
          </Reveal>
          <Reveal delay={220} className="about__photo about__photo--2">
            <div className="about__photo-inner">
              <span className="portrait-mono">desk · 3:4</span>
            </div>
            <span className="about__photo-tag mono">workflow</span>
          </Reveal>
          <Reveal delay={340} className="about__photo about__photo--3">
            <div className="about__photo-inner">
              <span className="portrait-mono">moodboard · 1:1</span>
            </div>
            <span className="about__photo-tag mono">inspiration</span>
          </Reveal>
          <Reveal delay={180} className="about__photo about__photo--4">
            <div className="about__photo-inner">
              <span className="portrait-mono">on-site · 4:3</span>
            </div>
            <span className="about__photo-tag mono">team day</span>
          </Reveal>
        </div>

        <div className="about__grid">
          <div className="about__body">
            {t.aboutBody.map((p, i) =>
            <Reveal key={i} delay={i * 80}>
                <p className="prose">{p}</p>
              </Reveal>
            )}
          </div>
          <Reveal delay={200} className="about__facts">
            {t.aboutFacts.map(([k, v], i) =>
            <div className="about__fact" key={i}>
                <span className="about__fact-key">{k}</span>
                <span className="about__fact-val">{v}</span>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>);

}

Object.assign(window, { Hero, Manifesto, About, Marquee, Reveal, Magnetic });