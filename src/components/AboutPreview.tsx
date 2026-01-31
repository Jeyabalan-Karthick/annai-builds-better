import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import aboutTeamImage from '@/assets/about-team.jpg';

const highlights = [
  '15+ years of trusted experience',
  'Licensed and certified builders',
  'On-time project delivery',
  'Quality materials guaranteed',
];

const AboutPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-background">
      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={aboutTeamImage}
                alt="Annai Construction Team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 glass-card p-6 max-w-xs hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-amber-dark flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-foreground">15+</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Years of Trust</p>
                  <p className="text-sm text-muted-foreground">Building excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              About Annai Construction
            </span>
            <h2 className="section-heading mb-6">
              Crafting Spaces, Building Futures
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Annai Construction has been a cornerstone of quality construction in the region 
              for over 15 years. We specialize in residential and commercial projects, 
              delivering excellence from foundation to finish.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of skilled engineers and craftsmen work with dedication to 
              transform your vision into reality. With certifications from leading 
              construction authorities and partnerships with top material suppliers, 
              we ensure every project meets the highest standards.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold transition-all duration-300 hover:bg-primary/90 group"
            >
              Read More About Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
