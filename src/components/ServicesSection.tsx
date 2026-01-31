import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Home,
  Building2,
  Paintbrush,
  Wrench,
  Layers,
  Key,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Construction',
    description: 'Custom homes built with precision, comfort, and your lifestyle in mind.',
  },
  {
    icon: Building2,
    title: 'Commercial Buildings',
    description: 'Modern commercial spaces designed for functionality and aesthetic appeal.',
  },
  {
    icon: Paintbrush,
    title: 'Renovation & Remodeling',
    description: 'Transform existing spaces with our expert renovation services.',
  },
  {
    icon: Wrench,
    title: 'Interior Works',
    description: 'Complete interior solutions from design to execution.',
  },
  {
    icon: Layers,
    title: 'Structural Works',
    description: 'Strong foundations and structural integrity for lasting buildings.',
  },
  {
    icon: Key,
    title: 'Turnkey Projects',
    description: 'End-to-end construction solutions, ready to move in.',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-secondary/30">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            What We Offer
          </span>
          <h2 className="section-heading mb-4">Our Services</h2>
          <p className="section-subheading">
            Comprehensive construction solutions tailored to meet your unique needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 card-hover group"
            >
              <div className="service-icon mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center text-accent font-medium text-sm group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent to-amber-dark text-accent-foreground rounded-full font-semibold transition-all duration-300 hover:shadow-glow-lg group"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
