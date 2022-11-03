import React from 'react';
import Section from '../layouts/Section';
import { H3 } from '../UI/Heading';

import { AirLinesIco, ApploIco, X5Ico } from '../../auth-assets/svg/icons';

type Props = {};

const Partners: React.FC<Props> = React.memo((props: Props) => {
  return (
    <Section>
      <H3>Партнеры</H3>
      <div className="partners">
        <div className="partner__back plate">
          <div className="partner__front plate">
            <ApploIco className="partner__logo" />
          </div>
        </div>
        <div className="partner__back plate">
          <div className="partner__front plate">
            <AirLinesIco className="partner__logo" />
          </div>
        </div>
        <div className="partner__back plate">
          <div className="partner__front plate">
            <X5Ico className="partner__logo" />
          </div>
        </div>
      </div>
    </Section>
  );
});

export default Partners;
