import { useCallback, useEffect } from 'react';
import { calcElementHeight } from '../helpers/CalcElementHeight';

let oldValue = 0;
let newValue = 0;

export function useOverscroll(
  ref,
  scrollEndCallback = () => {},
  scrollUpCallback = () => {},
  offset = 1
) {
  const handleScroll = useCallback(
    event => {
      const node = event.target;
      const elHeight = calcElementHeight(event.target);
      // offset lowers limit
      const limit = elHeight - (node.offsetHeight || node.innerHeight) - offset;

      if (node.scrollTop >= limit) {
        console.log('scroll top ', node.scrollTop);
        console.log('exceeded limit ', limit);
      }

      newValue = node.scrollTop;
      // if scrolling up
      if (oldValue > newValue) {
        scrollUpCallback?.();
      }
      oldValue = newValue;

      // if we're in the end zone
      if (node.scrollTop >= limit) scrollEndCallback?.();
    },
    [ref, scrollEndCallback, scrollUpCallback]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('scroll', handleScroll);
      return () => ref.current?.removeEventListener('scroll', handleScroll);
    }
  }, [ref]);
}
