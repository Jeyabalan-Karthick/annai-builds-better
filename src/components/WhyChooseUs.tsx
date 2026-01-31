import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Clock, 
  Shield, 
  Truck, 
  BadgeDollarSign, 
  Users, 
  ThumbsUp 
} from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: '15+ Years Experience',
    description: 'Decades of expertise in construction excellence',
  },
  {
    icon: Shield,
    title: 'Quality Materials',
    description: 'Only premium, tested materials for lasting results',
  },
  {
    icon: Truck,
    title: 'On-Time Delivery',
    description: 'Projects completed within committed timelines',
  },
  {
    icon: BadgeDollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden costs, clear quotations upfront',
  },
  {
    icon: Users,
    title: 'Skilled Engineers',
    description: 'Expert professionals on every project',
  },
  {
    icon: ThumbsUp,
    title: 'Customer Satisfaction',
    description: '100% commitment to client happiness',
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Why Annai Construction
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6">
              Why Choose Us For Your Next Project?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              We combine experience, expertise, and dedication to deliver 
              construction projects that exceed expectations. Here's what sets us apart:
            </p>
            <div className="glass-card-dark p-6 inline-flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-amber-dark flex items-center justify-center">
                <span className="text-2xl font-bold text-accent-foreground">★</span>
              </div>
              <div>
                <p className="font-semibold text-primary-foreground">Certified Excellence</p>
                <p className="text-sm text-primary-foreground/70">ISO certified construction practices</p>
              </div>
            </div>
          </motion.div>

          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-primary-foreground/60">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
