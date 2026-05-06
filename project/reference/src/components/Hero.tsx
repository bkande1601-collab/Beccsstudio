import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-warm-gradient opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              ✦ Portfolio
            </p>
            <h1 className="font-display text-6xl md:text-8xl font-bold text-foreground leading-[0.95] mb-6">
              Binta
              <br />
              <span className="text-gradient">Kande</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-md leading-relaxed">
              Chief of Staff · MSc IA & Data · Freelance Marketing Digital.
              À la croisée de la tech, de la stratégie et du digital.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="flex items-center gap-2 text-sm font-body text-primary"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Open to Work
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-warm-gradient opacity-80 flex items-center justify-center">
              <span className="font-display text-8xl md:text-9xl font-bold text-primary-foreground/90">
                BK
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
