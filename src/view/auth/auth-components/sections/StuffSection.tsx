import React from "react";
import Section from "../layouts/Section";
import { H3 } from "../UI/Heading";

import {
  Ilya,
  Elizaveta,
  Evgeniy,
  Kirill,
  Azamat,
} from "../../auth-assets/images/team";

import styled from "styled-components";
import { device } from "../../../../styles/auth/breackpoints";
import { motion } from "framer-motion";

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

  .stuff__name {
    font-size: 1.5em;
  }

  .stuff__job {
    margin-top: 8px;
    font-size: 1.5em;
  }
`;

const Item = styled.div``;
const Avatar = styled.div`
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
  }
`;

const Text = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 0.9375em;
  margin-top: 1.13333333333em;

  line-height: 120%;

  @media (${device.laptop}) {
  }
`;

const StuffSection = React.memo(() => {
  return (
    <Section>
      <H3>Наша команда</H3>
      <Stuff
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <Item>
          <Avatar>
            <picture>
              <source srcSet={Ilya} type="image/webp" />
              <img
                loading="lazy"
                decoding="async"
                className="avatar__image"
                src={Ilya}
                alt="avatar"
              />
            </picture>
          </Avatar>
          <Text>
            <p className="stuff__name">Илья</p>
          </Text>
        </Item>
        <Item>
          <Avatar>
            <picture>
              <source srcSet={Kirill} type="image/webp" />
              <img
                loading="lazy"
                decoding="async"
                className="avatar__image"
                src={Kirill}
                alt="avatar"
              />
            </picture>
          </Avatar>
          <Text>
            <p className="stuff__name">Кирилл</p>
          </Text>
        </Item>
        <Item>
          <Avatar>
            <picture>
              <source srcSet={Elizaveta} type="image/webp" />
              <img
                loading="lazy"
                decoding="async"
                className="avatar__image"
                src={Elizaveta}
                alt="avatar"
              />
            </picture>
          </Avatar>
          <Text>
            <p className="stuff__name">Елизавета</p>
          </Text>
        </Item>

        <Item>
          <Avatar>
            <picture>
              <source srcSet={Evgeniy} type="image/webp" />
              <img
                loading="lazy"
                decoding="async"
                className="avatar__image"
                src={Evgeniy}
                alt="avatar"
              />
            </picture>
          </Avatar>
          <Text>
            <p className="stuff__name">Евгений</p>
          </Text>
        </Item>
        <Item>
          <Avatar>
            <picture>
              <source srcSet={Azamat} type="image/webp" />
              <img
                loading="lazy"
                decoding="async"
                className="avatar__image"
                src={Azamat}
                alt="avatar"
              />
            </picture>
          </Avatar>
          <Text>
            <p className="stuff__name">Азамат</p>
          </Text>
        </Item>
      </Stuff>
    </Section>
  );
});

export default StuffSection;
