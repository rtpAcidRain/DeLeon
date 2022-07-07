import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  level?: number;
};

const Heading: FC<Props> = React.memo(({ children, level }) => {
  if (level === 1) {
    return <h1 className="heading__h1">{children}</h1>;
  } else if (level === 2) {
    return <h2 className="heading__h2">{children}</h2>;
  } else if (level === 4) {
    return <h4 className="heading__h4">{children}</h4>;
  } else if (level === 5) {
    return <h5 className="heading__h5">{children}</h5>;
  } else if (level === 6) {
    return <h6 className="heading__h6">{children}</h6>;
  }
  return <h3 className="heading__h3">{children}</h3>;
});

export default Heading;
