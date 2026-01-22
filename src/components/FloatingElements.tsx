import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingElements = () => {
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large geometric shape - left */}
      <motion.div
        className="absolute -left-20 top-1/4 w-60 h-60 border border-primary/10"
        style={{ y: y1, rotate }}
      />

      {/* Medium triangle - right */}
      <motion.div
        className="absolute right-10 top-1/3"
        style={{ y: y2 }}
      >
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path
            d="M60 10L110 100H10L60 10Z"
            stroke="hsl(0 80% 50% / 0.15)"
            strokeWidth="1"
          />
        </svg>
      </motion.div>

      {/* Small circle - center */}
      <motion.div
        className="absolute left-1/3 top-2/3 w-20 h-20 rounded-full border border-muted/20"
        style={{ y: y3 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Dotted grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>
    </div>
  );
};

export default FloatingElements;
