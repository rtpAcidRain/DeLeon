import React from 'react';

type Props = {
  color: string;
};

const TarifStar: React.FC<Props> = React.memo(({ color }) => {
  return (
    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.5 0C5.5 3.16875 4.05227 6 2 6C4.05227 6 5.5 8.83125 5.5 12C5.5 8.83125 6.94773 6 9 6C6.94773 6 5.5 3.16875 5.5 0Z"
        fill={color}
      />
      <g filter="url(#filter0_f_105_861)">
        <ellipse cx="5.49973" cy="6" rx="2.22727" ry="2.625" fill={color} />
      </g>
      <defs>
        <filter
          id="filter0_f_105_861"
          x="0.272461"
          y="0.375"
          width="10.4541"
          height="11.25"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_105_861" />
        </filter>
      </defs>
    </svg>
  );
});

export default TarifStar;
