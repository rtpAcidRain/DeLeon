import { FC, ReactNode } from 'react';
import styles from './section.module.scss';

type Props = {
  children: ReactNode;
};

const Section: FC<Props> = ({ children }) => {
  return (
    <section className={styles.section}>
      {/* <i className={styles.pagination__buttonPrev}></i> */}
      {children}
      {/* <i className={styles.pagination__buttonNext}></i> */}
    </section>
  );
};

export default Section;
