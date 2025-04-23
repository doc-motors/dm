import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Gallery: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const images = [
    {
      src: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg",
      alt: "Диагностика двигателя"
    },
    {
      src: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg",
      alt: "Ремонт ходовой части"
    },
    {
      src: "https://images.pexels.com/photos/1409999/pexels-photo-1409999.jpeg",
      alt: "Ремонт электроники"
    },
    {
      src: "https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg",
      alt: "Кузовной ремонт"
    },
    {
      src: "https://images.pexels.com/photos/4489765/pexels-photo-4489765.jpeg",
      alt: "Шиномонтаж"
    },
    {
      src: "https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg",
      alt: "Техническое обслуживание"
    }
  ];

  return (
    <section id="gallery" className="section py-20 bg-secondary-light">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="title mx-auto">Наша галерея</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Взгляните на наш современный автосервис и процесс работы наших специалистов.
            Мы гордимся качеством наших услуг и профессионализмом команды.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative overflow-hidden rounded-lg shadow-xl aspect-video group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold">{image.alt}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;