import { X, HelpCircle, Satellite, MapPin, Calendar } from 'lucide-react';

interface HelpPanelProps {
  onClose: () => void;
}

export function HelpPanel({ onClose }: HelpPanelProps) {
  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="help-title"
    >
      <div
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 p-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <HelpCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 id="help-title" className="text-2xl font-bold text-slate-900 dark:text-white">
              Help & FAQ
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            aria-label="Close help panel"
          >
            <X className="w-6 h-6 text-slate-600 dark:text-slate-400" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <section>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Satellite className="w-5 h-5 text-blue-500" />
              Satellite Imagery Types
            </h3>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg">
                <strong className="text-slate-900 dark:text-white">Sentinel-2:</strong> High-resolution optical imagery with 10m resolution. Best for detailed analysis of smaller regions. Updates every 5 days.
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg">
                <strong className="text-slate-900 dark:text-white">Landsat-8:</strong> Medium-resolution imagery with 30m resolution. Excellent balance between coverage and detail. Updates every 16 days.
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg">
                <strong className="text-slate-900 dark:text-white">MODIS:</strong> Lower-resolution imagery with 250m resolution. Ideal for large-scale regional monitoring. Daily updates.
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-cyan-500" />
              Selecting Regions
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
              Choose from major Himalayan regions including:
            </p>
            <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1 list-disc list-inside">
              <li>Uttarakhand, India - Home to Gangotri and Yamunotri glaciers</li>
              <li>Himachal Pradesh, India - Contains numerous glaciers and snow peaks</li>
              <li>Ladakh, India - High-altitude cold desert with permanent snow cover</li>
              <li>Nepal - Includes Mount Everest and surrounding ranges</li>
              <li>Tibet, China - Vast plateau with extensive snow coverage</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-500" />
              Date Range Selection
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Select a date range between 2018 and 2026 to analyze historical trends or monitor current conditions.
              Snow coverage varies significantly by season:
            </p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                <strong className="text-blue-900 dark:text-blue-300">Winter (Dec-Feb):</strong> Maximum coverage
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <strong className="text-green-900 dark:text-green-300">Spring (Mar-May):</strong> Gradual melt
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                <strong className="text-orange-900 dark:text-orange-300">Summer (Jun-Aug):</strong> Minimum coverage
              </div>
              <div className="bg-cyan-50 dark:bg-cyan-900/20 p-3 rounded-lg">
                <strong className="text-cyan-900 dark:text-cyan-300">Autumn (Sep-Nov):</strong> Fresh snowfall
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                  How accurate is the snow coverage data?
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Accuracy depends on the satellite chosen and cloud coverage. Sentinel-2 provides the highest accuracy for detailed analysis.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                  Can I download the data?
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  This is a demonstration interface. For production access, contact your administrator for data export capabilities.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                  Why is the map showing mock data?
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  This demo uses simulated data for visualization. Integration with live satellite APIs requires additional configuration and credentials.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="sticky bottom-0 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-700 p-6">
          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all duration-200"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
}
