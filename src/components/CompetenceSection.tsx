import { motion } from "framer-motion";

const competences = [
  {
    number: "01",
    title: "AI Compliance",
    description:
      "Implementazione pratica del Regolamento UE 2024/1689 (AI Act) e della L. 132/2025.",
  },
  {
    number: "02",
    title: "Data Protection & Cybersecurity",
    description:
      "Gestione del GDPR e della direttiva NIS2 in sinergia con i sistemi di IA.",
  },
  {
    number: "03",
    title: "Corporate GRC",
    description:
      "Integrazione della conformità tecnologica nei processi di Governance, Risk Management e Compliance aziendale.",
  },
];

const CompetenceSection = () => {
  return (
    <section className="py-24 md:py-32 border-b border-border bg-secondary">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Competenze
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight max-w-2xl">
            Perché lavorare con me
          </h2>
          <p className="text-lg text-muted-foreground font-light mt-6 max-w-2xl">
            In un mercato diviso tra accademici e specialisti verticali, offro
            un unico punto di riferimento per la compliance tecnologica
            convergente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {competences.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-secondary p-8 md:p-10 group"
            >
              <span className="text-sm font-heading text-muted-foreground tracking-wider">
                {item.number}
              </span>
              <h3 className="text-xl md:text-2xl font-heading font-semibold mt-4 mb-4">
                {item.title}
              </h3>
              <div className="w-8 h-px bg-foreground mb-4 group-hover:w-16 transition-all duration-500" />
              <p className="text-muted-foreground font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetenceSection;
