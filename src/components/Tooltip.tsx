import { Info } from 'lucide-react';
import { useState } from 'react';

interface TooltipProps {
  content: string;
}

export function Tooltip({ content }: TooltipProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        className="text-slate-400 hover:text-blue-500 transition-colors"
        aria-label="More information"
      >
        <Info className="w-4 h-4" />
      </button>

      {show && (
        <div className="absolute left-0 top-6 z-50 w-64 p-3 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded-lg shadow-xl border border-slate-700 dark:border-slate-600">
          <div className="absolute -top-1 left-2 w-2 h-2 bg-slate-900 dark:bg-slate-700 border-l border-t border-slate-700 dark:border-slate-600 transform rotate-45" />
          {content}
        </div>
      )}
    </div>
  );
}
