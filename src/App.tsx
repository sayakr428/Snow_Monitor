import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ControlPanel } from './components/ControlPanel';
import { MapDisplay } from './components/MapDisplay';
import { HelpPanel } from './components/HelpPanel';
import { LoadingOverlay } from './components/LoadingOverlay';
import { OnboardingTour } from './components/OnboardingTour';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mapData, setMapData] = useState(null);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('himalayan-visited');
    if (!hasVisited) {
      setShowOnboarding(true);
      localStorage.setItem('himalayan-visited', 'true');
    }
  }, []);

  const handleGenerateMap = async (params: {
    satellite: string;
    region: string;
    startDate: string;
    endDate: string;
  }) => {
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    const mockData = {
      ...params,
      snowCoverage: Math.floor(Math.random() * 40) + 60,
      resolution: params.satellite === 'Sentinel-2' ? '10m' : params.satellite === 'Landsat-8' ? '30m' : '250m',
      lastUpdated: new Date().toISOString(),
      coordinates: { lat: 30.0668, lng: 79.0193 }
    };

    setMapData(mockData);
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
        <Header onHelpClick={() => setShowHelp(!showHelp)} />

        <main className="relative">
          <HeroSection />

          <div className="container mx-auto px-4 py-12 max-w-7xl">
            <ControlPanel onGenerate={handleGenerateMap} />

            {mapData && (
              <MapDisplay data={mapData} />
            )}
          </div>
        </main>

        {showHelp && <HelpPanel onClose={() => setShowHelp(false)} />}
        {isLoading && <LoadingOverlay />}
        {showOnboarding && <OnboardingTour onClose={() => setShowOnboarding(false)} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
