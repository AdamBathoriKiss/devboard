import { useSyncExternalStore } from 'react';

export function useMediaQuery(query:string) {
  // 1. Feliratkozunk a media query változásaira
  const subscribe = (callback:()=> void) => {
    const matchMedia = window.matchMedia(query);
    matchMedia.addEventListener('change', callback);
    return () => matchMedia.removeEventListener('change', callback);
  };

  // 2. Lekérjük az aktuális igaz/hamis értéket
  const getSnapshot = () => window.matchMedia(query).matches;

  // 3. SSR fallback (opcionális, pl. Next.js-hez)
  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
