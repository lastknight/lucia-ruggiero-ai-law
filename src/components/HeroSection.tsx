import { motion } from "framer-motion";
import portrait from "@/assets/lucia-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center border-b border-border">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Avvocata · AI Compliance
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.9] tracking-tight mb-8">
              Lucia
              <br />
              Ruggiero
            </h1>
            <div className="w-16 h-px bg-foreground mb-8" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg font-light">
              L'avvocata che trasforma la complessità normativa dell'AI in
              soluzioni operative per le aziende.
            </p>
            <motion.a
              href="#contatti"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="inline-block mt-10 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase font-heading font-medium hover:opacity-80 transition-opacity"
            >
              Contattami
            </motion.a>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none overflow-hidden">
              <img
                src={portrait}
                alt="Avv. Lucia Ruggiero"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
