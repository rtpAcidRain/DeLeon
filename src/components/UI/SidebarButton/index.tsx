import { FC, ReactNode } from 'react';
import styles from './sidebarButton.module.scss';

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

const SidebarButton: FC<Props> = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.root}>
      {children}
    </button>
  );
};

export default SidebarButton;
