
import HelpHeader from '@/components/HelpHeader';
import HelpHero from '@/components/HelpHero';
import PopularTopics from '@/components/PopularTopics';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HelpHeader />
      <main>
        <HelpHero />
        <PopularTopics />
        <FAQSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-muted py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">Veenmo Support</h3>
            <p className="text-muted-foreground text-sm">
              © 2024 Veenmo Support. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
