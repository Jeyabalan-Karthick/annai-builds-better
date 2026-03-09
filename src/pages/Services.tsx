import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import heroImage from '@/assets/hero-construction.jpg';
import architectsImg from '@/assets/service-architects.jpg';
import civilImg from '@/assets/service-civil.jpg';
import buildersImg from '@/assets/service-builders.jpg';
import propertyImg from '@/assets/service-property.jpg';
import managementImg from '@/assets/service-management.jpg';
import planningImg from '@/assets/service-planning.jpg';
import estimateImg from '@/assets/service-estimates.jpg';

const services = [
  {
    id: 'architects',
    title: 'Architects',
    description: 'Our architectural services combine creative vision with functional design. We create modern, sustainable, and aesthetically pleasing architectural plans tailored to your specific needs.',
    image: architectsImg,
    features: [
      'Residential and commercial design',
      'Sustainable architectural solutions',
      '3D modeling and visualization',
      'Interior space planning',
      'Landscape architecture integration',
      'Concept to final blueprint',
    ],
  },
  {
    id: 'civil-engineers',
    title: 'Civil Engineers',
    description: 'Expert civil engineering services focused on structural integrity, safety, and efficiency. Our engineers ensure every project is built on a solid foundation and meets all regulatory standards.',
    image: civilImg,
    features: [
      'Structural design and analysis',
      'Site investigation and survey',
      'Environmental impact assessments',
      'Infrastructure planning',
      'Quality control and assurance',
      'Regulatory compliance checks',
    ],
  },
  {
    id: 'builders',
    title: 'Builders',
    description: 'As experienced builders, we take pride in our craftsmanship and attention to detail. We manage the entire construction process from foundation to final finishing.',
    image: buildersImg,
    features: [
      'Residential construction',
      'Commercial building projects',
      'Industrial construction',
      'Renovations and remodeling',
      'High-quality material sourcing',
      'Skilled labor management',
    ],
  },
  {
    id: 'property',
    title: 'Property Developments & Dealings',
    description: 'Strategic property development services that identify and maximize growth opportunities. We handle property dealings with transparency and professional expertise.',
    image: propertyImg,
    features: [
      'Residential developments',
      'Commercial real estate',
      'Land acquisition and dealing',
      'Investment consultation',
      'Property appreciation analysis',
      'Legal documentation support',
    ],
  },
  {
    id: 'management',
    title: 'Project Managements',
    description: 'Our project management ensures your construction project is delivered on time, within budget, and to the highest quality standards. We handle the complexity so you don\'t have to.',
    image: managementImg,
    features: [
      'End-to-end site management',
      'Resource and budget planning',
      'Timeline and milestone tracking',
      'Vendor and contractor coordination',
      'Risk assessment and mitigation',
      'Regular progress reporting',
    ],
  },
  {
    id: 'planning',
    title: 'Planning Works',
    description: 'Detailed planning works that form the roadmap for your construction project. We handle all aspects of pre-construction planning to ensure a smooth execution.',
    image: planningImg,
    features: [
      'Comprehensive site planning',
      'Timeline scheduling',
      'Resource allocation planning',
      'Zoning and permit coordination',
      'Feasibility studies',
      'Architectural planning integration',
    ],
  },
  {
    id: 'estimate',
    title: 'Estimate Preparations',
    description: 'Accurate estimate preparations are essential for budget management. We provide detailed cost breakdowns to ensure transparency and financial control.',
    image: estimateImg,
    features: [
      'Material cost estimation',
      'Labor cost breakdowns',
      'Detailed BOQ preparations',
      'Cost optimization suggestions',
      'Financial risk assessment',
      'Progress-based cost tracking',
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
        <section className="relative pt-32 pb-12 bg-primary text-primary-foreground overflow-hidden">
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
        <section className="py-12 bg-background">
          <div className="section-container">
            <div className="space-y-14">
              {services.map((service, index) => {
                const ServiceCard = () => {
                  const ref = useRef(null);
                  const isInView = useInView(ref, { once: true, margin: '-100px' });

                  return (
                    <div
                      ref={ref}
                      id={service.id}
                      className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
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

        \
      </main>
      <Footer />
    </div>
  );
};

export default Services;
