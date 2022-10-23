import React, { FC } from 'react';
import { useSwiper } from 'swiper/react';

interface Props {
  vector: 'left' | 'right';
}

const SwiperButton: FC<Props> = React.memo(({ vector }) => {
  const swiper = useSwiper();

  return (
    <button
      type="button"
      className={`button__scroll button__scroll--${vector}`}
      onClick={vector === 'left' ? () => swiper.slidePrev() : () => swiper.slideNext()}>
      <svg
        width="45"
        height="26"
        viewBox="0 0 45 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M42.3932 24.8034C40.964 25.518 39.2379 25.2379 38.108 24.108L26.0355 12.0355C24.0829 10.0829 20.9171 10.0829 18.9645 12.0355L6.89199 24.108C5.76212 25.2379 4.036 25.518 2.6068 24.8034C0.340439 23.6702 -0.149723 20.6497 1.64199 18.858L18.9645 1.53553C20.9171 -0.417088 24.0829 -0.417088 26.0355 1.53553L43.358 18.858C45.1497 20.6497 44.6596 23.6702 42.3932 24.8034Z"
          fill="url(#paint0_linear_64_213)"
          fillOpacity="0.6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_64_213"
            x1="5"
            y1="12"
            x2="22.5"
            y2="-2"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#0FD5F0" />
            <stop offset="0.994792" stopColor="#375FBE" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
});

export default SwiperButton;
