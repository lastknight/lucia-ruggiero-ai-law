const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Avv. Lucia Ruggiero — Tutti i diritti riservati
        </p>
        <p className="text-sm text-muted-foreground">
          P.IVA: XXXXXXXXXXX
        </p>
      </div>
    </footer>
  );
};

export default Footer;
