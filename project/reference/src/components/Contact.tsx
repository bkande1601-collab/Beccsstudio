import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">
            Contact
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Créer, résoudre,
            <br />
            <span className="text-gradient">avancer</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto mb-10">
            Envie de collaborer ou d'échanger ? N'hésitez pas à me contacter.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:contact@bintakande.com"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-body text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Me contacter
            </a>
            <a
              href="https://www.linkedin.com/in/binta-kande/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border text-foreground px-8 py-3 rounded-full font-body text-sm font-medium hover:border-primary hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-6 mt-24 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg font-bold text-primary">Binta Kande</span>
          <span className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Tous droits réservés
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
