import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

const ContactItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  delay: number;
}> = ({ icon, title, content, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start"
    >
      <div className="bg-primary p-3 rounded-full text-white mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <div className="text-gray-300">{content}</div>
      </div>
    </motion.div>
  );
};

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" className="section py-20 bg-secondary-dark">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="title mx-auto">Контакты</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Свяжитесь с нами для консультации или записи на обслуживание.
            Мы всегда рады помочь нашим клиентам и ответить на все вопросы.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
            <ContactItem 
              icon={<MapPin size={24} />}
              title="Адрес"
              content={<>Промышленный пер., 9, д. Кукуевка, Курская область</>}
              delay={0}
            />
            
            <ContactItem 
              icon={<Phone size={24} />}
              title="Телефон"
              content={<a href="tel:+79192788777" className="hover:text-primary">+7 (919) 278-87-77</a>}
              delay={0.1}
            />
            
            <ContactItem 
              icon={<Clock size={24} />}
              title="Режим работы"
              content={<>Пн-Сб: 09:00–20:00<br />Вс: Выходной</>}
              delay={0.2}
            />
            
            <ContactItem 
              icon={<ExternalLink size={24} />}
              title="Социальные сети"
              content={
                <a 
                  href="https://vk.com/docmotors_ru" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primary"
                >
                  ВКонтакте
                  <ExternalLink size={16} className="ml-1" />
                </a>
              }
              delay={0.3}
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A4b54e8c6539cf4dfc75310063cdedf2ba78b75047044e5f1a90bcec450a2b2fb&amp;source=constructor" 
                width="100%" 
                height="100%" 
                frameBorder="0"
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;