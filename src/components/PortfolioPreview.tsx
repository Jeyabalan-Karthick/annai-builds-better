import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import vmChathramHouse from '@/projects/WhatsApp Image 2026-03-19 at 11.08.25 PM.jpeg';
import tkcNagarHouse from '@/projects/WhatsApp Image 2026-03-19 at 11.09.21 PM.jpeg';
import tirunelveliModern from '@/projects/WhatsApp Image 2026-03-19 at 11.07.23 PM.jpeg';
import tirunelveliYellow from '@/projects/WhatsApp Image 2026-03-17 at 9.19.52 PM.jpeg';

const projects = [
  {
    image: vmChathramHouse,
    title: 'Sweet Home - VM Chathram',
    category: 'Residential',
    description: 'A spacious 3,000 sq.ft residence built with focus on quality and aesthetics',
  },
  {
    image: tirunelveliModern,
    title: 'Sweet Home - Tirunelveli (Modern)',
    category: 'Residential',
    description: 'Contemporary architectural design with premium finishes and modern amenities',
  },
  {
    image: tirunelveliYellow,
    title: 'Sweet Home - Tirunelveli ',
    category: 'Residential',
    description: 'Vibrant and elegant family home optimized for comfort and durability',
  },
  {
    image: tkcNagarHouse,
    title: 'Sweet Home - TKC Nagar',
    category: 'Residential',
    description: 'A 2,050 sq.ft home optimized for space and minimal maintenance',
  },
];

const PortfolioPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-12 bg-background">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
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
