import React from 'react';
import Heading from './UI/Heading';

import { shark, hamster, whale } from '../auth-assets/images/tarif';
import TarifStar from './UI/TarifStar';
import SectionButtons from './UI/SectionButtons';

export enum TarifENUMS {
  LOWERLEVEL = 'Хомяк',
  MIDDLELEVEL = 'Акула',
  MAXLEVEL = 'Кит',
}

type Props = {
  title: TarifENUMS;
  content: string[];
  prise: string;
  sale: string;
};

const Tarif: React.FC<Props> = React.memo(({ title, content, prise, sale }) => {
  return (
    <article
      className={`tarif tarif--${
        title === TarifENUMS.LOWERLEVEL
          ? 'lover'
          : title === TarifENUMS.MIDDLELEVEL
          ? 'middle'
          : 'max'
      } `}>
      <div className="tarif__container">
        <div className="tarif__header">
          <Heading level={4}>{title}</Heading>
          <div className="icon">
            <div className="icon-image__wrapper">
              <img
                src={
                  title === TarifENUMS.LOWERLEVEL
                    ? hamster
                    : title === TarifENUMS.MIDDLELEVEL
                    ? shark
                    : whale
                }
                alt="icon"
              />
            </div>
          </div>
        </div>
        <main className="tarif__main">
          <ul className="tarif__items">
            {content.map((el, i) => (
              <li key={i} className="tarif__item">
                <TarifStar
                  color={
                    title === TarifENUMS.LOWERLEVEL
                      ? '#375FBE'
                      : title === TarifENUMS.MIDDLELEVEL
                      ? '#B618DE'
                      : '#FFFD93'
                  }
                />{' '}
                <p className="text">{el}</p>
              </li>
            ))}
          </ul>
        </main>
        <footer className="tarif__footer">
          <p className="price">{title === TarifENUMS.MAXLEVEL ? prise : <s>{prise}</s>}</p>
          <p className="sale">{sale}</p>
          {title === TarifENUMS.MAXLEVEL ? (
            <SectionButtons disabled>SOLD OUT</SectionButtons>
          ) : (
            <SectionButtons>Купить</SectionButtons>
          )}
        </footer>
      </div>
    </article>
  );
});
export default Tarif;
