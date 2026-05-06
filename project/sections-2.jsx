// Chief of Staff, Services, Stats sections
const { useState: useState2, useEffect: useEffect2, useRef: useRef2 } = React;

function ChiefOfStaff({ t }) {
  return (
    <section id="cos" className="cos" data-screen-label="04 Chief of Staff">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">{t.cosEyebrow}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="section-title">
              {t.cosTitle.split(" ").map((w, i) => (
                <span key={i} className={i % 4 === 1 ? "serif-italic" : ""}>{w} </span>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="section-intro">{t.cosIntro}</p>
          </Reveal>
        </div>
        <div className="cos__grid">
          {t.cosMissions.map((m, i) => (
            <Reveal key={i} delay={i * 70} className="cos__card">
              <div className="cos__card-top">
                <span className="cos__num">0{i + 1}</span>
                <span className="cos__tag">{m.tag}</span>
              </div>
              <h3 className="cos__title">{m.title}</h3>
              <p className="cos__body">{m.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services({ t }) {
  return (
    <section id="services" className="services" data-screen-label="05 Services">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">{t.servicesEyebrow}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="section-title">
              {t.servicesTitle.split(" ").map((w, i) => (
                <span key={i} className={i === 1 ? "serif-italic" : ""}>{w} </span>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="section-intro">{t.servicesIntro}</p>
          </Reveal>
        </div>
        <div className="services__grid">
          {t.services.map((s, i) => (
            <Reveal key={i} delay={i * 80} className="services__card">
              <div className="services__card-head">
                <span className="services__num mono">{s.number}</span>
                <h3 className="services__title">{s.title}</h3>
              </div>
              <ul className="services__list">
                {s.items.map((it, j) => (
                  <li key={j}>
                    <span className="services__bullet" />
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats({ t }) {
  return (
    <section className="stats" data-screen-label="06 Stats">
      <div className="container">
        <Reveal><p className="eyebrow eyebrow--center">{t.statsEyebrow}</p></Reveal>
        <div className="stats__grid">
          {t.stats.map((s, i) => (
            <Reveal key={i} delay={i * 100} className="stats__cell">
              <div className="stats__value serif-italic">{s.value}</div>
              <div className="stats__label">{s.label}</div>
              <div className="stats__sub mono">{s.sub}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ChiefOfStaff, Services, Stats });
