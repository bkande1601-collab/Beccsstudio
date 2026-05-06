// Main app — orchestration, custom cursor, nav, tweaks
const { useState: useStateApp, useEffect: useEffectApp, useRef: useRefApp } = React;

// === Custom cursor ===
function CustomCursor() {
  const dotRef = useRefApp(null);
  const ringRef = useRefApp(null);
  useEffectApp(() => {
    let dotX = 0, dotY = 0, ringX = 0, ringY = 0, mx = 0, my = 0;
    const move = (e) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", move);

    let raf;
    const tick = () => {
      dotX += (mx - dotX) * 0.6;
      dotY += (my - dotY) * 0.6;
      ringX += (mx - ringX) * 0.18;
      ringY += (my - ringY) * 0.18;
      if (dotRef.current) dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    // Hover state
    const updateHover = () => {
      const el = document.elementFromPoint(mx, my);
      const isHover = el && el.closest("a, button, [data-cursor-hover]");
      if (ringRef.current) ringRef.current.classList.toggle("is-hover", !!isHover);
    };
    const hoverInterval = setInterval(updateHover, 50);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      clearInterval(hoverInterval);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}

// === Nav ===
function Nav({ t, lang, setLang, theme, setTheme, navLabels }) {
  const [active, setActive] = useStateApp("home");
  useEffectApp(() => {
    const sections = ["home", "about", "cos", "services", "work", "contact"];
    const onScroll = () => {
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) {
          current = id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { id: "home", label: navLabels[0] },
    { id: "about", label: navLabels[1] },
    { id: "cos", label: navLabels[2] },
    { id: "services", label: navLabels[3] },
    { id: "work", label: navLabels[4] },
    { id: "contact", label: navLabels[5] },
  ];

  return (
    <nav className="nav">
      <a href="#home" className="nav__brand">
        <span className="nav__brand-mark">✦</span>Becc's Studio
      </a>
      <div className="nav__links">
        {items.map((it) => (
          <a key={it.id} href={`#${it.id}`} className={`nav__link ${active === it.id ? "is-active" : ""}`}>
            {it.label}
          </a>
        ))}
      </div>
      <div className="nav__right">
        <div className="nav__toggle">
          <button className={lang === "fr" ? "is-active" : ""} onClick={() => setLang("fr")}>FR</button>
          <button className={lang === "en" ? "is-active" : ""} onClick={() => setLang("en")}>EN</button>
        </div>
        <button
          className="nav__theme"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label="Toggle theme"
        >
          {theme === "light" ? "☾" : "☀"}
        </button>
      </div>
    </nav>
  );
}

// === Tweak defaults ===
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "split",
  "accent": "terracotta",
  "fontStack": "fraunces",
  "theme": "light",
  "lang": "fr"
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = {
  terracotta: { light: "oklch(0.58 0.13 40)", soft: "oklch(0.85 0.06 50)", dark: "oklch(0.72 0.13 45)", darkSoft: "oklch(0.42 0.10 50)" },
  sage: { light: "oklch(0.55 0.06 145)", soft: "oklch(0.85 0.04 140)", dark: "oklch(0.72 0.07 145)", darkSoft: "oklch(0.42 0.05 145)" },
  cobalt: { light: "oklch(0.50 0.14 250)", soft: "oklch(0.82 0.06 245)", dark: "oklch(0.70 0.14 250)", darkSoft: "oklch(0.40 0.10 250)" },
  plum: { light: "oklch(0.45 0.12 340)", soft: "oklch(0.82 0.06 335)", dark: "oklch(0.68 0.13 340)", darkSoft: "oklch(0.38 0.10 340)" },
};

const FONT_OPTIONS = {
  fraunces: { serif: "'Fraunces', Georgia, serif", sans: "'Inter', sans-serif" },
  instrument: { serif: "'Instrument Serif', Georgia, serif", sans: "'Geist', 'Inter', sans-serif" },
  domaine: { serif: "'DM Serif Display', Georgia, serif", sans: "'Geist', 'Inter', sans-serif" },
};

// === Tweaks panel UI ===
function MyTweaks({ tweaks, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Hero">
        <TweakSelect
          label="Layout"
          value={tweaks.heroVariant}
          onChange={(v) => setTweak("heroVariant", v)}
          options={[
            { value: "split", label: "Split (default)" },
            { value: "giant", label: "Giant typo" },
            { value: "asymmetric", label: "Asymmetric" },
          ]}
        />
      </TweakSection>
      <TweakSection label="Color">
        <TweakColor
          label="Accent"
          value={tweaks.accent}
          onChange={(v) => setTweak("accent", v)}
          options={[
            { value: "terracotta", color: "#C56A45" },
            { value: "sage", color: "#7A9379" },
            { value: "cobalt", color: "#3D6BB8" },
            { value: "plum", color: "#8B4068" },
          ]}
        />
        <TweakRadio
          label="Theme"
          value={tweaks.theme}
          onChange={(v) => setTweak("theme", v)}
          options={[
            { value: "light", label: "Light" },
            { value: "dark", label: "Dark" },
          ]}
        />
      </TweakSection>
      <TweakSection label="Type">
        <TweakSelect
          label="Font pairing"
          value={tweaks.fontStack}
          onChange={(v) => setTweak("fontStack", v)}
          options={[
            { value: "fraunces", label: "Fraunces × Inter" },
            { value: "instrument", label: "Instrument × Geist" },
            { value: "domaine", label: "DM Serif × Geist" },
          ]}
        />
      </TweakSection>
      <TweakSection label="Language">
        <TweakRadio
          label="Lang"
          value={tweaks.lang}
          onChange={(v) => setTweak("lang", v)}
          options={[
            { value: "fr", label: "FR" },
            { value: "en", label: "EN" },
          ]}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

// === App ===
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLang] = useStateApp(tweaks.lang || "fr");
  const [theme, setTheme] = useStateApp(tweaks.theme || "light");

  // Sync local state from tweaks (when user changes via panel)
  useEffectApp(() => {
    if (tweaks.lang && tweaks.lang !== lang) setLang(tweaks.lang);
  }, [tweaks.lang]);
  useEffectApp(() => {
    if (tweaks.theme && tweaks.theme !== theme) setTheme(tweaks.theme);
  }, [tweaks.theme]);

  // Push local state into tweaks (when user uses nav controls)
  useEffectApp(() => { if (lang !== tweaks.lang) setTweak("lang", lang); }, [lang]);
  useEffectApp(() => { if (theme !== tweaks.theme) setTweak("theme", theme); }, [theme]);

  // Apply theme attr
  useEffectApp(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Apply accent vars
  useEffectApp(() => {
    const a = ACCENT_OPTIONS[tweaks.accent] || ACCENT_OPTIONS.terracotta;
    const root = document.documentElement;
    if (theme === "dark") {
      root.style.setProperty("--accent", a.dark);
      root.style.setProperty("--accent-soft", a.darkSoft);
    } else {
      root.style.setProperty("--accent", a.light);
      root.style.setProperty("--accent-soft", a.soft);
    }
  }, [tweaks.accent, theme]);

  // Apply fonts
  useEffectApp(() => {
    const f = FONT_OPTIONS[tweaks.fontStack] || FONT_OPTIONS.fraunces;
    document.documentElement.style.setProperty("--serif", f.serif);
    document.documentElement.style.setProperty("--sans", f.sans);
  }, [tweaks.fontStack]);

  const t = window.CONTENT[lang];

  // Marquee items
  const marqueeItems = [
    "Chief of Staff", "Digital Marketing", "Automations", "AI & Data",
    "Brand strategy", "Content design", "Editorial", "Available Q3 2026"
  ];

  return (
    <>
      <CustomCursor />
      <Nav t={t} lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} navLabels={t.nav} />
      <main>
        <Hero t={t} heroVariant={tweaks.heroVariant} />
        <Marquee items={marqueeItems} />
        <Manifesto t={t} />
        <About t={t} />
        <ChiefOfStaff t={t} />
        <Services t={t} />
        <Stats t={t} />
        <CaseStudies t={t} />
        <Skills t={t} />
        <Process t={t} />
        <Blog t={t} />
        <Contact t={t} />
        <Footer t={t} />
      </main>
      <MyTweaks tweaks={tweaks} setTweak={setTweak} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
