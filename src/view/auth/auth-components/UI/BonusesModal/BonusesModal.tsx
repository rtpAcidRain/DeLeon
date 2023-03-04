import React, { FC } from "react";
import BonusItem from "./BonusItem";
import Modal from "../Modal/Modal";
import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";
import { H3 } from "../Heading";
import styled from "styled-components";
import { SectionButton } from "../../../../../styles/auth/Buttons";
import { device } from "../../../../../styles/auth/breackpoints";
import { isOpenFreeLessonModalAtom } from "../FreeLessonModal/FreeLessonModal";

const Button = styled(SectionButton)`
  padding: 13px 40px;
  font-weight: 600;
  font-size: 20px;
  margin: 20px auto 20px auto;
  z-index: 2;

  @media (${device.tablet}) {
    margin: 0 auto 20px auto;
  }
`;

interface BonusesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockBonuses = [
  { title: "Доступ к закрытому клубу выпускников", id: 1 },
  { title: "NFT сертификат о прохождении курса", id: 2 },
  { title: "Подарки для лучших учеников от спонсоров проекта", id: 3 },
  { title: "50 USDT", id: 4 },
  { title: "Бесплатный 5-дневный марафон (мини-курс от школы)", id: 5 },
  { title: "3 месяца бесплатного пользования VPN от Surfshark", id: 6 },
];

export const bonusesAtoms = atomWithStorage("bonuses", [1, 2, 3]);

const BonusesModal: FC<BonusesModalProps> = ({ onClose, isOpen }) => {
  const [selectedBonuses] = useAtom(bonusesAtoms);

  const [, setIsOpenModal] = useAtom(isOpenFreeLessonModalAtom);
  const takeGift = () => {
    onClose();
    setIsOpenModal(true);
  };

  return (
    <Modal className="bonuses-modal" onClose={onClose} isOpen={isOpen}>
      <div className="bonuses">
        <H3 className="bonuses-title">Вы гарантированно получаете</H3>
        <div className="bonuses-section">
          {mockBonuses.slice(0, 3).map((bonus) => (
            <BonusItem
              max={4}
              isSelected={selectedBonuses.includes(bonus.id)}
              bonus={bonus}
              key={bonus.id}
            />
          ))}
        </div>
        <H3 className="bonuses-title">Выбери ещё один персональный подарок</H3>
        <div className="bonuses-section">
          {mockBonuses.slice(3, 6).map((bonus) => (
            <BonusItem
              max={4}
              isSelected={selectedBonuses.includes(bonus.id)}
              bonus={bonus}
              key={bonus.id}
            />
          ))}
        </div>
        <Button onClick={takeGift}>Забрать подарок</Button>
      </div>
    </Modal>
  );
};

export default BonusesModal;
