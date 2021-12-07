import throttle from 'lodash/throttle';
import { useEffect } from 'react';

export function useColourChange(ref) {
  const handleScroll = event => {
    const node = event.target;

    const [red, green, blue] = [69, 111, 225];
    const section1 = document.querySelector('.section1');

    const y = 1 + node.scrollTop / 150;
    const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
    section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('scroll', handleScroll);
      return () => ref.current?.removeEventListener('scroll', handleScroll);
    }
  }, [ref]);
}
