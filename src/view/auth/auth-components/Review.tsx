import React from 'react';

type Props = {
  name: string;
  img: string;
  text: string;
};

const Review: React.FC<Props> = React.memo(({ name, img, text }) => {
  return (
    <article className="review__item">
      <header className="review__header">
        <div className="review__avatar avatar">
          <img className="avatar__image" src={img} alt="avatar" />
        </div>
        <div className="review__autor autor">
          <p className="autor__name">{name}</p>
          <p className="review__meta">оригинал отзыва</p>
        </div>
      </header>
      <main className="review__descriptiion descriptiton">
        <p className="descriptiton__text">{text}</p>
      </main>
    </article>
  );
});

export default Review;
