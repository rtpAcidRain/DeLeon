import React from 'react';
import Section from '../layouts/Section';
import Heading from '../UI/Heading';

import appleLogo from '../../auth-assets/images/applelogo.svg';
import airlineLogo from '../../auth-assets/images/airlineslogo.svg';
import xfiveLogo from '../../auth-assets/images/x5logo.svg';

type Props = {};

const Partners: React.FC<Props> = React.memo((props: Props) => {
  return (
    <Section>
      <Heading>Партнеры</Heading>
      <div className="partners">
        <div className="partner__back plate">
          <div className="partner__front plate">
            <img className="partner__logo" src={appleLogo} alt="icon" />
          </div>
        </div>
        <div className="partner__back plate">
          <div className="partner__front plate">
            <img className="partner__logo" src={airlineLogo} alt="icon" />
          </div>
        </div>
        <div className="partner__back plate">
          <div className="partner__front plate">
            <img className="partner__logo" src={xfiveLogo} alt="icon" />
          </div>
        </div>
      </div>
    </Section>
  );
});

export default Partners;
