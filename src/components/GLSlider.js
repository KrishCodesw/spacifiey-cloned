import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  { img: 'https://thumbs.dreamstime.com/b/smart-assistant-interacts-family-members-modern-living-space-robot-engages-household-contemporary-room-filled-natural-366614870.jpg', title: 'slide 1' },
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCW6j0ZY8xlG7YolHE8qHGrIk5FbYW_Valcw&s', title: 'slide 2' },
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgcs9IwBbKNnXddbs_amk9AKcQTbOSR3hK3A&s', title: 'slide 3' },
//   { img: '/images/05.jpg', title: 'Avatar' },
];

export default function GLSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      loop
      style={{ width: '100%', maxWidth: '800px', margin: 'auto' }}
    >
      {slides.map((s, idx) => (
        <SwiperSlide key={idx}>
          <div className="swiper-slide-inner" style={{ position: 'relative' }}>
            <img src={s.img} alt={s.title} className="swiper-gl-image" />
            <div className="swiper-slide-content">
              <div className="swiper-slide-title">{s.title}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
