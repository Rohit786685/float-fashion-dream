import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import collection1 from '@/assets/collection-1.jpg';
import collection2 from '@/assets/collection-2.jpg';
import collection3 from '@/assets/collection-3.jpg';

const collections = [
  {
    id: 1,
    title: 'VOID SERIES',
    category: 'Streetwear',
    price: '$299',
    image: collection1,
  },
  {
    id: 2,
    title: 'APEX JACKET',
    category: 'Outerwear',
    price: '$449',
    image: collection2,
  },
  {
    id: 3,
    title: 'NOIR COLLECTION',
    category: 'Accessories',
    price: '$189',
    image: collection3,
  },
];

const FeaturedCollection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="collections" ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <motion.span
              className="inline-block text-primary font-body text-sm uppercase tracking-[0.3em] mb-4"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Featured
            </motion.span>
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase">
              <span className="text-foreground">New</span>{' '}
              <span className="gradient-text">Arrivals</span>
            </h2>
          </div>
          <motion.a
            href="#"
            className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ x: 5 }}
          >
            <span className="font-body text-sm uppercase tracking-widest">View All</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.a>
        </motion.div>
      </div>

      {/* Collection Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((item, index) => (
            <CollectionCard key={item.id} item={item} index={index} isInView={isInView} />
          ))}
        </div>
      </div>

      {/* Floating decoration */}
      <motion.div
        className="absolute -right-20 top-1/2 w-40 h-40 border border-primary/20 rotate-45"
        animate={{
          y: [0, -30, 0],
          rotate: [45, 50, 45],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </section>
  );
};

interface CollectionCardProps {
  item: typeof collections[0];
  index: number;
  isInView: boolean;
}

const CollectionCard = ({ item, index, isInView }: CollectionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 * index }}
      className="group relative perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative overflow-hidden glass-card"
        whileHover={{ 
          rotateY: 5, 
          rotateX: -5,
          z: 50,
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <motion.img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
          
          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-primary/20 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="px-8 py-3 bg-foreground text-background font-display text-xs uppercase tracking-widest"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Quick View
            </motion.button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <span className="text-primary font-body text-xs uppercase tracking-widest">{item.category}</span>
          <h3 className="font-display text-xl font-bold mt-2 text-foreground">{item.title}</h3>
          <div className="flex items-center justify-between mt-4">
            <span className="font-display text-lg text-foreground">{item.price}</span>
            <motion.button
              className="w-10 h-10 rounded-full border border-muted flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Floating glow effect */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-lg blur-xl -z-10"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.article>
  );
};

export default FeaturedCollection;
