import { motion } from "framer-motion";
import { Globe, Share2, BarChart3, Zap } from "lucide-react";

const expertises = [
  {
    icon: Globe,
    title: "WebMaster",
    description: "Concevoir des sites web robustes et conviviaux qui fonctionnent parfaitement sur tous les appareils.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Développer et gérer des stratégies de contenu pour optimiser la présence des marques sur les réseaux sociaux.",
  },
  {
    icon: BarChart3,
    title: "Marketing Digital",
    description: "Élaborer des campagnes en ligne qui favorisent l'engagement et augmentent le ROI.",
  },
  {
    icon: Zap,
    title: "Automatisation",
    description: "Automatiser les workflows et processus métier pour gagner en efficacité grâce aux outils no-code et IA.",
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">
            Services
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-16">
            Expertise
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertises.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative bg-background rounded-2xl p-8 border border-border hover:border-primary/40 transition-all hover:-translate-y-1 duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
