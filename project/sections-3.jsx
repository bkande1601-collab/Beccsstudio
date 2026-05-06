// Case studies, Skills, Process, Blog, Contact, Footer
const { useState: useState3, useEffect: useEffect3, useRef: useRef3 } = React;

function CaseStudies({ t }) {
  const [open, setOpen] = useState3(0);
  return (
    <section id="work" className="work" data-screen-label="07 Work">
      <div className="container">
        <div className="section-head">
          <Reveal><p className="eyebrow">{t.workEyebrow}</p></Reveal>
          <Reveal delay={100}>
            <h2 className="section-title">
              {t.workTitle.split(" ").map((w, i) =>
              <span key={i} className={i === 0 ? "serif-italic" : ""}>{w} </span>
              )}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="section-intro">{t.workIntro}</p>
          </Reveal>
        </div>
        <div className="work__list">
          {t.cases.map((c, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 80} className={`work__row ${isOpen ? "is-open" : ""}`}>
                <button
                  className="work__head"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}>
                  
                  <span className="work__num mono">0{i + 1}</span>
                  <span className="work__client">{c.client}</span>
                  <span className="work__role">{c.role}</span>
                  <span className="work__type mono">{c.type}</span>
                  <span className="work__icon">{isOpen ? "—" : "+"}</span>
                </button>
                <div className="work__panel" style={{ maxHeight: isOpen ? 800 : 0 }}>
                  <div className="work__panel-inner">
                    <div className="work__panel-left">
                      <p className="work__teaser">{c.teaser}</p>
                      <ul className="work__scope">
                        {c.scope.map((s, j) =>
                        <li key={j}><span className="services__bullet" />{s}</li>
                        )}
                      </ul>
                    </div>
                    <div className="work__panel-right">
                      <div className="work__visual">
                        <span className="portrait-mono">visual · {c.client.toLowerCase()}</span>
                      </div>
                      <div className="work__stats">
                        {c.stats.map((s, j) =>
                        <div className="work__stat" key={j}>
                            <div className="work__stat-val serif-italic">{s.value}</div>
                            <div className="work__stat-label mono">{s.label}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>);

          })}
        </div>
      </div>
    </section>);

}

function Skills({ t }) {
  const sectionRef = useRef3(null);
  const [scrolled, setScrolled] = useState3(0);

  useEffect3(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 -> section just entered, 1 -> section about to leave
      const p = Math.max(0, Math.min(1, 1 - (r.top + r.height * 0.3) / (vh + r.height * 0.3)));
      setScrolled(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // direction alternates per row (left, right, left, ...)
  return (
    <section id="skills" className="skills" data-screen-label="08 Skills" ref={sectionRef}>
      {/* Floating shapes */}
      <div className="skills__bg">
        <span className="skills__shape skills__shape--1" style={{ transform: `translate(${scrolled * 80}px, ${-scrolled * 60}px) rotate(${scrolled * 60}deg)` }} />
        <span className="skills__shape skills__shape--2" style={{ transform: `translate(${-scrolled * 60}px, ${scrolled * 80}px) rotate(${-scrolled * 90}deg)` }} />
        <span className="skills__shape skills__shape--3" style={{ transform: `translate(${scrolled * 40}px, ${scrolled * 40}px) rotate(${scrolled * 120}deg)` }} />
      </div>

      <div className="container">
        <div className="section-head">
          <Reveal><p className="eyebrow">{t.skillsEyebrow}</p></Reveal>
          <Reveal delay={100}>
            <h2 className="section-title">
              {t.skillsTitle.split(" ").map((w, i) =>
              <span key={i} className={i === 1 ? "serif-italic" : ""}>{w} </span>
              )}
            </h2>
          </Reveal>
        </div>

        {/* Grid: title + animated marquee row of chips, alternating direction */}
        <div className="skills__rows">
          {t.skillCategories.map((cat, i) => {
            const reverse = i % 2 === 1;
            const chips = [...cat.tools, ...cat.tools, ...cat.tools];
            // Per-row scroll-driven offset
            const offset = (scrolled - 0.5) * 200 * (reverse ? -1 : 1);
            return (
              <Reveal key={i} delay={i * 80} className="skills__row">
                <div className="skills__row-head">
                  <span className="skills__row-num mono">0{i + 1}</span>
                  <h3 className="skills__cat-name">{cat.name}</h3>
                </div>
                <div className={`skills__marquee ${reverse ? "is-reverse" : ""}`} style={{ margin: "10px 10px 0px 0px" }}>
                  <div
                    className="skills__marquee-track"
                    style={{ transform: `translate3d(${offset}px, 0, 0)` }}>
                    
                    {chips.map((tool, j) =>
                    <span key={j} className="skills__chip skills__chip--anim mono" style={{ animationDelay: `${j % cat.tools.length * 80}ms` }}>
                        <span className="skills__chip-dot" />
                        {tool}
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>);

          })}
        </div>
      </div>
    </section>);

}

function Process({ t }) {
  return (
    <section className="process" data-screen-label="09 Process">
      <div className="container">
        <div className="section-head">
          <Reveal><p className="eyebrow">{t.processEyebrow}</p></Reveal>
          <Reveal delay={100}>
            <h2 className="section-title">
              {t.processTitle.split(" ").map((w, i) =>
              <span key={i} className={i === 1 ? "serif-italic" : ""}>{w} </span>
              )}
            </h2>
          </Reveal>
        </div>
        <div className="process__grid">
          {t.process.map((p, i) =>
          <Reveal key={i} delay={i * 100} className="process__step">
              <div className="process__step-num serif-italic">{p.step}</div>
              <h3 className="process__step-title">{p.title}</h3>
              <p className="process__step-body">{p.body}</p>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

function Blog({ t }) {
  return (
    <section id="blog" className="blog" data-screen-label="10 Blog">
      <div className="container">
        <div className="section-head">
          <Reveal><p className="eyebrow">{t.blogEyebrow}</p></Reveal>
          <Reveal delay={100}>
            <h2 className="section-title">
              <span className="serif-italic">{t.blogTitle}</span>
            </h2>
          </Reveal>
        </div>
        <div className="blog__list">
          {t.blog.map((post, i) =>
          <Reveal key={i} delay={i * 70}>
              <a href="#" className="blog__row">
                <span className="blog__date mono">{post.date}</span>
                <span className="blog__tag">{post.tag}</span>
                <span className="blog__title">{post.title}</span>
                <span className="blog__arrow">→</span>
              </a>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

function Contact({ t }) {
  const [form, setForm] = useState3({ name: "", email: "", project: t.contactFormProjectOptions[0], message: "" });
  const [sent, setSent] = useState3(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", project: t.contactFormProjectOptions[0], message: "" });
  };

  return (
    <section id="contact" className="contact" data-screen-label="11 Contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__left">
            <Reveal><p className="eyebrow">{t.contactEyebrow}</p></Reveal>
            <Reveal delay={100}>
              <h2 className="contact__title">
                {t.contactTitle.split(" ").map((w, i) =>
                <span key={i} className={i === 1 ? "serif-italic" : ""}>{w} </span>
                )}
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="contact__body prose">{t.contactBody}</p>
            </Reveal>
            <Reveal delay={300}>
              <div className="contact__direct">
                <p className="mono">{t.contactDirect}</p>
                <a href={`mailto:${t.contactEmail}`} className="contact__email serif-italic">
                  {t.contactEmail}
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200} className="contact__right">
            <form className="contact__form" onSubmit={submit}>
              <div className="contact__field">
                <label className="mono">{t.contactFormName}</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })} />
                
              </div>
              <div className="contact__field">
                <label className="mono">{t.contactFormEmail}</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })} />
                
              </div>
              <div className="contact__field">
                <label className="mono">{t.contactFormProject}</label>
                <select
                  value={form.project}
                  onChange={(e) => setForm({ ...form, project: e.target.value })}>
                  
                  {t.contactFormProjectOptions.map((opt) =>
                  <option key={opt} value={opt}>{opt}</option>
                  )}
                </select>
              </div>
              <div className="contact__field">
                <label className="mono">{t.contactFormMessage}</label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })} />
                
              </div>
              <Magnetic>
                <button type="submit" className="btn btn--primary contact__submit">
                  {sent ? t.contactFormSent : t.contactFormSubmit} <span>{sent ? "✓" : "→"}</span>
                </button>
              </Magnetic>
            </form>
          </Reveal>
        </div>
      </div>
    </section>);

}

function Footer({ t }) {
  return (
    <footer className="footer" data-screen-label="12 Footer">
      <div className="container">
        <div className="footer__big serif-italic">{t.heroName.join(" ")}.</div>
        <div className="footer__row">
          <div className="footer__col">
            <span className="dot-pulse" />
            <span className="mono">{t.footerCta}</span>
          </div>
          <div className="footer__col">
            <span className="mono">{t.footerCopyright}</span>
          </div>
          <div className="footer__col">
            <span className="mono">{t.footerCredit}</span>
          </div>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { CaseStudies, Skills, Process, Blog, Contact, Footer });