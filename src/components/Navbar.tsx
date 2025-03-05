
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-10',
        {
          'bg-white/80 backdrop-blur-sm shadow-sm': isScrolled,
          'bg-transparent': !isScrolled
        }
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-xl md:text-2xl font-semibold tracking-tight text-primary">
          Last Planet
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Services
          </a>
          <a href="#process" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Process
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Testimonials
          </a>
          <Button asChild size="sm" variant="outline" className="border-primary/20 hover:border-primary/40">
            <a href="#contact">Contact Us</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out pt-20',
          {
            'translate-x-0': mobileMenuOpen,
            'translate-x-full': !mobileMenuOpen
          }
        )}
      >
        <nav className="flex flex-col items-center justify-center space-y-8 p-8">
          <a
            href="#services"
            className="text-xl font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#process"
            className="text-xl font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Process
          </a>
          <a
            href="#testimonials"
            className="text-xl font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <Button
            asChild
            className="mt-4 w-full max-w-[200px]"
            onClick={() => setMobileMenuOpen(false)}
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
