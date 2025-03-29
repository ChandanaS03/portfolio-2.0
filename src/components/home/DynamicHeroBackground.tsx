
import { useState, useEffect } from 'react';
import HeroBackground from './HeroBackground';
import HeroBackgroundFallback from './HeroBackgroundFallback';
import { useMobile } from '@/hooks/use-mobile';

const DynamicHeroBackground = () => {
  const [use3D, setUse3D] = useState(true);
  const isMobile = useMobile();

  useEffect(() => {
    // Check if the device is likely to have performance issues
    const checkPerformance = () => {
      // Default to fallback for mobile devices
      if (isMobile) {
        setUse3D(false);
        return;
      }

      // Try to detect low-end devices based on hardware concurrency
      if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        setUse3D(false);
        return;
      }

      // Default to 3D for most desktop devices
      setUse3D(true);
    };

    checkPerformance();
  }, [isMobile]);

  return use3D ? <HeroBackground /> : <HeroBackgroundFallback />;
};

export default DynamicHeroBackground;
