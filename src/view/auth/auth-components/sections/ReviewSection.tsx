import React, { FC } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Section from "../layouts/Section";
import { H3 } from "../UI/Heading";
import Review from "../Review";
import { isWebpSupported } from "react-image-webp/dist/utils";

import reviews from "../../auth-assets/data/reviews.json";
import avatar1 from "../../auth-assets/images/reviews/1.jpg";
import avatar2 from "../../auth-assets/images/reviews/2.jpg";
import avatar3 from "../../auth-assets/images/reviews/3.jpg";
import avatar4 from "../../auth-assets/images/reviews/4.jpg";
import avatar1Webp from "../../auth-assets/images/reviews/1.webp";
import avatar2Webp from "../../auth-assets/images/reviews/2.webp";
import avatar3Webp from "../../auth-assets/images/reviews/3.webp";
import avatar4Webp from "../../auth-assets/images/reviews/4.webp";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SwiperButton } from "../UI/Buttons";
import styled from "styled-components";
import { device } from "../../../../styles/auth/breackpoints";

const images = [
  { src: avatar1, webp: avatar1Webp },
  { src: avatar2, webp: avatar2Webp },
  { src: avatar3, webp: avatar3Webp },
  { src: avatar4, webp: avatar4Webp },
];

const Reviews = styled.div`
  width: 100%;
  font-size: 12px;
  margin: auto;

  @media (${device.mobileL}) {
    font-size: 11px;
  }
  @media (${device.tablet}) {
    font-size: 12px;
  }
  @media (${device.laptop}) {
    font-size: 12px;
    max-width: 1190px;
  }
  .swiper {
    padding: 0 51px;
  }

  .swiper-slide {
    height: auto;
    @media screen and (min-width: 425px) {
      max-width: 235px;
    }
    @media screen and (min-width: 768px) {
      max-width: 249px;
    }
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
            slidesPerView="auto"
            loopedSlides={2}
            loopAdditionalSlides={4}
            loop
            modules={[Navigation, Pagination, Scrollbar, A11y]}
          >
            <SwiperButton vector="left" />
            <SwiperButton vector="right" />
            {reviews.map((el) => (
              <SwiperSlide key={el.id}>
                <Review
                  img={isWebpSupported ? images[el.id].webp : images[el.id].src}
                  name={el.useName}
                  text={el.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Reviews>
    </Section>
  );
});

export default ReviewSection;
