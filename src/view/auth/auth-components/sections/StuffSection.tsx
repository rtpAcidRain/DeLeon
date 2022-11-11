import React from 'react';
import Section from '../layouts/Section';
import { H3 } from '../UI/Heading';

import {
  poopMoon,
  poopMoonDown,
  poopCloud,
  sec1,
  sec2,
  sec3,
  third1,
  third2,
  third3,
  fourth1,
  fourth2,
  fourth3,
  five1,
  five2,
  five3,
} from '../../auth-assets/images/stuff__poops';

import mayson from '../../auth-assets/images/stuff/mayson.png';
import sanechka from '../../auth-assets/images/stuff/sanechka.png';
import richardson from '../../auth-assets/images/stuff/richardson.png';
import dimchanskiy from '../../auth-assets/images/stuff/dimchanskiy.png';
import slava from '../../auth-assets/images/stuff/slava.png';
import maysonWebp from '../../auth-assets/images/stuff/mayson.webp';
import sanechkaWebp from '../../auth-assets/images/stuff/sanechka.webp';
import richardsonWebp from '../../auth-assets/images/stuff/richardson.webp';
import dimchanskiyWebp from '../../auth-assets/images/stuff/dimchanskiy.webp';
import slavaWebp from '../../auth-assets/images/stuff/slava.webp';

import styled from 'styled-components';
import { device } from '../../../../styles/auth/breackpoints';
import { motion } from 'framer-motion';

const Stuff = styled.div`
  font-size: 12px;
  max-width: 207px;
  width: 100%;
  margin: auto;
  display: grid;
  gap: 33px;
  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
    max-width: 447px;
  }
  @media (${device.tablet}) {
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    justify-content: space-evenly;

    max-width: 746px;
  }
  @media (${device.laptop}) {
    max-width: 926px;
  }
`;

const Item = styled.div``;
const Avatar = styled.div`
  background: linear-gradient(144.92deg, #b618de 14.11%, #375fbe 49.84%, #00fff0 87.08%);
  border-radius: 0.5em;
  width: 207px;
  height: 207px;
  position: relative;
  overflow: hidden;
  .avatar__image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
  }
  @media (${device.tablet}) {
    width: 220px;
    height: 220px;
    .avatar__image {
      height: 119%;
    }
  }
`;

const Text = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 0.9375em;
  margin-top: 1.13333333333em;

  line-height: 120%;
`;

const StuffSection = React.memo(() => {
  return (
    <Section>
      <H3>Наша команда</H3>
      <Stuff as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Item>
          <Avatar>
            <img
              className="avatar__poop"
              style={{ position: 'absolute', top: '10px', left: '0px' }}
              src={poopMoon}
              alt="avatar__poop"
            />

            <img
              className="avatar__poop"
              style={{ position: 'absolute', top: '110px', left: '0px' }}
              src={poopMoonDown}
              alt="avatar__poop"
            />

            <img
              className="avatar__poop"
              style={{ position: 'absolute', top: '23px', right: '18px' }}
              src={poopCloud}
              alt="avatar__poop"
            />
            <picture>
              <source srcSet={maysonWebp} type="image/webp" />
              <img className="avatar__image" src={mayson} alt="avatar" />
            </picture>
          </Avatar>
          <Text>
            <p className="stuff__name">Мэйсон</p>
            <p className="stuff__job">Аналитик</p>
          </Text>
        </Item>
        <Item>
          <Avatar>
            <img
              className="avatar__poop"
              style={{ position: 'absolute', top: '3px', right: '6px' }}
              src={sec1}
              alt="avatar__poop"
            />

            <img
              className="avatar__poop"
              style={{ position: 'absolute', top: '85px', right: '0px' }}
              src={sec2}
              alt="avatar__poop"
            />

            <img
              className="avatar__poop"
              style={{ position: 'absolute', top: '58px', left: '0' }}
              src={sec3}
              alt="avatar__poop"
            />

            <picture>
              <source srcSet={sanechkaWebp} type="image/webp" />
              <img className="avatar__image" src={sanechka} alt="avatar" />
            </picture>
          </Avatar>
          <Text>
            <p className="stuff__name">Александр</p>
            <p className="stuff__job">Менеджер</p>
          </Text>
        </Item>
        <Item>
          <Avatar>
            <img
              className="avatar__poop"
              style={{ position: 'absolute', top: '14px', right: '9px' }}
              src={third2}
              alt="avatar__poop"
            />

            <img
              className="avatar__poop"
              style={{ position: 'absolute', top: '54px', left: '0px' }}
              src={third1}
              alt="avatar__poop"
            />

            <img
              className="avatar__poop"
              style={{ position: 'absolute', top: '137px', right: '9px' }}
              src={third3}
              alt="avatar__poop"
            />

            <picture>
              <source srcSet={richardsonWebp} type="image/webp" />
              <img className="avatar__image" src={richardson} alt="avatar" />
            </picture>
          </Avatar>
          <Text>
            <p className="stuff__name">Ричард</p>
            <p className="stuff__job">Финансист</p>
          </Text>
        </Item>

        <Item>
          <Avatar>
            <img
              className="avatar__poop"
              style={{ position: 'absolute', top: '9px', left: '0px' }}
              src={fourth1}
              alt="avatar__poop"
            />

            <img
              className="avatar__poop"
              style={{ position: 'absolute', top: '106px', left: '0px' }}
              src={fourth3}
              alt="avatar__poop"
            />

            <img
              className="avatar__poop"
              style={{ position: 'absolute', top: '23px', right: '0' }}
              src={fourth2}
              alt="avatar__poop"
            />

            <picture>
              <source srcSet={dimchanskiyWebp} type="image/webp" />
              <img
                style={{ transform: 'translate(-38%, -50%)' }}
                className="avatar__image"
                src={dimchanskiy}
                alt="avatar"
              />
            </picture>
          </Avatar>
          <Text>
            <p className="stuff__name">Дмитрий</p>
            <p className="stuff__job">Комьюнити менеджер</p>
          </Text>
        </Item>
        <Item>
          <Avatar>
            <img
              className="avatar__poop"
              style={{ position: 'absolute', top: '29px', left: '9px' }}
              src={five1}
              alt="avatar__poop"
            />

            <img
              className="avatar__poop"
              style={{ position: 'absolute', top: '113px', left: '0px' }}
              src={five3}
              alt="avatar__poop"
            />

            <img
              className="avatar__poop"
              style={{ position: 'absolute', top: '53px', right: '0' }}
              src={five2}
              alt="avatar__poop"
            />

            <picture>
              <source srcSet={slavaWebp} type="image/webp" />
              <img className="avatar__image" src={slava} alt="avatar" />
            </picture>
          </Avatar>
          <Text>
            <p className="stuff__name">Владислав</p>
            <p className="stuff__job">Экономист</p>
          </Text>
        </Item>
      </Stuff>
    </Section>
  );
});

export default StuffSection;
