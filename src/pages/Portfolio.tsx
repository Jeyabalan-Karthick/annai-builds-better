import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { X } from 'lucide-react';
import portfolioHouse1 from '@/assets/portfolio-house-1.jpg';
import portfolioCommercial1 from '@/assets/portfolio-commercial-1.jpg';
import portfolioApartment1 from '@/assets/portfolio-apartment-1.jpg';
import portfolioInterior1 from '@/assets/portfolio-interior-1.jpg';
import portfolioHouse2 from '@/assets/portfolio-house-2.jpg';
import heroImage from '@/assets/hero-construction.jpg';

const categories = ['All', 'Residential', 'Commercial', 'Apartments', 'Interior'];

const projects = [
  {
    id: 1,
    title: 'Modern Villa - Chennai',
    category: 'Residential',
    image: portfolioHouse1,
    description: 'A contemporary 4-bedroom villa with modern amenities',
    year: '2023',
    area: '3,500 sq.ft',
  },
  {
    id: 2,
    title: 'Corporate Office Complex',
    category: 'Commercial',
    image: portfolioCommercial1,
    description: 'Multi-story office building with state-of-the-art facilities',
    year: '2023',
    area: '25,000 sq.ft',
  },
  {
    id: 3,
    title: 'Luxury Apartments',
    category: 'Apartments',
    image: portfolioApartment1,
    description: 'Premium residential apartment complex with 50 units',
    year: '2022',
    area: '45,000 sq.ft',
  },
  {
    id: 4,
    title: 'Contemporary Living Room',
    category: 'Interior',
    image: portfolioInterior1,
    description: 'Modern interior design for a luxury penthouse',
    year: '2023',
    area: '2,000 sq.ft',
  },
  {
    id: 5,
    title: 'Premium Residence',
    category: 'Residential',
    image: portfolioHouse2,
    description: 'Elegant family home with tropical landscaping',
    year: '2022',
    area: '4,200 sq.ft',
  },
  {
    id: 6,
    title: 'Industrial Facility',
    category: 'Commercial',
    image: heroImage,
    description: 'Large-scale industrial construction project',
    year: '2021',
    area: '100,000 sq.ft',
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
        <section className="py-24 bg-background" ref={galleryRef}>
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
                  className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeCategory === category
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
