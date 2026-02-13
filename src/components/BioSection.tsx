import { motion } from "framer-motion";

const BioSection = () => {
  return (
    <section className="py-24 md:py-32 border-b border-border">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Background
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-10">
            Dal Crimine all'Algoritmo
          </h2>
          <div className="w-12 h-px bg-foreground mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-lg leading-relaxed text-muted-foreground font-light">
              Il mio percorso non segue i binari tradizionali del diritto
              commerciale. Inizia nel diritto penale e nella criminologia,
              formandosi tra indagini digitali, cybersecurity e digital
              forensics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed text-muted-foreground font-light">
              Questa traiettoria mi ha insegnato a leggere il rischio
              tecnologico non solo attraverso i codici, ma con gli occhi di chi
              sa dove si nascondono le vulnerabilità reali e come si
              costruiscono le prove.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground font-light mt-6">
              Oggi, porto questa visione pragmatica nel campo
              dell'Intelligenza Artificiale, traducendo l'astrattezza di
              normative come l'AI Act in protocolli d'azione concreti per le
              imprese.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
