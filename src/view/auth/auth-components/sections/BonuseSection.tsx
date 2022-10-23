import React from 'react';
import Section from '../layouts/Section';
import Heading from '../UI/Heading';

import bonuseBakc from '../../auth-assets/images/bonuseBack.svg';

type Props = {};

const BonuseSection: React.FC<Props> = React.memo((props: Props) => {
  return (
    <Section>
      <Heading>Бонусы</Heading>
      <div className="bonuses">
        <div className="bonuse__container bonuse__container--first">
          <img className="bonuse__back" src={bonuseBakc} alt="bonuse" />
          <p className="bonuse__text">
            <span className="text__span">Подарки</span> для лучших учеников от спонсоров
          </p>
        </div>
        <div className="bonuse__container bonuse__container--middle">
          <img className="bonuse__back" src={bonuseBakc} alt="bonuse" />
          <p className="bonuse__text">
            Доступ к <span className="text__span">закрытому клубу выпускников</span> , возможность
            развиваться с единомышленниками
          </p>
        </div>
        <div className="bonuse__container bonuse__container--last">
          <img className="bonuse__back" src={bonuseBakc} alt="bonuse" />
          <p className="bonuse__text">
            {' '}
            По окончанию курса <span className="text__span">NFT сертификат школы</span> в подарок!
          </p>
        </div>
      </div>
    </Section>
  );
});

export default BonuseSection;
