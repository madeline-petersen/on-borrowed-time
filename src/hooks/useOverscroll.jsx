import throttle from 'lodash/throttle';
import { useCallback, useEffect } from 'react';
import { calcElementHeight } from '../helpers/CalcElementHeight';

export function useOverscroll(ref, callback = () => {}, offset = 3) {
  const handleScroll = useCallback(
    event => {
      const node = event.target;
      const elHeight = calcElementHeight(event.target);
      const limit = elHeight - (node.offsetHeight || node.innerHeight) - offset;

      if (node.scrollTop >= limit) callback?.();
    },
    [ref, callback]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('scroll', handleScroll);
      return () => ref.current?.removeEventListener('scroll', handleScroll);
    }
  }, [ref]);
}
