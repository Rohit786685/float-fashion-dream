import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const stats = [
    { number: '50+', label: 'Collections' },
    { number: '120K', label: 'Customers' },
    { number: '15', label: 'Countries' },
    { number: '2019', label: 'Est.' },
  ];

  return (
    <section id="about" ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-10 w-72 h-72 border border-primary/10 rotate-45" />
        <div className="absolute bottom-1/4 right-10 w-48 h-48 border border-muted/20 rotate-12" />
      </motion.div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div ref={textRef} style={{ opacity }}>
            <motion.span
              className="inline-block text-primary font-body text-sm uppercase tracking-[0.3em] mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              About Us
            </motion.span>

            <motion.h2
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Redefining
              <br />
              <span className="gradient-text-accent">Fashion Culture</span>
            </motion.h2>

            <motion.p
              className="font-body text-lg text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              ABNORMAL FASHION isn't just a brand—it's a movement. We challenge 
              conventional aesthetics, blending futuristic design with streetwear 
              sensibility. Every piece is a statement, crafted for those who dare 
              to stand out.
            </motion.p>

            <motion.p
              className="font-body text-muted-foreground leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Our geometric designs draw inspiration from architecture, technology, 
              and the raw energy of urban environments. We believe fashion should 
              be bold, unapologetic, and utterly abnormal.
            </motion.p>

            <motion.button
              className="px-10 py-4 border border-primary text-primary font-display text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Story
            </motion.button>
          </motion.div>

          {/* Right - Stats */}
          <motion.div 
            className="grid grid-cols-2 gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card p-8 text-center group hover:border-primary/30 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.span 
                  className="block font-display text-4xl md:text-5xl font-bold gradient-text-accent"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.span>
                <span className="block font-body text-sm uppercase tracking-widest text-muted-foreground mt-3">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
