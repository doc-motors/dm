import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TestimonialProps {
  name: string;
  car: string;
  text: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, car, text, rating }) => {
  return (
    <div className="bg-secondary p-6 rounded-lg relative shadow-lg border-t-2 border-primary-dark h-full">
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < rating ? 'text-primary fill-primary' : 'text-gray-500'} 
          />
        ))}
      </div>
      
      <p className="text-gray-300 mb-4 relative z-10">{text}</p>
      
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-400">{car}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      name: 'Алексей В.',
      car: 'Toyota Camry',
      text: 'Отличный сервис! Быстро нашли и устранили проблему с электроникой, сэкономили мне много времени и денег. Рекомендую всем.',
      rating: 5
    },
    {
      name: 'Ирина М.',
      car: 'Kia Sportage',
      text: 'Обслуживаю свой автомобиль здесь уже несколько лет. Всегда качественно, быстро и без лишних расходов. Мастера вежливые и знают своё дело.',
      rating: 5
    },
    {
      name: 'Сергей Д.',
      car: 'Volkswagen Passat',
      text: 'Обратился с проблемой в ходовой части, которую не могли решить в двух других сервисах. Здесь нашли причину быстро и устранили. Спасибо!',
      rating: 4
    },
    {
      name: 'Наталья К.',
      car: 'Hyundai Solaris',
      text: 'Очень довольна обслуживанием. Всегда объясняют, что и зачем делают, не навязывают лишних услуг. Цены адекватные, работы выполняют в срок.',
      rating: 5
    },
    {
      name: 'Дмитрий Л.',
      car: 'BMW X5',
      text: 'Профессиональный подход и современное оборудование. Обслуживаю здесь свой BMW и полностью доволен. Отдельное спасибо за детальную диагностику!',
      rating: 5
    },
    {
      name: 'Михаил Г.',
      car: 'Audi A6',
      text: 'Единственный сервис в городе, которому доверяю свою машину. Высокий уровень обслуживания и честный подход к клиентам.',
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="section py-20 bg-secondary">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="title mx-auto">Отзывы клиентов</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Мы ценим доверие наших клиентов и стремимся оправдать их ожидания.
            Вот что говорят о нас те, кто уже воспользовался нашими услугами.
          </p>
        </motion.div>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Testimonial {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;