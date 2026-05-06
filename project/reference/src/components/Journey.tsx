import { motion } from "framer-motion";

const experiences = [
  { role: "Chief of Staff", company: "Serial Entrepreneur", period: "Aujourd'hui", highlight: true },
  { role: "MSc IA & Data", company: "Albert School (Eugenia)", period: "En cours", highlight: true },
  { role: "Freelance Marketing Digital", company: "Indépendant", period: "En cours", highlight: true },
  { role: "Social Media Manager", company: "MNGRS.AI — Freelance", period: "2025 — Aujourd'hui" },
  { role: "Chargée de Marketing Digital", company: "La Squadra Paris", period: "2024 — 2025" },
  { role: "Webmaster", company: "Freelance", period: "2024 — Aujourd'hui" },
  { role: "Event & Workshop Planner", company: "Projet entrepreneurial", period: "2024 — Aujourd'hui" },
];

const Journey = () => {
  return (
    <section id="journey" className="py-24 bg-card">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">
            Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-16">
            Parcours
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Dot */}
                <div
                  className={`absolute left-2.5 md:left-4.5 top-2 w-3 h-3 rounded-full border-2 ${
                    exp.highlight
                      ? "bg-primary border-primary"
                      : "bg-background border-border"
                  }`}
                />

                <div className={`${exp.highlight ? "bg-primary/5 border border-primary/20" : ""} rounded-xl p-4`}>
                  <span className="font-body text-xs tracking-wider uppercase text-muted-foreground">
                    {exp.period}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-1">
                    {exp.role}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">{exp.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
