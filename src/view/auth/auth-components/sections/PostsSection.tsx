import React from 'react';
import {H3} from "../UI/Heading";
import { Navigation, Pagination } from 'swiper';
import { SwiperButton } from '../UI/Buttons';
import { Swiper, SwiperSlide } from 'swiper/react';
import Section from "../layouts/Section";
import styled from "styled-components";
import {device, size} from "../../../../styles/auth/breackpoints";
import coinWebp from "../../auth-assets/images/cryptocoin.webp";
import {motion} from "framer-motion";
import MediaQuery from "react-responsive";
import PostItem from "../UI/PostItem/PostItem";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PostWrapper = styled.div`
  font-size: 7px;
  border: 1px solid #375fbe;
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  border-radius: 0.5em;
  padding: 2.4375em 0.875em 0.875em 2.0625em;
  margin: 2.75em auto;
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
    {id: 1,title: "Илья Рогачев", link: "", text: "Немного обо мне"},
    {id: 2,title: "Андрей Браун", link: "", text: "Немного обо мне"},
    {id: 3,title: "Ваня Коробков", link: "", text: "Немного обо мне"},
]

const PostsSection = () => {
    return (
        <Section>
            <H3>Их жизнь не станет прежней</H3>
            <Swiper spaceBetween={10} className="posts-slider" pagination={{clickable: true}} navigation loop modules={[Navigation, Pagination]}>
                <SwiperButton vector="left" />
                <SwiperButton vector="right" />
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
                                            type: 'spring',
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
            </Swiper>
        </Section>
    );
};

export default PostsSection;