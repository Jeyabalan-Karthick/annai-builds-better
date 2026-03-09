import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { number: '34+', label: 'Years Experience' },
  { number: '100+', label: 'Projects Completed' },
  { number: '3+', label: 'Districts Covered' },
  { number: '100%', label: 'Certified Builder' },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="py-6 bg-primary">
      <div className="section-container" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`flex flex-col items-center py-4 px-2 ${index < stats.length - 1
                  ? 'lg:border-r lg:border-white/15'
                  : ''
                } ${index % 2 === 0 ? 'border-r border-white/15 lg:border-r' : 'lg:border-r'} ${index < 2 ? 'border-b border-white/15 lg:border-b-0' : ''
                }`}
            >
              <p className="text-2xl md:text-3xl font-bold text-white font-display">
                {stat.number}
              </p>
              <p className="text-xs md:text-sm text-white/70 mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
