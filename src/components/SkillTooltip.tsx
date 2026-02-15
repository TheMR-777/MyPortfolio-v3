import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SkillTooltipProps {
  children: React.ReactNode;
  content: React.ReactNode | null;
  delay?: number;
}

export const SkillTooltip: React.FC<SkillTooltipProps> = ({
  children,
  content,
  delay = 500,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showTooltip = () => {
    if (!content) return;
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ 
              duration: 0.25, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="absolute left-0 bottom-full mb-2 z-50 pointer-events-none"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillTooltip;
