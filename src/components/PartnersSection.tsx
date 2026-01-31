import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const partners = [
  { name: 'BuildMaster', initials: 'BM' },
  { name: 'ConstructPro', initials: 'CP' },
  { name: 'UrbanDev', initials: 'UD' },
  { name: 'QualityBuild', initials: 'QB' },
  { name: 'ArchDesign', initials: 'AD' },
  { name: 'SafeConstruct', initials: 'SC' },
];

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Trusted Partners
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
            Our Collaborations & Tie-ups
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center p-6 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">{partner.initials}</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">{partner.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
