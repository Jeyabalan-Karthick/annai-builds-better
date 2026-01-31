import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Building2, GitBranch, Award } from 'lucide-react';

const stats = [
  {
    icon: Calendar,
    number: '15+',
    label: 'Years Experience',
    description: 'Industry expertise',
  },
  {
    icon: Building2,
    number: '250+',
    label: 'Projects Completed',
    description: 'Successful deliveries',
  },
  {
    icon: GitBranch,
    number: '6+',
    label: 'Branches',
    description: 'Across the region',
  },
  {
    icon: Award,
    number: '100%',
    label: 'Certified Builder',
    description: 'Licensed & trusted',
  },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-secondary/50">
      <div className="section-container" ref={ref}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="stats-card"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-accent" />
              </div>
              <p className="text-4xl font-bold text-primary font-display mb-1">
                {stat.number}
              </p>
              <p className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
