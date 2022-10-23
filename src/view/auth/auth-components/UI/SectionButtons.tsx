import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const SectionButtons: FC<Props> = ({ children, ...props }) => {
  return (
    <button {...props} className="button__section">
      {children}
    </button>
  );
};

export default SectionButtons;
