import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

const SidebarButton: FC<Props> = React.memo(({ children, ...props }) => {
  return (
    <button {...props} className="button__sidebar">
      {children}
    </button>
  );
});

export default SidebarButton;
