import { motion } from "framer-motion";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-display text-xl font-bold text-primary">BK</span>
        <div className="hidden md:flex items-center gap-8 font-body text-sm tracking-wide">
          <button onClick={() => scrollTo("about")} className="text-muted-foreground hover:text-primary transition-colors">
            À propos
          </button>
          <button onClick={() => scrollTo("journey")} className="text-muted-foreground hover:text-primary transition-colors">
            Parcours
          </button>
          <button onClick={() => scrollTo("projects")} className="text-muted-foreground hover:text-primary transition-colors">
            Projets IA
          </button>
          <button onClick={() => scrollTo("skills")} className="text-muted-foreground hover:text-primary transition-colors">
            Skills
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
