import { isDesktop } from 'react-device-detect';
import { useMediaQuery } from 'react-responsive';
import { size } from '../../styles/auth/breackpoints';

import DesktopComponent from './auth-components/DesktopComponent';
// import { isMobile, isTablet } from 'react-device-detect';
import MobileComponent from './auth-components/MobileComponent';

function Auth() {
  const isDesktopLay = useMediaQuery({ minWidth: size.laptop });

  return isDesktop && isDesktopLay ? <DesktopComponent /> : <MobileComponent />;
}

export default Auth;
