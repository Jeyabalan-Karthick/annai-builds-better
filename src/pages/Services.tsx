import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import portfolioHouse1 from '@/assets/portfolio-house-1.jpg';
import portfolioCommercial1 from '@/assets/portfolio-commercial-1.jpg';
import portfolioApartment1 from '@/assets/portfolio-apartment-1.jpg';
import portfolioInterior1 from '@/assets/portfolio-interior-1.jpg';
import portfolioHouse2 from '@/assets/portfolio-house-2.jpg';
import heroImage from '@/assets/hero-construction.jpg';

const services = [
  {
    id: 'residential',
    title: 'Residential Construction',
    description: 'We build custom homes that reflect your lifestyle and dreams. From single-family homes to luxury villas, our residential construction services cover complete home building with attention to every detail.',
    image: portfolioHouse1,
    features: [
      'Custom home design and planning',
      'Foundation to finish construction',
      'Modern architectural styles',
      'Energy-efficient building practices',
      'Quality interior finishing',
      'Landscaping and exterior work',
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Construction',
    description: 'From office buildings to shopping complexes, we deliver commercial projects that combine functionality with aesthetic appeal. Our commercial construction expertise ensures your business has the perfect space.',
    image: portfolioCommercial1,
    features: [
      'Office buildings and corporate spaces',
      'Retail and shopping complexes',
      'Industrial facilities',
      'Hospitality projects',
      'Healthcare facilities',
      'Educational institutions',
    ],
  },
  {
    id: 'renovation',
    title: 'Renovation & Remodeling',
    description: 'Transform your existing space with our comprehensive renovation services. Whether it\'s a complete makeover or targeted improvements, we breathe new life into old structures.',
    image: portfolioApartment1,
    features: [
      'Complete home renovation',
      'Kitchen and bathroom remodeling',
      'Room additions and extensions',
      'Structural modifications',
      'Facade upgrades',
      'Modernization projects',
    ],
  },
  {
    id: 'interior',
    title: 'Interior Works',
    description: 'Our interior solutions cover everything from design concepts to final execution. We create spaces that are not just beautiful but also functional and comfortable.',
    image: portfolioInterior1,
    features: [
      'Interior design consultation',
      'False ceiling and lighting',
      'Flooring solutions',
      'Modular furniture',
      'Paint and wall treatments',
      'Electrical and plumbing fixtures',
    ],
  },
  {
    id: 'structural',
    title: 'Structural Works',
    description: 'Strong foundations and robust structures are the backbone of any building. Our structural work ensures your construction stands strong for generations.',
    image: heroImage,
    features: [
      'Foundation construction',
      'RCC framework',
      'Steel structures',
      'Reinforcement work',
      'Load-bearing walls',
      'Structural repairs and strengthening',
    ],
  },
  {
    id: 'turnkey',
    title: 'Turnkey Projects',
    description: 'Our end-to-end turnkey solutions take care of everything from planning to handover. Just share your vision, and we\'ll deliver a ready-to-use space.',
    image: portfolioHouse2,
    features: [
      'Complete project management',
      'Design and planning',
      'All construction work',
      'Interior finishing',
      'MEP installations',
      'Final handover with documentation',
    ],
  },
];

const Services = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });

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
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
                Comprehensive Construction Solutions
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                From concept to completion, we offer a full range of construction services 
                tailored to meet your unique requirements.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-24 bg-background">
          <div className="section-container">
            <div className="space-y-24">
              {services.map((service, index) => {
                const ServiceCard = () => {
                  const ref = useRef(null);
                  const isInView = useInView(ref, { once: true, margin: '-100px' });

                  return (
                    <div
                      ref={ref}
                      id={service.id}
                      className={`grid lg:grid-cols-2 gap-12 items-center ${
                        index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                      }`}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className={index % 2 === 1 ? 'lg:order-2' : ''}
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-[400px] object-cover rounded-3xl"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={index % 2 === 1 ? 'lg:order-1' : ''}
                      >
                        <h2 className="text-3xl md:text-4xl font-bold text-primary font-display mb-4">
                          {service.title}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                          {service.description}
                        </p>
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                              <span className="text-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          to="/contact"
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent to-amber-dark text-accent-foreground rounded-full font-medium transition-all duration-300 hover:shadow-glow-lg group"
                        >
                          Get a Quote
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </motion.div>
                    </div>
                  );
                };

                return <ServiceCard key={service.id} />;
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-secondary/30">
          <div className="section-container">
            <div className="glass-card p-12 text-center">
              <h2 className="section-heading mb-4">Ready to Start Your Project?</h2>
              <p className="section-subheading mb-8">
                Contact us today for a free consultation and quote
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold transition-all duration-300 hover:bg-primary/90 group"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
