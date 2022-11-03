export const RightDec = ({ color1, id }) => {
  return (
    <svg
      width="55"
      height="115"
      viewBox="0 0 55 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M52 0H51V108H51.5C49.567 108 48 109.567 48 111.5C48 113.433 49.567 115 51.5 115C53.433 115 55 113.433 55 111.5C55 109.567 53.433 108 51.5 108H52V0Z"
        fill={`url(#paint0_linear_308_${id})`}
        fillOpacity="0.3"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 0H27V83H27.5C25.567 83 24 84.567 24 86.5C24 88.433 25.567 90 27.5 90C29.433 90 31 88.433 31 86.5C31 84.567 29.433 83 27.5 83H28V0Z"
        fill={`url(#paint1_linear_308_${id})`}
        fillOpacity="0.3"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 0H3V56H3.5C1.567 56 0 57.567 0 59.5C0 61.433 1.567 63 3.5 63C5.433 63 7 61.433 7 59.5C7 57.567 5.433 56 3.5 56H4V0Z"
        fill={`url(#paint2_linear_308_${id})`}
        fillOpacity="0.3"
      />
      <defs>
        <linearGradient
          id={`paint0_linear_308_${id}`}
          x1="23.5"
          y1="70"
          x2="74.5"
          y2="70"
          gradientUnits="userSpaceOnUse">
          <stop stopColor={color1} />
          <stop offset="1" stopColor={color1} />
        </linearGradient>
        <linearGradient
          id={`paint1_linear_308_${id}`}
          x1="-0.499998"
          y1="45"
          x2="50.5"
          y2="45"
          gradientUnits="userSpaceOnUse">
          <stop stopColor={color1} />
          <stop offset="1" stopColor={color1} />
        </linearGradient>
        <linearGradient
          id={`paint2_linear_308_${id}`}
          x1="-24.5"
          y1="18"
          x2="26.5"
          y2="18"
          gradientUnits="userSpaceOnUse">
          <stop stopColor={color1} />
          <stop offset="1" stopColor={color1} />
        </linearGradient>
      </defs>
    </svg>
  );
};
