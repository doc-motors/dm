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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.5234526872387!2d36.19057115!3d51.7307595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x412f0394b5770c0d%3A0x3f1c8f7c2c1c8f7c!2sDoc%20Motors!5e0!3m2!1sen!2sru!4v1625123456789!5m2!1sen!2sru"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;