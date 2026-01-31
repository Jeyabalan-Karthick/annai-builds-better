import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import heroImage from '@/assets/hero-construction.jpg';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91 98765 43210', '+91 98765 43211'],
    action: 'tel:+919876543210',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@annaiconstruction.com', 'sales@annaiconstruction.com'],
    action: 'mailto:info@annaiconstruction.com',
  },
  {
    icon: MapPin,
    title: 'Office Address',
    details: ['123 Construction Avenue,', 'Chennai, Tamil Nadu 600001'],
    action: 'https://maps.google.com',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
    action: null,
  },
];

const Contact = () => {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const formInView = useInView(formRef, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form after a delay
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src={heroImage} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="section-container relative z-10" ref={heroRef}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
                Get In Touch With Us
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Ready to start your construction project? Contact us for a free consultation 
                and let's discuss how we can bring your vision to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-background" ref={formRef}>
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-primary font-display mb-4">
                  Get Free Consultation
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project requirements..."
                      className="rounded-xl resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full h-12 rounded-full bg-gradient-to-r from-accent to-amber-dark text-accent-foreground font-semibold text-lg hover:shadow-glow-lg transition-all duration-300"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 mr-2" />
                        Message Sent!
                      </>
                    ) : isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info & Map */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Contact Cards */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="glass-card p-6"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4">
                        <info.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground text-sm">
                          {info.action && i === 0 ? (
                            <a href={info.action} className="hover:text-accent transition-colors">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </motion.div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="glass-card overflow-hidden h-[300px]"
                >
                  <div className="w-full h-full bg-secondary flex items-center justify-center">
                    <div className="text-center p-8">
                      <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">Find Us on Map</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        123 Construction Avenue, Chennai
                      </p>
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-accent font-medium text-sm hover:underline"
                      >
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="section-container text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
              Prefer to Talk? Call Us Directly
            </h2>
            <p className="text-primary-foreground/70 mb-6">
              Our experts are available Monday to Saturday, 9 AM to 6 PM
            </p>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent to-amber-dark text-accent-foreground rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-glow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              +91 98765 43210
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
