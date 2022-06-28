import  { RefObject } from 'react'

export const useWheelScroll = (ref: RefObject<HTMLDivElement>, currentSection: number, setCurrentSection: (idx: number) => void) => {
  return function scrollFunction() {
    const scroll = (e: WheelEvent) => {
      e.preventDefault();
      if (ref.current?.children) {
        if (currentSection === 0) {
          if (e.deltaY > 0) {
            setCurrentSection(currentSection + 1);
          }
        } else if (currentSection === ref.current.children.length - 1) {
          if (e.deltaY < 0) {
            setCurrentSection(currentSection - 1);
          }
        } else {
          if (e.deltaY > 0) {
            setCurrentSection(currentSection + 1);
          } else {
            setCurrentSection(currentSection - 1);
          }
        }
      }
    };
    ref.current?.removeEventListener("onwheel" in document ? "wheel" : "mousewheel", (e) => scroll(e as WheelEvent));
    ref.current?.addEventListener("onwheel" in document ? "wheel" : "mousewheel", (e) => scroll(e as WheelEvent), { passive: false });
    ref.current?.children[currentSection].scrollIntoView({ behavior: 'smooth' });
  } 
}
