import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { X } from 'lucide-react';
import heroImage from '@/assets/hero-construction.jpg';
import vmChathramHouse from '@/projects/WhatsApp Image 2026-03-19 at 11.08.25 PM.jpeg';
import tkcNagarHouse from '@/projects/WhatsApp Image 2026-03-19 at 11.09.21 PM.jpeg';
import tirunelveliModern from '@/projects/WhatsApp Image 2026-03-19 at 11.07.23 PM.jpeg';
import tirunelveliYellow from '@/projects/WhatsApp Image 2026-03-17 at 9.19.52 PM.jpeg';

const categories = ['All', 'Residential', 'Commercial', 'Apartments', 'Interior'];

const projects = [
  {
    id: 1,
    title: 'Sweet Home - VM Chathram',
    category: 'Residential',
    image: vmChathramHouse,
    description: 'A spacious 3,000 sq.ft residence built with focus on quality and aesthetics',
    year: '2024',
    area: '3,000 sq.ft',
  },
  {
    id: 2,
    title: 'Sweet Home - Tirunelveli (Modern)',
    category: 'Residential',
    image: tirunelveliModern,
    description: 'Contemporary architectural design with premium finishes and modern amenities',
    year: '2024',
    area: '2,500 sq.ft',
  },
  {
    id: 3,
    title: 'Sweet Home - Tirunelveli (Yellow House)',
    category: 'Residential',
    image: tirunelveliYellow,
    description: 'Vibrant and elegant family home optimized for comfort and durability',
    year: '2023',
    area: '2,800 sq.ft',
  },
  {
    id: 4,
    title: 'Sweet Home - TKC Nagar',
    category: 'Residential',
    image: tkcNagarHouse,
    description: 'A 2,050 sq.ft home optimized for space and minimal maintenance',
    year: '2024',
    area: '2,050 sq.ft',
  },
];

const Portfolio = () => {
  const heroRef = useRef(null);
  const galleryRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const galleryInView = useInView(galleryRef, { once: true, margin: '-100px' });

  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

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
                Our Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
                Projects That Speak Excellence
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Explore our collection of completed projects that showcase our commitment
                to quality construction and innovative design.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section className="py-12 bg-background" ref={galleryRef}>
          <div className="section-container">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={galleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${activeCategory === category
                      ? 'bg-gradient-to-r from-accent to-amber-dark text-accent-foreground'
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                    }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="inline-block px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-medium rounded-full mb-2">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-1">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-primary/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-card rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-primary/80 text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-8">
                  <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full mb-4">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl font-bold text-foreground font-display mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {selectedProject.description}
                  </p>
                  <div className="flex gap-8">
                    <div>
                      <p className="text-sm text-muted-foreground">Year</p>
                      <p className="font-semibold text-foreground">{selectedProject.year}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Area</p>
                      <p className="font-semibold text-foreground">{selectedProject.area}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
