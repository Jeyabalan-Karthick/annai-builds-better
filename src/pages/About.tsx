import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle2, Target, Eye, Award, Users, Heart, Shield } from 'lucide-react';
import aboutTeamImage from '@/assets/about-team.jpg';
import heroImage from '@/assets/hero-construction.jpg';

const timeline = [
  { year: '2009', title: 'Company Founded', description: 'Started with a vision to build quality homes' },
  { year: '2012', title: 'First Major Project', description: 'Completed our first commercial complex' },
  { year: '2015', title: 'Expansion', description: 'Opened branches in 3 new cities' },
  { year: '2018', title: 'ISO Certification', description: 'Achieved ISO 9001:2015 certification' },
  { year: '2021', title: '200+ Projects', description: 'Milestone of 200 completed projects' },
  { year: '2024', title: 'Industry Leader', description: 'Recognized as top construction company' },
];

const values = [
  { icon: Shield, title: 'Quality', description: 'Uncompromising standards in every project' },
  { icon: Users, title: 'Teamwork', description: 'Collaborative approach to success' },
  { icon: Heart, title: 'Integrity', description: 'Honest and transparent practices' },
  { icon: Award, title: 'Excellence', description: 'Striving for the best always' },
];

const certifications = [
  'ISO 9001:2015 Certified',
  'RERA Registered Builder',
  'Member - Indian Construction Association',
  'Green Building Council Certified',
  'Safety Excellence Award 2023',
  'Best Builder Award - Tamil Nadu 2022',
];

const About = () => {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const timelineRef = useRef(null);
  const valuesRef = useRef(null);
  const certRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const missionInView = useInView(missionRef, { once: true, margin: '-100px' });
  const timelineInView = useInView(timelineRef, { once: true, margin: '-100px' });
  const valuesInView = useInView(valuesRef, { once: true, margin: '-100px' });
  const certInView = useInView(certRef, { once: true, margin: '-100px' });

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
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
                Building Trust Since 2009
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                For over 15 years, Annai Construction has been transforming visions into reality. 
                We are a certified and trusted construction company dedicated to delivering excellence 
                in every project we undertake.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="py-24 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={aboutTeamImage}
                  alt="Annai Construction Team"
                  className="w-full h-[500px] object-cover rounded-3xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="section-heading mb-6">Who We Are</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Annai Construction is a premier construction company headquartered in Chennai, 
                  with branches across Tamil Nadu. We specialize in residential, commercial, and 
                  industrial construction projects.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our team comprises experienced engineers, architects, and skilled craftsmen who 
                  share a common goal: to build structures that stand the test of time. We've 
                  successfully completed over 250 projects, ranging from individual homes to 
                  large commercial complexes.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {['250+ Projects Completed', '15+ Years Experience', '6+ Branches', '100+ Team Members'].map((stat, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="font-medium text-foreground">{stat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-24 bg-secondary/30" ref={missionRef}>
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="glass-card p-10"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-amber-dark flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground font-display mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver exceptional construction services that exceed client expectations, 
                  using innovative techniques, quality materials, and sustainable practices. 
                  We aim to build not just structures, but lasting relationships with our clients.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card p-10"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-slate-medium flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground font-display mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and preferred construction company in South India, 
                  known for quality, reliability, and innovation. We envision shaping skylines 
                  and communities through our commitment to excellence.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-background" ref={timelineRef}>
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Our Journey
              </span>
              <h2 className="section-heading">Experience Timeline</h2>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="glass-card p-6 inline-block">
                        <p className="text-accent font-bold text-xl mb-2">{item.year}</p>
                        <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-accent flex-shrink-0 hidden md:block" />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-primary text-primary-foreground" ref={valuesRef}>
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                What We Stand For
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display">Our Core Values</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-primary-foreground/70 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 bg-background" ref={certRef}>
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={certInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Our Credentials
              </span>
              <h2 className="section-heading mb-4">Certifications & Awards</h2>
              <p className="section-subheading">
                Recognized for excellence and commitment to quality
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={certInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-6 glass-card"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <p className="font-medium text-foreground">{cert}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
