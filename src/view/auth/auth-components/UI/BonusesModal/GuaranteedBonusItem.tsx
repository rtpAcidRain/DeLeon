import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import blurGift from "../../../auth-assets/images/blur-gift.png";

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

interface GuaranteedBonusItemProps {
  bonus: { title: string; id: number };
  max: number;
  isSelected: boolean;
}

export const GuaranteedBonusItem = ({ bonus }: GuaranteedBonusItemProps) => {
  return (
    <motion.div
      initial={{ rotate: 0, scale: 1 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 35,
      }}
      className="gift-wrapper"
    >
      <motion.img
        initial={{ rotate: 0, scale: 1 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 35,
        }}
        alt=""
        className="gift-image selected-gift"
        src={blurGift}
      />
      <AnimatePresence>
        <motion.div
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 35,
          }}
          initial={{ rotate: 0, scale: 1 }}
          animate={{ rotate: 360, scale: 1 }}
          className="gift-content"
        >
          <Title className="gift-title-content">Ваш подарок</Title>
          <p className="gift-text-content">{bonus.title}</p>
        </motion.div>
      </AnimatePresence>
      <Shadow />
    </motion.div>
  );
};
