import React, { useEffect, useState } from "react";
import {
  colorsObj,
  ColorsType,
  LevelColorType,
  TextModule,
} from "../../Tarif/styles";
import { ProgramItem } from "../../sections/OurProgram";
import { TarifStar } from "../../../auth-assets/svg/icons";
import arrow from "../../../auth-assets/images/moduleArrow.png";

const mockLessons = [
  "Урок 1. Законодательство РФ/РЬ/КЗ/УА (4 урока)",
  "Урок 2. 10 правил безопасности",
  "Урок 3. Что такое криптовалюта и блокчейн(хэши, майнинг, Анонимность)",
  "Урок 4. Чем различаются блокчейны (консенсусы)",
  "Урок 5. Экономика, конфиденциальность и анонимность блокчейна",
  "Урок 6. Как купить/продать/перевести криптовалюту",
  "Урок 7. Виды криптовалютных кошельков",
  "Урок 8. Анализ криптовалют",
  "Урок 9. Централизованные биржи",
  "Урок 10. Децентрализованные биржи",
  "Урок 11. Как собрать криптовалютный портфель",
  "Урок 12. Основные стратегии торговли",
  "Урок 13. Способы заработка на криптовалюте",
  "Урок 14. Базовый технический анализ",
  "Урок 15. Трейдинг с помощью алгоритмических ботов",
  "Урок 16. Стейблкоины. Виды и их отличия",
  "Урок 17. DeFi смарт-контракты и пулы ликвидности",
  "Урок 18. Фарминг, стейкинг и лендинг",
  "Урок 19. Риск-менеджмент, мани-менеджмент, психология рынка",
  "Урок 20. Пресейлы токенов (ICO, IDO…)",
  "Урок 21. Что такое NFT и 5 способов на нем заработать",
  "Урок 22. Что такое WEB 30 и Метавселенные",
  "Урок 23. Что такое DAO",
  "Урок 24. Play2Earn - Играй и зарабатывай!",
  "Урок 25. Аирдропы и вайтлисты",
  "Урок 26. Тестнеты",
  "Урок 27. Амбассадорские программы",
  "Урок 28. Ноды",
  "Урок 29. Полезные инструменты для анализа и работы с рынком",
  "Урок 30. Как создать свой токен",
];

interface ModuleProps {
  module: 1 | 2 | 3;
  color: keyof ColorsType;
  title: string;
  contentTitle: string;
}

const Module: React.FC<ModuleProps> = ({
  color,
  title,
  module,
  contentTitle,
}) => {
  const [currentColor, setCurrentColor] = useState<LevelColorType>(
    colorsObj.lower
  );
  const [lessons, setLessons] = useState<string[]>([]);
  const [showModule, setShowModule] = useState(false);

  useEffect(() => {
    switch (module) {
      case 1:
        return setLessons(mockLessons.slice(0, 12));
      case 2:
        return setLessons(mockLessons.slice(12, 19));
      case 3:
        return setLessons(mockLessons.slice(20, 30));
      default:
        return setLessons(mockLessons.slice(0, 20));
    }
  }, [module]);

  useEffect(() => {
    switch (color) {
      case "middle":
        return setCurrentColor(colorsObj.middle);
      case "max":
        return setCurrentColor(colorsObj.max);
      default:
        return setCurrentColor(colorsObj.lower);
    }
  }, []);

  return (
    <TextModule
      onMouseEnter={() => setShowModule(true)}
      onMouseLeave={() => setShowModule(false)}
      className="text"
    >
      <TarifStar color={currentColor.cl} />
      <span className="title">{title}</span>
      <img className="arrow-module" width={8} height={8} src={arrow} alt="" />
      {showModule && (
        <ProgramItem color={currentColor} title={contentTitle}>
          {lessons.map((lesson) => (
            <li className="list__item" key={lesson}>
              {lesson}
            </li>
          ))}
        </ProgramItem>
      )}
    </TextModule>
  );
};

export default Module;
