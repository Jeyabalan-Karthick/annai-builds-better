import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import portfolioHouse1 from '@/assets/portfolio-house-1.jpg';
import portfolioCommercial1 from '@/assets/portfolio-commercial-1.jpg';
import portfolioApartment1 from '@/assets/portfolio-apartment-1.jpg';
import portfolioInterior1 from '@/assets/portfolio-interior-1.jpg';
import portfolioHouse2 from '@/assets/portfolio-house-2.jpg';

const projects = [
  {
    image: portfolioHouse1,
    title: 'Modern Villa',
    category: 'Residential',
    size: 'large',
  },
  {
    image: portfolioCommercial1,
    title: 'Corporate Office',
    category: 'Commercial',
    size: 'small',
  },
  {
    image: portfolioApartment1,
    title: 'Luxury Apartments',
    category: 'Residential',
    size: 'small',
  },
  {
    image: portfolioInterior1,
    title: 'Interior Design',
    category: 'Interior',
    size: 'medium',
  },
  {
    image: portfolioHouse2,
    title: 'Premium Residence',
    category: 'Residential',
    size: 'medium',
  },
];

const PortfolioPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-background">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Our Work
          </span>
          <h2 className="section-heading mb-4">Featured Projects</h2>
          <p className="section-subheading">
            Explore our portfolio of completed residential and commercial projects
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`portfolio-item ${
                project.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
              } ${project.size === 'medium' ? 'lg:col-span-1' : ''}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className={`w-full object-cover ${
                  project.size === 'large' ? 'h-[500px]' : 'h-[250px]'
                }`}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-block px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-medium rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <button className="inline-flex items-center text-white/80 hover:text-white text-sm font-medium transition-colors">
                  View Details
                  <ExternalLink className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold transition-all duration-300 hover:bg-primary/90 group"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
