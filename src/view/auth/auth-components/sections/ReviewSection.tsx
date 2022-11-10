import React, { FC } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Section from '../layouts/Section';
import { H3 } from '../UI/Heading';
import Review from '../Review';

import reviews from '../../auth-assets/data/reviews.json';
import avatar1 from '../../auth-assets/images/reviews/1.jpg';
import avatar2 from '../../auth-assets/images/reviews/2.jpg';
import avatar3 from '../../auth-assets/images/reviews/3.jpg';
import avatar4 from '../../auth-assets/images/reviews/4.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SwiperButton } from '../UI/Buttons';
import styled from 'styled-components';
import { device } from '../../../../styles/auth/breackpoints';

const images = [avatar1, avatar2, avatar3, avatar4];

const Reviews = styled.div`
  font-size: 7px;
  width: 100%;
  margin: auto;
  @media (${device.mobileS}) {
    font-size: 8px;
  }
  @media (${device.mobileM}) {
    font-size: 9px;
  }
  @media (${device.mobileL}) {
    font-size: 10px;
  }
  @media (${device.tablet}) {
    font-size: 11px;
  }
  @media (${device.laptop}) {
    font-size: 12px;
    max-width: 1190px;
  }
  .swiper {
    padding: 0 51px;
  }
`;

const ReviewSection: FC = React.memo(() => {
  return (
    <Section>
      <H3>Отзывы</H3>
      <Reviews>
        <div className="reviews__items">
          <Swiper
            id="reviewSwiper"
            spaceBetween={30}
            slidesPerView={'auto'}
            loopAdditionalSlides={2}
            loop
            modules={[Navigation, Pagination, Scrollbar, A11y]}>
            <SwiperButton vector="left" />
            <SwiperButton vector="right" />
            {reviews.map((el) => (
              <SwiperSlide key={el.id}>
                <Review img={images[el.id]} name={el.useName} text={el.description} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Reviews>
    </Section>
  );
});

export default ReviewSection;
