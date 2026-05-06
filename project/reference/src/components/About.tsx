import { motion } from "framer-motion";

const about = [
  {
    title: "Chief of Staff",
    description: "Bras droit d'un serial entrepreneur — coordination stratégique, gestion de projets et prise de décision.",
  },
  {
    title: "MSc IA & Data",
    description: "En formation avancée en Intelligence Artificielle et Data Science, avec une forte appétence pour les hackathons.",
  },
  {
    title: "Freelance Marketing Digital",
    description: "Stratégies digitales, social media management et création de contenu pour accroître la visibilité des marques.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">
            À propos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-16">
            Ce que je fais
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {about.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <span className="text-primary font-display font-bold text-lg">{i + 1}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
