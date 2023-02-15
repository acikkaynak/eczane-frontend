import axios from 'axios';
import {useEffect, useState} from 'react';
import {largeThreshold, mobileThreshold, xLargeThreshold, xxxLargeThreshold} from '../utils/styled';
import {debounce} from './debounce';

export function useWindowSize(initial) {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    isDesktop: initial?.isDesktop ?? undefined,
    isMobile: initial?.isMobile ?? undefined,
    isLarge: undefined,
    isXLarge: undefined,
    isLandscape: undefined,
    isTablet: undefined,
    isXXXLarge: undefined,
  });

  useEffect(() => {
    function handleResize() {
      const isLarge = window.innerWidth > largeThreshold;
      const isDesktop = window.innerWidth > mobileThreshold;
      const isMobile = !isDesktop;

      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isDesktop,
        isMobile,
        isLarge,
        isXLarge: window.innerWidth > xLargeThreshold,
        isLandscape: window.innerWidth > window.innerHeight,
        isTablet: !isLarge && isDesktop,
        isXXXLarge: window.innerWidth > xxxLargeThreshold,
      });
    }

    const debouncedResize = debounce(handleResize, 50);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', debouncedResize);
  }, []);

  return windowSize;
}

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then(response => {
        setData(response?.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return {data, loading, error};
}
