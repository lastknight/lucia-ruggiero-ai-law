import { motion } from "framer-motion";

const MethodSection = () => {
  return (
    <section className="py-24 md:py-32 border-b border-border">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Metodo
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              La pratica prima di tutto
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:pt-12"
          >
            <p className="text-lg leading-relaxed text-muted-foreground font-light mb-8">
              Non fornisco pareri teorici, ma strumenti operativi — checklist,
              template e procedure — pensati per le PMI e le startup che hanno
              bisogno di muoversi velocemente senza rinunciare alla sicurezza
              legale.
            </p>
            <div className="w-12 h-px bg-foreground mb-8" />
            <blockquote className="text-xl md:text-2xl font-heading font-medium leading-snug italic">
              "Come parte della prima generazione di giuristi AI-native in
              Italia, credo in un diritto che non sia un ostacolo
              all'innovazione, ma il motore che la rende sostenibile e sicura."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
