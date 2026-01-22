import { Header } from "@/components/Header";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import { 
  Stethoscope, 
  Smile, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  Clock, 
  CreditCard,
  Phone,
  MapPin,
  Calendar,
  Heart
} from "lucide-react";
import { motion } from "framer-motion";

import clinicHeroImg from "@assets/WhatsApp_Image_2026-01-22_at_8.04.43_PM_1769109652425.jpeg";

export default function Home() {
  const services = [
    {
      icon: Smile,
      title: "Cosmetic Dentistry",
      description: "Smile makeovers, veneers, and bonding to give you the perfect confident smile you deserve."
    },
    {
      icon: ShieldCheck,
      title: "Dental Implants",
      description: "Permanent, natural-looking solutions for missing teeth using state-of-the-art titanium implants."
    },
    {
      icon: Activity,
      title: "Root Canal Treatment",
      description: "Painless computerized root canal treatments to save your natural tooth from extraction."
    },
    {
      icon: Sparkles,
      title: "Teeth Whitening",
      description: "Professional cleaning and whitening services to restore the natural brightness of your teeth."
    },
    {
      icon: Stethoscope,
      title: "Orthodontics",
      description: "Clear aligners and traditional braces to correct misaligned teeth for patients of all ages."
    },
    {
      icon: Heart,
      title: "Pediatric Dentistry",
      description: "Gentle, friendly specialized care for children to build healthy dental habits early."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="home" className="pt-28 pb-16 md:pt-40 md:pb-24 lg:pt-48 bg-gradient-to-br from-secondary/50 via-white to-white relative overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-200/20 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
                Welcome to Dent-O-Care
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display text-gray-900 leading-[1.1] mb-6">
                Your Smile, <br />
                <span className="text-primary">Our Priority</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                Advanced multispeciality dental care in Bellandur. We combine modern technology with gentle, compassionate care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="contact" smooth={true} offset={-100}>
                  <Button size="lg" className="w-full sm:w-auto rounded-xl px-8 h-14 text-lg bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                    Book Appointment
                  </Button>
                </Link>
                <a href="tel:09663661131">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-xl px-8 h-14 text-lg border-2 hover:bg-secondary/50">
                    <Phone className="w-5 h-5 mr-2" /> Call Now
                  </Button>
                </a>
              </div>
              
              <div className="mt-12 flex items-center gap-8">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-5 h-5 text-yellow-400 fill-current"><svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg></div>)}
                  </div>
                  <p className="text-sm font-medium text-gray-600">200+ Reviews</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div>
                  <p className="text-2xl font-bold text-gray-900 font-display">15+</p>
                  <p className="text-sm font-medium text-gray-600">Years Exp.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={clinicHeroImg} 
                  alt="Modern Dent-O-Care Clinic Interior" 
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/20 max-w-xs">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-100 rounded-lg text-green-600">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Safety First</p>
                      <p className="text-sm text-gray-600">Strict sterilization protocols followed</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-secondary rounded-3xl -z-10 rotate-3" />
               {/* 
                  Unsplash image for clinic interior/clean medical equipment.
               */}
               {/* modern dental clinic interior */}
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
                alt="Modern Clinic Interior" 
                className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
              />
            </div>
            <div className="order-1 md:order-2">
              <SectionHeading title="About Our Clinic" subtitle="Who We Are" alignment="left" />
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At <strong className="text-gray-900">Dent-O-Care</strong>, we believe in providing world-class dental treatments in a warm, comfortable environment. We are a <span className="text-primary font-semibold">women-owned</span> establishment proud to serve the Bellandur community.
                </p>
                <p>
                  We are explicitly <span className="text-primary font-semibold">LGBTQ+ friendly</span> and provide a judgment-free space for all patients. With a 4.9-star rating from over 200 happy smiles, our commitment to excellence speaks for itself.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    "Advanced Technology",
                    "Hygienic Environment",
                    "Experienced Doctors",
                    "Patient-Centric Care"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Comprehensive Care" subtitle="Our Services" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why Choose Dent-O-Care?" subtitle="The Difference" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: "Modern Equipment", text: "Latest dental technology for precise treatments" },
              { icon: ShieldCheck, title: "Pain-Free", text: "Advanced techniques for maximum comfort" },
              { icon: CreditCard, title: "Affordable", text: "Transparent pricing with no hidden costs" },
              { icon: Smile, title: "Friendly Staff", text: "Caring team that makes you feel at home" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center mb-4 text-primary">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contact" className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Visit Us Today" subtitle="Get In Touch" />
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
            {/* Info & Map Side */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Clinic Address</h4>
                    <p className="text-gray-600">
                      SHOP NO:3, FIRST FLOOR,<br />
                      SRI VEERANJANEYA COMPLEX,<br />
                      78/5 Bellandur Main Rd,<br />
                      Bengaluru – 560103
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                    <p className="text-gray-600 font-mono text-lg">096636 61131</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Timings</h4>
                    <p className="text-gray-600">
                      Open Daily<br />
                      Closes at 9:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Iframe */}
              <div className="bg-white p-2 rounded-3xl shadow-lg border border-gray-100 h-[300px] overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.750939962386!2d77.66579837507563!3d12.923722787387343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae137d1d867c29%3A0x6b80145c25e83c2!2sBellandur%20Main%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1716382000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                  title="Clinic Location"
                ></iframe>
              </div>
            </div>

            {/* Form Side */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white font-display mb-2">DENT-O-CARE</h3>
              <p className="text-sm opacity-60">Advanced Multispeciality Dental Clinic</p>
            </div>
            
            <div className="flex gap-4">
              {/* Social Placeholders */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <div className="w-5 h-5 bg-current rounded-sm opacity-50" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm opacity-50">
            © {new Date().getFullYear()} Dent-O-Care. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
