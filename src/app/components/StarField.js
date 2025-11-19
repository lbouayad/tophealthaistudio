"use client";
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const StarField = () => {
  const [stars, setStars] = useState([]);
  const nextIdRef = useRef(0); // Persist nextId across renders

  const createStar = () => {
    const size = Math.random() * 3 + 1;
    const bottom = Math.random() * 100;
    const duration = Math.random() * 5 + 10;
    const id = nextIdRef.current++;

    const newStar = { id, size, bottom, duration };
    setStars(current => [...current, newStar]);

    setTimeout(() => {
      setStars(current => current.filter(star => star.id !== id));
    }, duration * 1000);
  };

  useEffect(() => {
    const interval = setInterval(createStar, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-transparent overflow-hidden z-10">
      <AnimatePresence>
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{
              x: 0,
              y: `${star.bottom}vh`,
              opacity: 0
            }}
            animate={{
              x: '100vw',
              y: `-100vh`,
              opacity: [0, 1, 1, 0]
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: star.duration,
              ease: "linear"
            }}
            className="absolute"
          >
            {/* Star tail */}
            <div
              className="absolute top-5"
              style={{
                width: `${star.size * 15}px`,
                height: `${star.size * 2}px`,
                background: `linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)`,
                transform: 'rotate(140deg)',
                transformOrigin: 'left center',
                borderRadius: '50%',
              }}
            />
            {/* Star core */}
            <div
              style={{
                width: `${star.size + 20}px`,
                height: `${star.size + 20}px`,
                borderRadius: '50%',
              }}
            >
              <Image
                src="/diamond.png"
                alt="Star"
                width={star.size + 20}
                height={star.size + 20}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default StarField;
