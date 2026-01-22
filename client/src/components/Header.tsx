import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Why Us", to: "why-us" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link 
            to="home" 
            smooth={true} 
            className="flex items-center gap-2 cursor-pointer"
          >
            {/* Logo placeholder - using text/icon since no image provided */}
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">D</div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-display text-gray-900 leading-none">DENT-O-CARE</span>
              <span className="text-xs text-primary font-medium tracking-wide">MULTISPECIALITY CLINIC</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-gray-600 hover:text-primary font-medium cursor-pointer transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
            <Link to="contact" smooth={true} offset={-100}>
              <Button className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                Book Appointment
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-gray-800 font-medium py-2 px-4 hover:bg-secondary/50 rounded-lg cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="contact" smooth={true} offset={-80} onClick={() => setIsOpen(false)}>
              <Button className="w-full rounded-xl mt-2 bg-primary">Book Appointment</Button>
            </Link>
            <a href="tel:09663661131">
              <Button variant="outline" className="w-full rounded-xl border-primary text-primary hover:bg-primary/5">
                <Phone className="w-4 h-4 mr-2" /> Call Now
              </Button>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
