
import React, { useState, useEffect } from 'react';
import { useTheme } from '@/providers/ThemeProvider';

const TireToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  const [position, setPosition] = useState(isDarkMode ? 1 : 0);
  const [rotations, setRotations] = useState(0);
  const [isGlowing, setIsGlowing] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setPosition(isDarkMode ? 1 : 0);
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsAnimating(true);
    setIsGlowing(true);
    
    // Start rotation animation
    setRotations(prev => prev + (isDarkMode ? -5 : 5));
    
    // Toggle the theme after a slight delay to allow for animation
    setTimeout(() => {
      toggleTheme();
      
      // Turn off glow effect after animation completes
      setTimeout(() => {
        setIsGlowing(false);
        setIsAnimating(false);
      }, 700);
    }, 300);
  };

  return (
    <div 
      onClick={handleToggle}
      className="cursor-pointer select-none"
      title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {/* Track for the tire */}
      <div className={`w-20 h-10 rounded-full relative flex items-center p-1
                  ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'} 
                  shadow-lg border-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-400'}`}
           style={{
             boxShadow: isGlowing ? 
               'inset 0 0 10px rgba(255,0,0,0.5), 0 0 15px rgba(255,0,0,0.3)' : 
               'none'
           }}>
        {/* Track marks */}
        <div className="absolute w-full h-1 top-1/2 transform -translate-y-1/2 flex justify-between px-2 z-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <div 
              key={i} 
              className={`w-1 h-1 rounded-full 
                       ${isDarkMode ? 'bg-yellow-500' : 'bg-yellow-400'}`} 
            />
          ))}
        </div>
        
        {/* Tire container with position transition */}
        <div 
          className="absolute transition-all duration-700 ease-in-out z-10"
          style={{
            left: position === 0 ? '2px' : 'calc(100% - 36px)',
          }}
        >
          {/* Red glow effect */}
          <div 
            className="absolute inset-0 rounded-full filter blur-lg transition-opacity duration-500"
            style={{
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              transform: 'scale(1.2)',
              zIndex: -1,
              opacity: isGlowing ? 1 : 0,
              animation: isGlowing ? 'pulsateRed 0.7s infinite' : 'none'
            }}
          />
          
          {/* Smoke effect */}
          {isAnimating && (
            <div className={`absolute ${position === 0 ? '-right-4' : '-left-4'} top-1/2 transform -translate-y-1/2 z-0`}>
              {Array.from({ length: 4 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`absolute rounded-full ${isDarkMode ? 'bg-gray-500' : 'bg-gray-400'} opacity-70`}
                  style={{
                    width: `${5 + Math.random() * 8}px`,
                    height: `${5 + Math.random() * 8}px`,
                    left: `${Math.random() * 15}px`,
                    top: `${Math.random() * 5}px`,
                    animationDelay: `${Math.random() * 0.5}s`,
                    animation: `smokeParticle${position === 0 ? 'Right' : 'Left'} 1s forwards ease-out`
                  }}
                />
              ))}
            </div>
          )}
          
          {/* Tire with shadow and metallic effect */}
          <div 
            className={`w-8 h-8 rounded-full border-4 relative overflow-hidden 
                      ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-800 border-gray-600'}
                      transition-transform duration-1000 ease-out shadow-xl`}
            style={{
              transform: `rotate(${rotations * 360}deg)`,
              boxShadow: isGlowing ? 
                `0 0 15px 5px rgba(255, 0, 0, 0.6), inset 0 0 10px 5px rgba(255, 0, 0, 0.3)` : 
                'none',
            }}
          >
            {/* Tire treads - improved to stay inside the tire */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div 
                key={i}
                className="absolute bg-gray-500"
                style={{
                  width: '1px',
                  height: '6px', // Reduced from 8px to ensure treads stay inside
                  left: '50%',
                  top: '50%',
                  marginLeft: '-0.5px',
                  marginTop: '-3px', // Adjusted from -4px to center the smaller treads
                  transformOrigin: 'bottom center',
                  transform: `rotate(${i * 60}deg) translateY(-6px)`, // Reduced from -7px to stay inside
                  background: isDarkMode ? 
                    'linear-gradient(to bottom, #444, #222)' : 
                    'linear-gradient(to bottom, #555, #333)',
                }}
              />
            ))}
            
            {/* Center hub - improved metallic look */}
            <div 
              className="absolute inset-0 m-auto w-3 h-3 rounded-full border"
              style={{
                background: isDarkMode ? 
                  'radial-gradient(circle at 30% 30%, #888, #444)' : 
                  'radial-gradient(circle at 30% 30%, #bbb, #777)',
                borderColor: isDarkMode ? '#666' : '#999',
                boxShadow: 'inset 0 0 2px rgba(0,0,0,0.5)'
              }}
            >
              {/* Center cap */}
              <div 
                className="w-1.5 h-1.5 rounded-full absolute inset-0 m-auto"
                style={{
                  background: isDarkMode ? 
                    'radial-gradient(circle at 30% 30%, #777, #333)' : 
                    'radial-gradient(circle at 30% 30%, #aaa, #666)',
                  boxShadow: '0 0 1px rgba(0,0,0,0.5)'
                }} 
              />
            </div>
            
            {/* Red rim accent */}
            <div 
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                border: '1px solid rgba(255,0,0,0.7)',
                boxShadow: `0 0 3px rgba(255,0,0,0.3), inset 0 0 3px rgba(255,0,0,0.3)`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TireToggle;
