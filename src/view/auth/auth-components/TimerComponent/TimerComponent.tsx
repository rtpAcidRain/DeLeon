import { useEffect, useRef, useState } from "react";

import s from "./TimerComponent.module.scss";

export const TimerComponent = () => {
  const [days, setDays] = useState<number | string>("00");
  const [hours, setHours] = useState<number | string>("00");
  const [minutes, setMinutes] = useState<number | string>("00");
  const [seconds, setSeconds] = useState<number | string>("00");

  let interval = useRef<NodeJS.Timeout>();

  const startTimer = () => {
    const countDownDate = new Date("March 11,2023").getTime();

    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (100 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days < 10 ? `0${days}` : days);
        setHours(hours < 10 ? `0${hours}` : hours);
        setMinutes(minutes < 10 ? `0${minutes}` : minutes);
        setSeconds(seconds < 10 ? `0${seconds}` : seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.blockItem}>
        <p className={s.count}>
          {String(days)
            .split("")
            .map((i) => (
              <span className={s.countItem}>{i}</span>
            ))}
        </p>
        <p className={s.descriptionItem}>Дней</p>
      </div>
      <div className={s.blockItem}>
        <p className={s.count}>
          {String(hours)
            .split("")
            .map((i) => (
              <span className={s.countItem}>{i}</span>
            ))}
        </p>
        <p className={s.descriptionItem}>Часов</p>
      </div>
      <div className={s.blockItem}>
        <p className={s.count}>
          {String(minutes)
            .split("")
            .map((i) => (
              <span className={s.countItem}>{i}</span>
            ))}
        </p>
        <p className={s.descriptionItem}>Минут</p>
      </div>
      <div className={s.blockItem}>
        <p className={s.count}>
          {String(seconds)
            .split("")
            .map((i) => (
              <span className={s.countItem}>{i}</span>
            ))}
        </p>
        <p className={s.descriptionItem}>Секунд</p>
      </div>
    </div>
  );
};
