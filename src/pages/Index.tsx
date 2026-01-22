import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedCollection from '@/components/FeaturedCollection';
import MarqueeSection from '@/components/MarqueeSection';
import AboutSection from '@/components/AboutSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <FloatingElements />
      <Navigation />
      <HeroSection />
      <FeaturedCollection />
      <MarqueeSection />
      <AboutSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
};

export default Index;
