import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyRaccoons from "@/components/WhyRaccoons";
import LazyHistory from "@/components/LazyHistory";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-purple-50">
      <Navigation />
      <Hero />
      <Services />
      <WhyRaccoons />
      <LazyHistory />
      <HowItWorks />
      <Pricing />
      <ContactForm />
    </div>
  );
};

export default Index;
