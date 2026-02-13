import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import CompetenceSection from "@/components/CompetenceSection";
import MethodSection from "@/components/MethodSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <BioSection />
      <CompetenceSection />
      <MethodSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
