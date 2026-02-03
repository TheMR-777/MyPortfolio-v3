import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface DetailSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const DetailSheet: React.FC<DetailSheetProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  subtitle,
  children 
}) => {
  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Subtle, not blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-overlay z-40"
            aria-hidden="true"
          />
          
          {/* Sheet Panel - Mica styled, solid background */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 40,
              mass: 0.8
            }}
            className="fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] lg:w-[540px] flex flex-col bg-content border-l border-stroke shadow-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sheet-title"
          >
            {/* Header */}
            <header className="flex-shrink-0 px-6 py-5 border-b border-divider bg-mica">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <h2 
                    id="sheet-title" 
                    className="text-lg font-semibold text-text-primary tracking-tight truncate"
                  >
                    {title}
                  </h2>
                  {subtitle && (
                    <p className="text-sm text-text-tertiary mt-0.5">
                      {subtitle}
                    </p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="flex-shrink-0 p-2 -m-2 rounded-lg text-text-tertiary hover:text-text-primary hover:bg-layer-hover transition-colors"
                  aria-label="Close panel"
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>
            </header>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6 space-y-6">
                {children}
              </div>
            </div>
            
            {/* Footer hint */}
            <footer className="flex-shrink-0 px-6 py-3 border-t border-divider bg-mica">
              <p className="text-[11px] text-text-disabled text-center">
                Press <kbd className="px-1.5 py-0.5 rounded bg-layer border border-stroke text-text-tertiary font-mono">Esc</kbd> to close
              </p>
            </footer>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default DetailSheet;
