import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";

import { Skills } from "@/components/sections/Skills";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        
        <Skills />
        <Resume />
        <Contact />
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-6 py-8 text-center text-sm text-muted-foreground"><b>
          © {new Date().getFullYear()}</b> Sofonias Dawit.  All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
