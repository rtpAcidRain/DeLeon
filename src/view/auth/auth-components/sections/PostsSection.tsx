import React, { FC, memo, useRef } from "react";
import { H3 } from "../UI/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import Section from "../layouts/Section";
import styled from "styled-components";
import { device, size } from "../../../../styles/auth/breackpoints";
import logoMobile from "../../auth-assets/images/logo-mobile.png";
import coinWebp from "../../auth-assets/images/cryptocoin.webp";
import { motion } from "framer-motion";
import MediaQuery from "react-responsive";
import PostItem from "../UI/PostItem/PostItem";

import { ScrollButIco } from "../../auth-assets/svg/icons";
import { LeftButton, RightButton } from "../../../../styles/auth/Buttons";

import { Navigation, Pagination, Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PostWrapper = styled.div`
  font-size: 7px;
  border: 1px solid #375fbe;
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  border-radius: 0.5em;
  padding: 2.4375em 0.875em 0.875em 2.0625em;
  background: rgba(55, 95, 190, 0.3);

  .coin-image {
    position: absolute;
    left: -16%;
    bottom: 4%;
    height: 100%;
    max-height: 687px;
    width: 100%;
    max-width: 610px;
  }

  @media (min-height: 720px) and (max-height: 900px) and (min-width: 1024px) {
    height: 90%;
    margin-top: 10px;
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 0 14px;

  &::-webkit-scrollbar {
    width: 0;
  }

  @media (${device.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  @media (${device.laptop}) {
    height: 100%;
  }

  @media (${device.laptopL}) {
    padding-left: 380px;
  }
`;

const mockPosts = [
  {
    id: 1,
    title: "Эрик Файнман",
    link: "",
    text:
      "Молодой Эрик Файнман начал инвестировать в Биткоин в начале 2011 года, когда ему исполнилось 11 лет. Бабушка подарила мальчику $1,000, а старший брат дал совет, как можно распорядиться этими деньгами. На тот момент один биткоин стоил около $12. \n" +
      "\n" +
      "Через 2 года, в конце 2013, Файнман продал биткоины. Стоимость каждого из них была равна $1,200. Таким образом мальчик увеличил свои вложения в 100 раз, превратив $1,000 в $100,000. Эти деньги он инвестировал в свои проекты и снова в биткоин.\n",
    coin: logoMobile, // Картинка монеты
    purchasePrice: "12", // Стоимость при покупке
    investment: "1000", // Вложения (инвестиции)
    newsPrice: "1000", // Стоимость в момент новости
    earn: "100000", // Заработок
  },
  {
    id: 2,
    title: "Марк Фрауэнфельдер",
    link: "",
    text:
      "Марк Фрауэнфельдер чуть было не упустил заработанные миллионы, потеряв пароль от кошелька. \n" +
      "\n" +
      "Мужчина инвестировал $3,000 в биткоин и получил внушительную прибыль. Встал вопрос, как защитить эти деньги. Эксперты посоветовали использовать аппаратный кошелек с PIN-кодом за $100\n" +
      "\n" +
      "Фрауэнфельдер держал пароль в памяти, но на всякий случай записал его. Работник клининговой компании решил, что записка была мусором и выбросил. Когда это обнаружилось, Фрауэнфельдер решил, что это не страшно, но спустя время понял, что забыл PIN-код.\n" +
      "\n" +
      "Совершенно отчаявшись, он обратился за помощью к людям на различных форумах. Тогда нашелся человек, который взломал его аппаратный кошелёк, получил код и список из 24 слов. Ситуация, в которой не обошлось без стресса, переживаний и дополнительных финансовых затрат. А ведь все могло закончиться по-другому.\n",
    coin: logoMobile, // Картинка монеты
    purchasePrice: "100", // Стоимость при покупке
    investment: "3000", // Вложения (инвестиции)
    newsPrice: "1000", // Стоимость в момент новости
    earn: "100000", // Заработок
  },
  {
    id: 3,
    title: "Ласло Ханеч",
    link: "",
    text:
      "Один из первых известных случаев, когда криптовалютой расплатились за реальный товар, произошел в мае 2010 года. Ласло Ханеч — один из первых майнеров — предложил на форуме Bitcointalk 10 тысяч биткоинов любому, кто закажет ему две пиццы. Тогда все эти биткоины равнялись примерно $25.\n" +
      "\n" +
      "Желающий нашелся через четыре дня, о чем Ласло не без хвастовства сообщил в той же теме. Он продолжил обменивать все добытые монетки на пиццу до начала лета. \n" +
      "\n" +
      "Через три месяца биткоин подскочил в цене, 10 000 виртуальных монеток стали стоить $600. Если бы Ласло тогда приберег биткоины, он был бы богаче примерно на $73 млн — и это только за первые две пиццы. Зато его поступок остался в истории, а криптовалютные энтузиасты с тех пор отмечают 22 мая «День биткоиновой пиццы» (Bitcoin Pizza Day). В этот день принято закупаться пиццей и отправлять ее в благотворительные организации.\n",
    coin: logoMobile, // Картинка монеты
    purchasePrice: "25", // Стоимость при покупке
    investment: "25000", // Вложения (инвестиции)
    newsPrice: "1000", // Стоимость в момент новости
    earn: "73 000 000", // Заработок
  },
  {
    id: 4,
    title: "Глаубер Контессото",
    link: "",
    text:
      "Глаубер Контессото родился в семье среднего класса, жил в Лос-Анджелесе и профессионально занимался хип-хопом. До инвестиций в криптовалюту вкладывал деньги в акции Tesla и Uber. Мечтая разбогатеть, Глаубер искал перспективный токен, в который можно удачно инвестировать. Именно такой ему показалась мемная монета Dogecoin. Вдохновением послужили высказывания Илона Маска, который не раз упоминал о валюте в своих публикациях в Twitter.\n" +
      "\n" +
      "Контессото собрал все свои сбережения, продал акции, которые у него были, и даже одолжил часть суммы. В феврале 2021 года он потратил на покупку Dogecoin $180 тысяч. Цена одного токена на тот момент составляла $0,045. Уже через 2 месяца монета подорожала в 10 раз. Баланс Контессото резко увеличился до $1,08 млн. Глаубер, хотел накопить $10 млн, а затем забрать 10% от суммы.\n" +
      "\n" +
      "В мае 2021 года курс Dogecoin взлетел до рекордной отметки в $0,7, а потом снова начал падать. Из-за этого Контессото обеднел на 167 тыс. за один день. Мужчина не расстраивается и продолжает искать другие перспективные криптовалюты для инвестирования.\n",
    coin: logoMobile, // Картинка монеты
    purchasePrice: "0,045", // Стоимость при покупке
    investment: "25000", // Вложения (инвестиции)
    newsPrice: "1000", // Стоимость в момент новости
    earn: "10 000 000", // Заработок
  },
];

interface SwiperButProps {
  vector: "left" | "right";
  prevSlide: () => void;
  nextSlide: () => void;
}

export const CustomizeSwiperButton: FC<SwiperButProps> = memo(
  ({ vector, prevSlide, nextSlide }) => {
    if (vector === "right") {
      return (
        <RightButton
          type="button"
          className={`button__scroll button__scroll--${vector} posts-slider-button--${vector}`}
          onClick={nextSlide}
        >
          <ScrollButIco />
        </RightButton>
      );
    }
    return (
      <LeftButton
        type="button"
        className={`button__scroll button__scroll--${vector} posts-slider-button--${vector}`}
        onClick={prevSlide}
      >
        <ScrollButIco />
      </LeftButton>
    );
  }
);

const PostsSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const nextSlide = () => {
    swiperRef.current?.slideNext();
  };

  const prevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <Section>
      <H3>Их жизнь не станет прежней</H3>
      <CustomizeSwiperButton
        vector="left"
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
      <Swiper
        onSwiper={(swiper) => swiper}
        spaceBetween={10}
        className="posts-slider"
        pagination={{ clickable: true }}
        loop
        modules={[Pagination, Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {mockPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <PostWrapper>
              <MediaQuery minWidth={size.laptopL}>
                <picture className="coin-image">
                  <source srcSet={coinWebp} type="image/webp" />
                  <motion.img
                    loading="lazy"
                    decoding="async"
                    height="100%"
                    width="100%"
                    initial={{ rotate: 180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 35,
                    }}
                    src={coinWebp}
                    alt="cryptoCoin"
                  />
                </picture>
              </MediaQuery>
              <Container>
                <PostItem {...post} />
              </Container>
            </PostWrapper>
          </SwiperSlide>
        ))}
        <div style={{ height: 50 }} />
      </Swiper>

      <CustomizeSwiperButton
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        vector="right"
      />
    </Section>
  );
};

export default PostsSection;
