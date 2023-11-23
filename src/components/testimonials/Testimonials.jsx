import React from 'react'
import './testimonials.css'

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const testimonialData = [
  {
    avatar:   "https://media.licdn.com/dms/image/D4D03AQFKcAZyu0smIQ/profile-displayphoto-shrink_800_800/0/1668844639693?e=1706140800&v=beta&t=ndwGAKy0w-XQF5B1YJNbWHPUPG8MpW0aS7oegQbyM08",
    name:     "Emmanuel BITHIBALY",
    review:   "Developpeur Front-end"
  },
  {
    avatar:   "https://media.licdn.com/dms/image/D4E03AQHM_Xe7-lUxvw/profile-displayphoto-shrink_800_800/0/1667844309525?e=1706140800&v=beta&t=Nj83iZZxZ8heijLa3xXfPA8DeV1l2v_m6Qnn_FPAxtU",
    name:     "David FORGO",
    review:   "Developpeur Back-end"
  },
  {
    avatar:   "https://media.licdn.com/dms/image/C4E03AQFJ-hwTZYt3Ag/profile-displayphoto-shrink_800_800/0/1662396147941?e=1706140800&v=beta&t=B6Wz5xHyTa5F7dc-znjvQQQVLf4r9aAHtZvNkmsPiAM",
    name:     "Gildas SAMNE",
    review:   "Developpeur Web"
  },
  {
    avatar:   "https://media.licdn.com/dms/image/D4E03AQGjNZTbb8ITAA/profile-displayphoto-shrink_800_800/0/1690023492095?e=1706140800&v=beta&t=t0OGq_s4QJ0bOZcYq_i5K7RZiNNtZcad17u61w_RLHU",
    name:     "Abourahim RABO",
    review:   "Devellopeur Mobile"
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5 className='text-light'>Avis des Partenaires</h5>
      <h2 className='text-light'>Témoignages</h2>
      <Swiper className="container testimonials__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          testimonialData.map(({avatar, name, review}, idex) => {
            return (
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials