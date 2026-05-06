import { motion } from "framer-motion";

const ProjectsIA = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">
            Hackathons & Projets
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projets IA
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mb-16">
            Cette section sera alimentée au fil de mes hackathons et projets réalisés en école.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-2 border-dashed border-border rounded-2xl p-10 flex flex-col items-center justify-center min-h-[250px] group hover:border-primary/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-4">
                <span className="font-display text-2xl text-muted-foreground group-hover:text-primary transition-colors">
                  +
                </span>
              </div>
              <p className="font-body text-sm text-muted-foreground text-center">
                Projet à venir
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsIA;
