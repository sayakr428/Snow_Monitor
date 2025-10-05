import { useState } from 'react';
import { Satellite, MapPin, Calendar, Play, Info } from 'lucide-react';
import { Tooltip } from './Tooltip';

interface ControlPanelProps {
  onGenerate: (params: {
    satellite: string;
    region: string;
    startDate: string;
    endDate: string;
  }) => void;
}

const satellites = [
  { id: 'sentinel-2', name: 'Sentinel-2', resolution: '10m' },
  { id: 'landsat-8', name: 'Landsat-8', resolution: '30m' },
  { id: 'modis', name: 'MODIS', resolution: '250m' }
];

const regions = [
  'Uttarakhand, India',
  'Himachal Pradesh, India',
  'Ladakh, India',
  'Nepal',
  'Bhutan',
  'Tibet, China',
  'Kashmir'
];

export function ControlPanel({ onGenerate }: ControlPanelProps) {
  const [satellite, setSatellite] = useState('sentinel-2');
  const [region, setRegion] = useState('Uttarakhand, India');
  const [startDate, setStartDate] = useState('2024-01-01');
  const [endDate, setEndDate] = useState('2024-12-31');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate({ satellite, region, startDate, endDate });
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 mb-8 transition-colors duration-300">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
              <Satellite className="w-4 h-4 text-blue-500" aria-hidden="true" />
              Satellite Imagery
              <Tooltip content="Choose the satellite source for snow cover data. Higher resolution provides more detail but may have less frequent coverage." />
            </label>
            <select
              value={satellite}
              onChange={(e) => setSatellite(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              aria-label="Select satellite imagery type"
            >
              {satellites.map(sat => (
                <option key={sat.id} value={sat.id}>
                  {sat.name} ({sat.resolution} resolution)
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
              <MapPin className="w-4 h-4 text-cyan-500" aria-hidden="true" />
              Region / Location
              <Tooltip content="Select the Himalayan region you want to monitor. Each region has unique snow patterns and coverage." />
            </label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              aria-label="Select region or location"
            >
              {regions.map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
              <Calendar className="w-4 h-4 text-indigo-500" aria-hidden="true" />
              Start Date
              <Tooltip content="Select the beginning of the date range for analysis. Historical data available from 2018." />
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              min="2018-01-01"
              max="2026-12-31"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              aria-label="Select start date"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
              <Calendar className="w-4 h-4 text-indigo-500" aria-hidden="true" />
              End Date
              <Tooltip content="Select the end of the date range for analysis. Must be after the start date." />
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              min={startDate}
              max="2026-12-31"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              aria-label="Select end date"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 focus:ring-4 focus:ring-blue-500/50"
          aria-label="Generate snow cover map"
        >
          <Play className="w-5 h-5" aria-hidden="true" />
          Show Map
        </button>
      </form>
    </div>
  );
}
