import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Car, Gauge, Wrench, Cpu, File as Oil, Battery, Cog } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: delay }}
      className="service-card"
    >
      <div className="text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: <Gauge size={36} />,
      title: 'Компьютерная диагностика',
      description: 'Профессиональная диагностика электронных систем автомобиля с использованием современного оборудования.'
    },
    {
      icon: <Oil size={36} />,
      title: 'Замена масла и фильтров',
      description: 'Качественная замена масла и всех необходимых фильтров с использованием оригинальных запчастей.'
    },
    {
      icon: <Wrench size={36} />,
      title: 'Ремонт двигателя',
      description: 'Капитальный и текущий ремонт двигателей любой сложности с гарантией на выполненные работы.'
    },
    {
      icon: <Cpu size={36} />,
      title: 'Чип-тюнинг',
      description: 'Профессиональный чип-тюнинг для улучшения характеристик вашего автомобиля.'
    },
    {
      icon: <Battery size={36} />,
      title: 'Электрика и электроника',
      description: 'Диагностика и ремонт электрических и электронных систем автомобиля.'
    },
    {
      icon: <Car size={36} />,
      title: 'Кузовной ремонт',
      description: 'Профессиональный кузовной ремонт и покраска автомобилей любых марок.'
    },
    {
      icon: <Cog size={36} />,
      title: 'Ремонт ходовой части',
      description: 'Диагностика и ремонт подвески, тормозной системы и других элементов ходовой части.'
    }
  ];

  return (
    <section id="services" className="section bg-secondary-dark py-20">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="title mx-auto">Наши услуги</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Предоставляем полный спектр услуг по ремонту и обслуживанию автомобилей любых марок.
            Наши мастера имеют большой опыт работы и используют современное оборудование.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;