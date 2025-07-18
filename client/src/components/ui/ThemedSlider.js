import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 1rem 0;
`;

const SliderTrack = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  position: relative;
  cursor: pointer;
`;

const SliderFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #4CAF50, #66bb6a);
  border-radius: 3px;
  position: absolute;
  left: 0;
  top: 0;
`;

const SliderThumb = styled(motion.div)`
  width: 20px;
  height: 20px;
  background: #4CAF50;
  border: 3px solid white;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: grab;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  &:active {
    cursor: grabbing;
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4);
  }
`;

const SliderLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
`;

const SliderValue = styled(motion.div)`
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  white-space: nowrap;
  pointer-events: none;
`;

const ThemedSlider = ({ 
  value, 
  onChange, 
  min = 0, 
  max = 100, 
  step = 1,
  showValue = true,
  showLabels = true,
  labels,
  formatValue,
  className,
  disabled = false
}) => {
  const [isDragging, setIsDragging] = React.useState(false);
  const [showValueTooltip, setShowValueTooltip] = React.useState(false);
  const sliderRef = React.useRef(null);

  const percentage = ((value - min) / (max - min)) * 100;

  const handleMouseDown = (e) => {
    if (disabled) return;
    setIsDragging(true);
    setShowValueTooltip(true);
    handleMouseMove(e);
  };

  const handleMouseMove = (e) => {
    if (!isDragging && e.type !== 'mousedown') return;
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const relativeX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));
    
    const newValue = min + (percentage / 100) * (max - min);
    const steppedValue = Math.round(newValue / step) * step;
    const clampedValue = Math.max(min, Math.min(max, steppedValue));
    
    onChange(clampedValue);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setShowValueTooltip(false);
  };

  React.useEffect(() => {
    if (isDragging) {
      const handleGlobalMouseMove = (e) => handleMouseMove(e);
      const handleGlobalMouseUp = () => handleMouseUp();

      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('touchmove', handleGlobalMouseMove);
      document.addEventListener('touchend', handleGlobalMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleGlobalMouseMove);
        document.removeEventListener('mouseup', handleGlobalMouseUp);
        document.removeEventListener('touchmove', handleGlobalMouseMove);
        document.removeEventListener('touchend', handleGlobalMouseUp);
      };
    }
  }, [isDragging]);

  const displayValue = formatValue ? formatValue(value) : value;

  return (
    <SliderContainer className={className}>
      <SliderTrack
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        style={{ opacity: disabled ? 0.5 : 1 }}
      >
        <SliderFill
          style={{ width: `${percentage}%` }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.1 }}
        />
        <SliderThumb
          style={{ 
            left: `${percentage}%`,
            cursor: disabled ? 'not-allowed' : isDragging ? 'grabbing' : 'grab'
          }}
          animate={{ 
            left: `${percentage}%`,
            scale: isDragging ? 1.2 : 1 
          }}
          transition={{ duration: 0.1 }}
          whileHover={!disabled ? { scale: 1.1 } : {}}
        >
          <AnimatePresence>
            {(showValue && (isDragging || showValueTooltip)) && (
              <SliderValue
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.2 }}
              >
                {displayValue}
              </SliderValue>
            )}
          </AnimatePresence>
        </SliderThumb>
      </SliderTrack>
      
      {showLabels && (
        <SliderLabels>
          <span>{labels?.min || min}</span>
          <span>{labels?.max || max}</span>
        </SliderLabels>
      )}
    </SliderContainer>
  );
};

export default ThemedSlider;
