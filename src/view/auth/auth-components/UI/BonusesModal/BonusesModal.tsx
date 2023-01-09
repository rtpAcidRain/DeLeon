import React, {FC} from 'react';
import BonusItem from "./BonusItem";
import Modal from "../Modal/Modal";
import {atomWithStorage} from "jotai/utils";
import {useAtom} from "jotai";
import {H3} from '../Heading';

interface BonusesModalProps {
    isOpen: boolean
    onClose: () => void
}

const mockBonuses = [1,2,3,4,5,6]
export const bonusesAtoms = atomWithStorage("bonuses", [1,2,3])

const BonusesModal: FC<BonusesModalProps> = ({onClose, isOpen}) => {
    const [selectedBonuses] = useAtom(bonusesAtoms)

    return (
        <Modal className="bonuses-modal" onClose={onClose} isOpen={isOpen} >
            <div className="bonuses">
            <H3 className="bonuses-title">Вы гарантированно получаете</H3>
                <div className="bonuses-section">
                    {mockBonuses.slice(0,3).map((bonus) => (
                        <BonusItem
                            max={4}
                            isSelected={selectedBonuses.includes(bonus)}
                            bonus={bonus}
                            key={bonus}
                        />
                    ))}
                </div>
                <H3 className="bonuses-title">Выбери ещё один персональный подарок</H3>
                <div className="bonuses-section">
                    {mockBonuses.slice(3,6).map((bonus) => (
                        <BonusItem
                            max={4}
                            isSelected={selectedBonuses.includes(bonus)}
                            bonus={bonus}
                            key={bonus}
                        />
                    ))}
                </div>
            </div>
        </Modal>
    );
};

export default BonusesModal;