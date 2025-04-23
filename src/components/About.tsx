import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const advantages = [
    'Команда высококвалифицированных специалистов',
    'Современное диагностическое оборудование',
    'Использование качественных запчастей',
    'Гарантия на все виды работ',
    'Комфортная зона ожидания для клиентов',
    'Прозрачное ценообразование без скрытых платежей'
  ];

  return (
    <section id="about" className="section py-20 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 lg:w-72 lg:h-72 bg-primary opacity-20 rounded-lg"></div>
              <img 
                src="https://i.ibb.co/B5v5JSXH/CEei-P4-QV5-W8-removebg-preview-1.png" 
                alt="Doc Motors" 
                className="relative z-10 w-full h-auto object-contain p-12 bg-secondary-light rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="title">О нас</h2>
            <p className="mb-6 text-gray-300">
              <strong className="text-primary">Doc Motors</strong> — профессиональный автосервис в Курске, предоставляющий полный спектр услуг по ремонту и обслуживанию автомобилей. Мы специализируемся на диагностике, ремонте и обслуживании автомобилей любых марок и моделей.
            </p>
            <p className="mb-8 text-gray-300">
              Наша цель — обеспечить высочайшее качество ремонта и сервиса по доступным ценам. Мы гордимся качеством нашей работы и стремимся превзойти ожидания каждого клиента.
            </p>
            
            <h3 className="text-xl font-bold mb-4">Почему выбирают нас:</h3>
            <ul className="space-y-3 mb-8">
              {advantages.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <a href="#contact" className="btn btn-primary">Связаться с нами</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;