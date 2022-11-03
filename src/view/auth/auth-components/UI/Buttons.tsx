import { FC, memo } from 'react';
import { useSwiper } from 'swiper/react';
import { ScrollButIco } from '../../auth-assets/svg/icons';
import { TopButton, BotButton, LeftButton, RightButton } from '../../../../styles/auth/Buttons';

interface ScrollButProps {
  vector: 'down' | 'up';
  ChangeSection: (idx: any) => void;
}

interface SwiperButProps {
  vector: 'left' | 'right';
}

const ScrollButton: FC<ScrollButProps> = memo(({ vector, ChangeSection }) => {
  const onClick = () => {
    if (vector === 'down') {
      ChangeSection((prev: any) => prev + 1);
    } else {
      ChangeSection((prev: any) => prev - 1);
    }
  };

  if (vector === 'up') {
    return (
      <TopButton onClick={onClick}>
        <ScrollButIco />
      </TopButton>
    );
  }
  return (
    <BotButton onClick={onClick}>
      <ScrollButIco />
    </BotButton>
  );
});

const SwiperButton: FC<SwiperButProps> = memo(({ vector }) => {
  const swiper = useSwiper();

  if (vector === 'right') {
    return (
      <RightButton
        type="button"
        className={`button__scroll button__scroll--${vector}`}
        onClick={() => swiper.slideNext()}>
        <ScrollButIco />
      </RightButton>
    );
  }
  return (
    <LeftButton
      type="button"
      className={`button__scroll button__scroll--${vector}`}
      onClick={() => swiper.slidePrev()}>
      <ScrollButIco />
    </LeftButton>
  );
});

export { ScrollButton, SwiperButton };
