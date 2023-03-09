import React, { FC, useEffect, useState } from "react";
import BonusItem from "./BonusItem";
import Modal from "../Modal/Modal";
import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";
import { H3 } from "../Heading";
import styled from "styled-components";
import { SectionButton } from "../../../../../styles/auth/Buttons";
import { device } from "../../../../../styles/auth/breackpoints";
import { isOpenFreeLessonModalAtom } from "../FreeLessonModal/FreeLessonModal";
import { GuaranteedBonusItem } from "./GuaranteedBonusItem";

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

const guaranteedBonuses = [
  { title: "Доступ к закрытому клубу выпускников", id: 1 },
  { title: "NFT сертификат о прохождении курса", id: 2 },
  { title: "Подарки для лучших учеников от спонсоров проекта", id: 3 },
];

const mockBonuses = [
  { title: "50 USDT", id: 4 },
  { title: "Бесплатный 5-дневный марафон (мини-курс от школы)", id: 5 },
  { title: "3 месяца бесплатного пользования VPN от Surfshark", id: 6 },
];

export const bonusesAtoms = atomWithStorage("bonuses", [1, 2, 3]);

const BonusesModal: FC<BonusesModalProps> = ({ onClose, isOpen }) => {
  const [selectedBonuses] = useAtom(bonusesAtoms);
  const [bonuses, setBonuses] = useState(mockBonuses);

  const [, setOpenFreeLessonModal] = useAtom(isOpenFreeLessonModalAtom);
  const takeGift = () => {
    onClose();
    setOpenFreeLessonModal(true);
  };

  const onChangeBonus = (id: number, title: string) =>
    setBonuses((prev) =>
      prev.map((b) =>
        b.id === id
          ? { id, title: "Бесплатный 5-дневный марафон (мини-курс от школы)" }
          : b.title === "Бесплатный 5-дневный марафон (мини-курс от школы)"
          ? { id: b.id, title }
          : b
      )
    );

  useEffect(() => {
    const lastSelectedBonus = selectedBonuses[selectedBonuses.length - 1];

    const newBonuses = mockBonuses.map((b, i, array) => {
      const title = array.find((i) => i.id === lastSelectedBonus)?.title!;

      return b.id === lastSelectedBonus
        ? {
            id: b.id,
            title: "Бесплатный 5-дневный марафон (мини-курс от школы)",
          }
        : b.title === "Бесплатный 5-дневный марафон (мини-курс от школы)"
        ? { id: b.id, title }
        : b;
    });

    setBonuses(newBonuses);
  }, [selectedBonuses]);

  return (
    <Modal className="bonuses-modal" onClose={onClose} isOpen={isOpen}>
      <div className="bonuses">
        <H3 className="bonuses-title">Вы гарантированно получаете</H3>
        <div className="bonuses-section">
          {guaranteedBonuses.map((bonus) => (
            <GuaranteedBonusItem
              max={4}
              isSelected={selectedBonuses.includes(bonus.id)}
              bonus={bonus}
              key={bonus.id}
            />
          ))}
        </div>
        <H3 className="bonuses-title">Выбери ещё один персональный подарок</H3>
        <div className="bonuses-section">
          {bonuses.map((bonus) => (
            <BonusItem
              max={4}
              onChangeBonus={onChangeBonus}
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
