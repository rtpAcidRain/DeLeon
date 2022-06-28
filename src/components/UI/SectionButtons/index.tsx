import { FC, ReactNode } from 'react';

import styles from './sectionButtons.module.scss';

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

const SectionButtons: FC<Props> = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.root}>
      {children}
    </button>
  );
};

export default SectionButtons;
