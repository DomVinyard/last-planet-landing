
import { ArrowRight } from 'lucide-react';
import AnimatedGradient from './ui/AnimatedGradient';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20 pb-16 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[#333333]/70"></div>
      <div className="absolute top-40 -left-20 w-72 h-72 bg-[#1A1F2C]/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-[#403E43]/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
        {/* Pre-heading */}
        <div className="inline-block px-3 py-1 rounded-full bg-[#555555]/60 text-sm font-medium mb-4 text-white">
          AI App Development Agency
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
          We build intelligent applications that 
          <AnimatedGradient className="inline-block mx-2 px-2 rounded-md">
            <span className="text-white">transform businesses</span>
          </AnimatedGradient>
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-6 text-balance">
          Crafting AI-powered solutions that enhance efficiency, drive growth, 
          and deliver measurable results for your organization.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button asChild size="lg" className="rounded-full px-8 group">
            <a href="#contact">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <a href="#services">Our Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
