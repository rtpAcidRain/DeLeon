import React, {FC, useEffect, useState} from 'react';
import lock from '../../../auth-assets/images/lock.png'
import gift from '../../../auth-assets/images/gift.png'
import blurGift from '../../../auth-assets/images/blur-gift.png'
import disableGift from '../../../auth-assets/images/disable-gift.png'
import styled from "styled-components";
import {AnimatePresence, motion} from 'framer-motion';
import {useAtom} from "jotai";
import {bonusesAtoms} from "./BonusesModal";

const Title = styled.div`
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  text-transform: uppercase;
  color: #FFFFFF;
`;

const Shadow = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  border-radius: 50%;
  background: #6D6D6D;
  filter: blur(22.1292px);
`;

const variants = {
    open: {rotate: 360},
    show: {rotate: 0, scale: 1}
}

interface BonusItemProps {
    bonus: number
    max: number
    isSelected: boolean
}

const BonusItem: FC<BonusItemProps> = ({bonus, max, isSelected}) => {
    const [isOpen, setIsOpen] = useState(isSelected)
    const [selectedBonuses, setSelectedBonuses] = useAtom(bonusesAtoms)

    const onClick = () => {
        if (max === selectedBonuses.length && !isSelected) return

        setSelectedBonuses((prev) => [...prev, bonus])
        setIsOpen(true)
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            if(max === selectedBonuses.length && !isSelected) setIsOpen(true)
        }, 1000)
        return () => clearTimeout(timeout)
    }, [max, selectedBonuses, isOpen, isSelected])

    return (
        <motion.div
            variants={variants}
            transition={{
                type: 'spring',
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
                    type: 'spring',
                    stiffness: 260,
                    damping: 35,
                }}
                animate={isOpen && "open"}
                alt=""
                className="gift-image"
                src={max === selectedBonuses.length && !isOpen
                    ? disableGift
                    : isOpen ? blurGift : gift
                }
            />
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 35,
                        }}
                        variants={variants}
                        animate={isOpen && "open"}
                        className="gift-content"
                    >
                        <Title>Ваш подарок</Title>
                        <p className="gift-text-content"> Lorem ipsum dolor sit amet</p>
                    </motion.div>
                )}
            </AnimatePresence>
            {!isOpen && <Shadow />}
            {max === selectedBonuses.length && !isOpen && <motion.img className="gift-lock" src={lock} alt="" />}
        </motion.div>
    );
};

export default BonusItem;