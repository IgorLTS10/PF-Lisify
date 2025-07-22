import React from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number; // en secondes
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 10,
  className = '',
}) => {
  const animationName = 'shineEffect';
  const animationDuration = `${speed}s`;

  return (
    <>
      {!disabled && (
        <style>{`
          @keyframes ${animationName} {
            0% {
              background-position: 200% center;
            }
            100% {
              background-position: -200% center;
            }
          }
        `}</style>
      )}
      <div
        className={`inline-block ${className}`}
        style={{
          color: '#b5b5b5a4',
          backgroundImage:
            'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
          backgroundSize: '200% 100%',
          backgroundRepeat: 'no-repeat',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: !disabled ? `${animationName} ${animationDuration} linear infinite` : undefined,
        }}
      >
        {text}
      </div>
    </>
  );
};

export default ShinyText;
