import { motion } from "framer-motion";

const skills = [
  "Python", "Machine Learning", "Data Analysis", "SQL",
  "Notion", "Canva", "Meta Ads", "Google Ads",
  "Shopify", "WordPress", "Framer", "Make",
  "Social Media", "SEO", "Content Strategy", "Branding",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">
            Compétences
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-16">
            Skills
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="font-body text-sm px-5 py-2.5 rounded-full border border-border bg-background text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
