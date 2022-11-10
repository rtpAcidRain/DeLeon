import { motion } from 'framer-motion';
import React from 'react';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';
import { device, size } from '../../../../styles/auth/breackpoints';
import Section from '../layouts/Section';
import { H3 } from '../UI/Heading';

type Props = {};

const Bonuses = styled.div`
  font-size: 12px;
  max-width: 230px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 30px;
  margin: auto;
  @media (${device.mobileM}) {
    font-size: 13px;
    max-width: ${size.mobileM}px;
  }
  @media (${device.tablet}) {
    grid-template-columns: 1fr 1fr 1fr;

    max-width: ${size.tablet}px;
  }

  @media (${isMobile ? device.laptop : 'min-width: 1302px'}) {
    font-size: 20px;
    max-width: 1134px;
  }
`;

const Bonuse = styled.div`
  display: flex;
  max-width: 350px;
  align-items: center;
  width: 100%;
  margin: auto;
  justify-content: center;
  padding: 0.2em;
  border-radius: 1.1em;
  height: 12.15em;
  :nth-child(1) {
    background: linear-gradient(
      89.45deg,
      rgba(32, 140, 134, 1) 10.89%,
      rgba(139, 27, 120, 1) 90.63%
    );
  }
  :nth-child(2) {
    background: linear-gradient(
      89.45deg,
      rgba(247, 147, 27, 1) 10.89%,
      rgba(138, 29, 121, 1) 90.63%
    );
  }
  :nth-child(3) {
    background: linear-gradient(
      89.45deg,
      rgba(255, 255, 255, 1) 10.89%,
      rgba(138, 29, 121, 1) 90.63%
    );
  }
`;

const Text = styled.p`
  border-radius: 1.1em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  line-height: 120%;
  text-align: center;
  position: relative;
  color: #ffffff;
  background: linear-gradient(89.45deg, rgba(5, 7, 36, 1) 10.89%, rgba(61, 23, 55, 1) 90.63%);
  width: 100%;
  height: 100%;
`;

const BonuseSection: React.FC<Props> = React.memo((props: Props) => {
  return (
    <Section>
      <H3>Бонусы</H3>
      <Bonuses
        as={motion.div}
        variants={{
          hidden: { opacity: 1, scale: 0 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}>
        <Bonuse
          as={motion.div}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
            },
          }}>
          <Text>
            Подарки для лучших <br /> учеников от спонсоров
          </Text>
        </Bonuse>
        <Bonuse
          as={motion.div}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
            },
          }}>
          <Text>
            Доступ к закрытому клубу выпускников , возможность развиваться с единомышленниками
          </Text>
        </Bonuse>
        <Bonuse
          as={motion.div}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
            },
          }}>
          <Text>По окончанию курса NFT сертификат школы в подарок!</Text>
        </Bonuse>
      </Bonuses>
    </Section>
  );
});

export default BonuseSection;
