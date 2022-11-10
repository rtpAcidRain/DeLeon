import React from 'react';
import styled from 'styled-components';
import { device } from '../../../styles/auth/breackpoints';

type Props = {
  name: string;
  img: string;
  text: string;
};

const ReviewStyle = styled.article`
  background: rgba(52, 211, 153, 0.08);
  border: 1px solid #34d399;
  border-radius: 0.1875em;
  padding: 0.75em;
  font-weight: 600;
  color: #ffffff;
  margin: auto;
  display: flex;
  flex-direction: column;
  max-width: 215px;
  height: 100%;
  @media (${device.mobileM}) {
    max-width: 225px;
  }
  @media (${device.tablet}) {
    max-width: 235px;
  }
  @media (${device.laptop}) {
    max-width: 249px;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 0.875em;
`;

const Avatar = styled.div`
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.875em;
  width: 3.5em;
  height: 3.5em;
  img {
    width: 100%;
  }
`;

const Autor = styled.div`
  .autor__name {
    font-size: 1.5em;
    line-height: 1.2em;
  }
  .review__meta {
    font-weight: 600;
    font-size: 1em;
    line-height: 1.2em;
    text-decoration-line: underline;

    color: #34d399;
  }
`;

const Text = styled.p`
  font-size: 1em;
  line-height: 1.2em;
  overflow: auto;
`;

const Review: React.FC<Props> = React.memo(({ name, img, text }) => {
  return (
    <ReviewStyle>
      <Header>
        <Avatar>
          <img className="avatar__image" src={img} alt="avatar" />
        </Avatar>
        <Autor>
          <p className="autor__name">{name}</p>
          <a href="/" className="review__meta">
            оригинал отзыва
          </a>
        </Autor>
      </Header>
      <main>
        <Text className="descriptiton__text">{text}</Text>
      </main>
    </ReviewStyle>
  );
});

export default Review;
