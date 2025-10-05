import { MapPin, Satellite, Calendar, Layers, TrendingUp, ArrowUpRight, ArrowDownRight, BarChart3 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface MapDisplayProps {
  data: {
    satellite: string;
    region: string;
    startDate: string;
    endDate: string;
    snowCoverage: number;
    resolution: string;
    lastUpdated: string;
  };
}

interface YearlyData {
  year: number;
  coverage: number;
  change: number;
}

export function MapDisplay({ data }: MapDisplayProps) {
  const [yearlyComparison, setYearlyComparison] = useState<YearlyData[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    const startYear = new Date(data.startDate).getFullYear();
    const endYear = new Date(data.endDate).getFullYear();

    const years: YearlyData[] = [];
    for (let year = startYear; year <= endYear; year++) {
      const baseCoverage = 75;
      const randomVariation = Math.floor(Math.random() * 20) - 10;
      const coverage = Math.max(50, Math.min(95, baseCoverage + randomVariation));
      const previousCoverage = years.length > 0 ? years[years.length - 1].coverage : coverage;
      const change = coverage - previousCoverage;

      years.push({ year, coverage, change });
    }

    setYearlyComparison(years);
  }, [data.startDate, data.endDate]);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-colors duration-300">
        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Snow Cover Analysis
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            {data.region} • {new Date(data.startDate).toLocaleDateString()} to {new Date(data.endDate).toLocaleDateString()}
          </p>
        </div>

        <div className="aspect-video bg-gradient-to-br from-blue-100 via-cyan-50 to-slate-100 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4 p-8">
              <div className="inline-block p-4 bg-white/90 dark:bg-slate-800/90 rounded-2xl shadow-lg backdrop-blur">
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {data.snowCoverage}%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                  Snow Coverage
                </div>
              </div>

              <div className="text-sm text-slate-500 dark:text-slate-400 bg-white/80 dark:bg-slate-800/80 px-4 py-2 rounded-lg backdrop-blur">
                Mock visualization - Integration with mapping service required for live data
              </div>
            </div>
          </div>

          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 600">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="800" height="600" fill="url(#grid)" />
          </svg>

          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-slate-50 dark:bg-slate-900/50">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Satellite className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Satellite
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                {data.satellite.replace('-', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
              <Layers className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Resolution
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                {data.resolution}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
              <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Region
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                {data.region.split(',')[0]}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Coverage
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                {data.snowCoverage}%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Data Range:</strong> This analysis covers the period from {new Date(data.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} to {new Date(data.endDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}.
            Snow coverage patterns may vary significantly based on seasonal changes and climate conditions.
          </div>
        </div>
      </div>

      {yearlyComparison.length > 1 && (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-colors duration-300">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                Year-on-Year Comparison
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Historical snow coverage trends from {yearlyComparison[0].year} to {yearlyComparison[yearlyComparison.length - 1].year}
              </p>
            </div>
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors"
            >
              <BarChart3 className="w-4 h-4" />
              {showComparison ? 'Hide' : 'Show'} Chart
            </button>
          </div>

          {showComparison && (
            <div className="p-6 space-y-4">
              <div className="grid gap-3">
                {yearlyComparison.map((yearData, index) => (
                  <div
                    key={yearData.year}
                    className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900/70 transition-colors"
                  >
                    <div className="w-16 text-center">
                      <div className="text-lg font-bold text-slate-900 dark:text-white">
                        {yearData.year}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                          {yearData.coverage}% Coverage
                        </span>
                        {index > 0 && (
                          <span className={`flex items-center gap-1 text-xs font-medium ${
                            yearData.change > 0
                              ? 'text-green-600 dark:text-green-400'
                              : yearData.change < 0
                              ? 'text-red-600 dark:text-red-400'
                              : 'text-slate-500'
                          }`}>
                            {yearData.change > 0 ? (
                              <ArrowUpRight className="w-3 h-3" />
                            ) : yearData.change < 0 ? (
                              <ArrowDownRight className="w-3 h-3" />
                            ) : null}
                            {yearData.change > 0 ? '+' : ''}{yearData.change}%
                          </span>
                        )}
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500"
                          style={{ width: `${yearData.coverage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-1">
                      Average Coverage
                    </div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">
                      {Math.round(yearlyComparison.reduce((sum, y) => sum + y.coverage, 0) / yearlyComparison.length)}%
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-1">
                      Highest Year
                    </div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {yearlyComparison.reduce((max, y) => y.coverage > max.coverage ? y : max).year}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-1">
                      Lowest Year
                    </div>
                    <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                      {yearlyComparison.reduce((min, y) => y.coverage < min.coverage ? y : min).year}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
