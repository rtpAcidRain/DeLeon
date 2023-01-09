import React, {useEffect, useState} from "react";
import {ColorsType, TextModule} from "../../Tarif/styles";
import {ProgramItem} from "../../sections/OurProgram";

const mockLessons = ['Законодательство',
'10 правил безопасности',
'Что такое криптовалюта, блокчейн и майнинг',
'Чем различаются блокчейны ',
'Экономика, конфиденциальность и анонимность блокчейна',
'Как купить/продать/перевести криптовалюту',
'Виды криптовалютных кошельков',
'Анализ криптовалют',
'Централизованные биржи',
'Децентрализованные биржи',
'Как собрать криптовалютный портфельОсновные стратегии торговли',
'Способы заработка на криптовалюте',
'Базовый технический анализ',
'Трейдинг с помощью алгоритмических ботов',
'Стейблкоины Виды и их отличия',
'DeFi смарт-контракты и пулы ликвидности',
'Фарминг, стейкинг и лендинг',
'Риск-менеджмент, мани-менеджмент, психология рынка',
'Пресейлы токенов (ICO, IDO…)',
'Что такое NFT и 5 способов на нем заработать',
'Что такое WEB 30 и Метавселенные',
'Что такое DAO',
'Play2Earn - Играй и зарабатывай!',
'Аирдропы и вайтлисты',
'Тестнеты',
'Амбассадорские программы',
'Ноды',
'Полезные инструменты для анализа и работы с рынком',
'Как создать свой токен'
]

interface ModuleProps {
    module: 1 | 2 | 3
    color: keyof ColorsType
    title: string
    contentTitle: string
}

const Module: React.FC<ModuleProps> = ({color, title, module, contentTitle}) => {
    const [lessons, setLessons] = useState<string[]>([])
    const [showModule, setShowModule] = useState(false)

    useEffect(() => {
        switch (module) {
            case 1: return setLessons(mockLessons.slice(0, 20))
            case 2: return setLessons(mockLessons.slice(0, 30))
            case 3: return setLessons(mockLessons.slice(0, 30))
            default: return setLessons(mockLessons.slice(0, 20))
        }
    }, [module])

    return (
        <TextModule onMouseEnter={() => setShowModule(true)} onMouseLeave={() => setShowModule(false)} className="text">
            <span className="title">{title} (?)</span>
            {showModule &&
                <ProgramItem color={color} title={contentTitle}>
                    {lessons.map((lesson, index) => <li className="list__item" key={lesson}>Урок {index + 1}. {lesson}</li>)}
                </ProgramItem>
            }
        </TextModule>
    );
};

export default Module;