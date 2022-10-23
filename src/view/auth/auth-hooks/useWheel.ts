import { Dispatch, RefObject, SetStateAction, WheelEvent } from 'react';

type onWheelType = {
  event: WheelEvent<HTMLDivElement>;
  scrollRef: RefObject<HTMLDivElement>;
  currentSection: number;
  setCurrentSection: Dispatch<SetStateAction<number>>;
};

const useWheel = () => {
  function onWheel({ event, scrollRef, currentSection, setCurrentSection }: onWheelType) {
    if (scrollRef.current?.children) {
      if (event.deltaY > 0) {
        if (currentSection >= 0 && currentSection !== scrollRef.current.children.length - 1) {
          setCurrentSection((prev) => prev + 1);
        }
      }
      if (event.deltaY < 0) {
        if (currentSection > 0) {
          setCurrentSection((prev) => prev - 1);
        }
      }
    }
  }
  return onWheel;
};

export default useWheel;
