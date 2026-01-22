import { motion } from 'framer-motion';

const MarqueeSection = () => {
  const items = ['ABNORMAL', '•', 'FASHION', '•', 'STREETWEAR', '•', 'AVANT-GARDE', '•'];
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <section className="relative py-12 overflow-hidden border-y border-muted">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
      >
        {repeatedItems.map((item, index) => (
          <span
            key={index}
            className={`inline-block font-display text-4xl md:text-6xl font-bold uppercase mx-8 ${
              item === '•' ? 'text-primary' : 'text-foreground/20'
            }`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default MarqueeSection;
