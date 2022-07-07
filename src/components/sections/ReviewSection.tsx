import React, { FC } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Section from '../layouts/Section';
import Heading from '../UI/Heading';
import Review from '../Review';

import reviews from '../../assets/data/reviews.json';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperButton from '../UI/SwiperButton';

const ReviewSection: FC = React.memo(() => {
  return (
    <Section>
      <Heading>Отзывы</Heading>
      <div className="reviews">
        <div className="reviews__items">
          <Swiper
            id="reviewSwiper"
            spaceBetween={30}
            slidesPerView={4}
            loopAdditionalSlides={4}
            loop
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            style={{ padding: '0  52px' }}>
            <SwiperButton vector="left" />
            <SwiperButton vector="right" />
            {reviews.map((el) => (
              <SwiperSlide key={el.id}>
                <Review img={el.img} name={el.useName} text={el.description} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Section>
  );
});

export default ReviewSection;
