import { Loader2 } from 'lucide-react';

export function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 max-w-sm mx-4">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-xl animate-pulse" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
              Processing Data
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Retrieving satellite imagery and analyzing snow coverage patterns...
            </p>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-loading-bar" />
          </div>
        </div>
      </div>
    </div>
  );
}
