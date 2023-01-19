import { useAtom } from "jotai";
import { useCallback, useEffect, useRef, useState } from "react";
import ContentComponent from "./ContentComponent";
import SideBar from "./SideBar";

import gift from "../../auth/auth-assets/images/gifts.png";
import { App, Main } from "../../../styles/auth/AuthApp";
import { GiftButton } from "../../../styles/auth/Buttons";

import "../../../scss/auth-styles/desktop/style.scss";
import BonusesModal, { bonusesAtoms } from "./UI/BonusesModal/BonusesModal";
import { motion } from "framer-motion";

type Props = {};

const MobileComponent = (props: Props) => {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [isAnimateGift, setIsAnimateGift] = useState(false);
  const [bonuses] = useAtom(bonusesAtoms);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const onClose = () => setIsOpenModal(false);

  const ChangeSection = useCallback((idx: number) => {
    setCurrentSection(idx);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpenModal(true);
    }, 7000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    scrollRef.current?.children[currentSection].scrollIntoView({
      behavior: "smooth",
    });
  }, [currentSection]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimateGift(true);

      setTimeout(() => {
        setIsAnimateGift(false);
      }, 200);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <App>
      <SideBar ChangeSection={ChangeSection} currentSection={currentSection} />
      <GiftButton
        variants={{
          default: { rotate: 0 },
          animate: {
            transition: {
              ease: "easeOut",
              duration: 0.3,
            },
            rotate: [0, 10, 0, -10, 0],
          },
        }}
        animate={!bonuses.length ? (isAnimateGift ? "animate" : "default") : ""}
        as={motion.button}
        onClick={() => setIsOpenModal(true)}
      >
        <img alt="" src={gift} />
      </GiftButton>

      <Main ref={scrollRef}>
        <ContentComponent ChangeSection={ChangeSection} />
      </Main>

      <BonusesModal isOpen={isOpenModal} onClose={onClose} />
    </App>
  );
};

export default MobileComponent;
