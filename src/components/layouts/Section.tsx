import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Section: FC<Props> = React.memo(({ children }) => {
  return (
    <section className="section">
      <div className="container">{children}</div>
    </section>
  );
});

export default Section;
