import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contatti" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="text-sm tracking-[0.3em] uppercase opacity-60 mb-6">
            Contatti
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-8">
            Parliamo del tuo progetto
          </h2>
          <div className="w-12 h-px bg-primary-foreground opacity-40 mb-8" />
          <p className="text-lg opacity-70 font-light leading-relaxed mb-10">
            Hai bisogno di conformità AI, protezione dati o supporto GRC?
            Contattami per una consulenza iniziale.
          </p>
          <a
            href="mailto:info@luciaruggiero.it"
            className="inline-block px-8 py-4 border border-primary-foreground text-sm tracking-[0.2em] uppercase font-heading font-medium hover:bg-primary-foreground hover:text-primary transition-colors duration-300"
          >
            info@luciaruggiero.it
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
