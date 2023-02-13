import React, { FC, useEffect, useState } from "react";
import lock from "../../../auth-assets/images/lock.png";
import gift from "../../../auth-assets/images/gift.png";
import blurGift from "../../../auth-assets/images/blur-gift.png";
import disableGift from "../../../auth-assets/images/disable-gift.png";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { bonusesAtoms } from "./BonusesModal";
import clsx from "clsx";

const Title = styled.div`
  font-weight: 600;
  line-height: 30px;
  text-transform: uppercase;
  color: #ffffff;
`;

const Shadow = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  border-radius: 50%;
  background: #6d6d6d;
  filter: blur(22.1292px);
`;

const variants = {
  open: { rotate: 360 },
  show: { rotate: 0, scale: 1 },
};

interface BonusItemProps {
  bonus: { title: string; id: number };
  max: number;
  isSelected: boolean;
}

const BonusItem: FC<BonusItemProps> = ({ bonus, max, isSelected }) => {
  const [selectedBonuses, setSelectedBonuses] = useAtom(bonusesAtoms);
  const [isOpen, setIsOpen] = useState(isSelected);

  const image =
    max === selectedBonuses.length && !isOpen
      ? disableGift
      : isOpen
      ? blurGift
      : gift;

  const onClick = () => {
    if (max === selectedBonuses.length) return;

    setSelectedBonuses((prev) => [...prev, 5]);
  };

  useEffect(() => {
    isSelected && setIsOpen(true);
  }, [isSelected]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (max === selectedBonuses.length && !isSelected) setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [max, selectedBonuses, isSelected]);

  return (
    <motion.div
      variants={variants}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 35,
      }}
      animate={!isOpen && "show"}
      className="gift-wrapper"
    >
      <motion.img
        variants={variants}
        onClick={onClick}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 35,
        }}
        animate={isOpen && "open"}
        alt=""
        className={clsx("gift-image", isOpen && "selected-gift")}
        src={image}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 35,
            }}
            variants={variants}
            animate={isOpen && "open"}
            className="gift-content"
          >
            <Title className="gift-title-content">Ваш подарок</Title>
            <p className="gift-text-content">{bonus.title}</p>
          </motion.div>
        )}
      </AnimatePresence>
      {!isOpen && <Shadow />}
      {max === selectedBonuses.length && !isSelected && (
        <motion.img
          className={clsx("gift-lock", isOpen && "transparent")}
          src={lock}
          alt=""
        />
      )}
    </motion.div>
  );
};

export default BonusItem;
