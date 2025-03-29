
import { useEffect, useState } from 'react';

const HeroBackgroundFallback = () => {
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-70">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(60,139,224,1) 0%, rgba(0,69,130,0) 70%)',
            transform: `rotate(${rotation}deg) scale(2)`,
            filter: 'blur(20px)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '20%',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(100,200,255,0.7) 0%, rgba(0,0,0,0) 70%)',
            transform: `rotate(${-rotation * 0.7}deg)`,
            filter: 'blur(15px)'
          }}
        />
      </div>
    </div>
  );
};

export default HeroBackgroundFallback;
