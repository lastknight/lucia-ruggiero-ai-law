import portrait from "@/assets/lucia-portrait.jpg";

const competences = [
  {
    number: "01",
    title: "AI Compliance",
    description: "Implementazione pratica del Regolamento UE 2024/1689 (AI Act) e della L. 132/2025.",
  },
  {
    number: "02",
    title: "Data Protection & Cybersecurity",
    description: "Gestione del GDPR e della direttiva NIS2 in sinergia con i sistemi di IA.",
  },
  {
    number: "03",
    title: "Corporate GRC",
    description: "Integrazione della conformità tecnologica nei processi di Governance, Risk Management e Compliance aziendale.",
  },
];

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="min-h-screen flex items-center border-b border-border">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 animate-fade-up">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
                Avvocata · AI Compliance
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.9] tracking-tight mb-8">
                Lucia<br />Ruggiero
              </h1>
              <div className="w-16 h-px bg-foreground mb-8" />
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg font-light">
                L'avvocata che trasforma la complessità normativa dell'AI in soluzioni operative per le aziende.
              </p>
              <a
                href="#contatti"
                className="inline-block mt-10 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase font-heading font-medium hover:opacity-80 transition-opacity"
              >
                Contattami
              </a>
            </div>
            <div className="order-1 lg:order-2 animate-fade-in">
              <div className="aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none overflow-hidden">
                <img src={portrait} alt="Avv. Lucia Ruggiero" className="w-full h-full object-cover grayscale" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-24 md:py-32 border-b border-border">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">Background</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-10">
              Dal Crimine all'Algoritmo
            </h2>
            <div className="w-12 h-px bg-foreground mb-10" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <p className="text-lg leading-relaxed text-muted-foreground font-light">
              Il mio percorso non segue i binari tradizionali del diritto commerciale. Inizia nel diritto penale e nella criminologia, formandosi tra indagini digitali, cybersecurity e digital forensics.
            </p>
            <div>
              <p className="text-lg leading-relaxed text-muted-foreground font-light">
                Questa traiettoria mi ha insegnato a leggere il rischio tecnologico non solo attraverso i codici, ma con gli occhi di chi sa dove si nascondono le vulnerabilità reali e come si costruiscono le prove.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground font-light mt-6">
                Oggi, porto questa visione pragmatica nel campo dell'Intelligenza Artificiale, traducendo l'astrattezza di normative come l'AI Act in protocolli d'azione concreti per le imprese.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competenze */}
      <section className="py-24 md:py-32 border-b border-border bg-secondary">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">Competenze</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight max-w-2xl">
              Perché lavorare con me
            </h2>
            <p className="text-lg text-muted-foreground font-light mt-6 max-w-2xl">
              In un mercato diviso tra accademici e specialisti verticali, offro un unico punto di riferimento per la compliance tecnologica convergente.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {competences.map((item) => (
              <div key={item.number} className="bg-secondary p-8 md:p-10 group">
                <span className="text-sm font-heading text-muted-foreground tracking-wider">{item.number}</span>
                <h3 className="text-xl md:text-2xl font-heading font-semibold mt-4 mb-4">{item.title}</h3>
                <div className="w-8 h-px bg-foreground mb-4 group-hover:w-16 transition-all duration-500" />
                <p className="text-muted-foreground font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodo */}
      <section className="py-24 md:py-32 border-b border-border">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">Metodo</p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">La pratica prima di tutto</h2>
            </div>
            <div className="lg:pt-12">
              <p className="text-lg leading-relaxed text-muted-foreground font-light mb-8">
                Non fornisco pareri teorici, ma strumenti operativi — checklist, template e procedure — pensati per le PMI e le startup che hanno bisogno di muoversi velocemente senza rinunciare alla sicurezza legale.
              </p>
              <div className="w-12 h-px bg-foreground mb-8" />
              <blockquote className="text-xl md:text-2xl font-heading font-medium leading-snug italic">
                "Come parte della prima generazione di giuristi AI-native in Italia, credo in un diritto che non sia un ostacolo all'innovazione, ma il motore che la rende sostenibile e sicura."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Contatti */}
      <section id="contatti" className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-2xl">
            <p className="text-sm tracking-[0.3em] uppercase opacity-60 mb-6">Contatti</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-8">Parliamo del tuo progetto</h2>
            <div className="w-12 h-px bg-primary-foreground opacity-40 mb-8" />
            <p className="text-lg opacity-70 font-light leading-relaxed mb-10">
              Hai bisogno di conformità AI, protezione dati o supporto GRC? Contattami per una consulenza iniziale.
            </p>
            <a
              href="mailto:info@luciaruggiero.it"
              className="inline-block px-8 py-4 border border-primary-foreground text-sm tracking-[0.2em] uppercase font-heading font-medium hover:bg-primary-foreground hover:text-primary transition-colors duration-300"
            >
              info@luciaruggiero.it
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Avv. Lucia Ruggiero — Tutti i diritti riservati</p>
          <p className="text-sm text-muted-foreground">P.IVA: XXXXXXXXXXX</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
