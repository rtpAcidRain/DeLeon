import React from 'react';
import Section from '../layouts/Section';
import { H3 } from '../UI/Heading';

type Props = {};

const BonuseSection: React.FC<Props> = React.memo((props: Props) => {
  return (
    <Section>
      <H3>Бонусы</H3>
      <div className="bonuses">
        <div className="bonuse__container bonuse__container--first">
          <p className="bonuse__text">
            Подарки для лучших <br /> учеников от спонсоров
          </p>
        </div>
        <div className="bonuse__container bonuse__container--middle">
          <p className="bonuse__text">
            Доступ к закрытому клубу выпускников , возможность развиваться с единомышленниками
          </p>
        </div>
        <div className="bonuse__container bonuse__container--last">
          <p className="bonuse__text">По окончанию курса NFT сертификат школы в подарок!</p>
        </div>
      </div>
    </Section>
  );
});

export default BonuseSection;
