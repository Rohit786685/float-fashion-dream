import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-fashion.jpg';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const floatingElements = [
    { size: 100, x: '10%', y: '20%', delay: 0, duration: 6 },
    { size: 60, x: '80%', y: '30%', delay: 1, duration: 8 },
    { size: 80, x: '70%', y: '70%', delay: 2, duration: 7 },
    { size: 40, x: '20%', y: '80%', delay: 0.5, duration: 9 },
    { size: 50, x: '90%', y: '60%', delay: 1.5, duration: 6.5 },
  ];

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden noise-overlay">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background z-10" />
        <img
          src={heroImage}
          alt="ABNORMAL Fashion Hero"
          className="w-full h-full object-cover object-top"
        />
      </motion.div>

      {/* Floating Geometric Elements */}
      {floatingElements.map((el, index) => (
        <motion.div
          key={index}
          className="absolute border border-primary/30 rotate-45"
          style={{
            width: el.size,
            height: el.size,
            left: el.x,
            top: el.y,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [45, 50, 45],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <motion.span 
            className="inline-block px-4 py-2 border border-primary/50 text-primary font-body text-xs uppercase tracking-[0.3em] mb-6"
            animate={{ borderColor: ['hsl(0 80% 50% / 0.5)', 'hsl(0 80% 50% / 1)', 'hsl(0 80% 50% / 0.5)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            New Collection 2026
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter"
        >
          <span className="block text-foreground">BREAK</span>
          <span className="block gradient-text-accent animate-text-glow">THE NORM</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 font-body text-lg md:text-xl text-muted-foreground max-w-xl"
        >
          Where fashion defies convention. Explore avant-garde designs 
          that push boundaries and redefine style.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex gap-6"
        >
          <motion.button
            className="group relative px-10 py-4 bg-primary text-primary-foreground font-display text-sm uppercase tracking-widest overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore Collection</span>
            <motion.div
              className="absolute inset-0 bg-foreground"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          <motion.button
            className="px-10 py-4 border border-foreground/30 text-foreground font-display text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Watch Film
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
