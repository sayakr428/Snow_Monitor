import { useState } from 'react';
import { X, ChevronRight, ChevronLeft, Mountain, Satellite, MapPin, Calendar, Play } from 'lucide-react';

interface OnboardingTourProps {
  onClose: () => void;
}

const steps = [
  {
    icon: Mountain,
    title: 'Welcome to Himalayan Snow Monitor',
    description: 'Track and analyze snow coverage across the Himalayan regions using advanced satellite imagery. This quick tour will help you get started.',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    icon: Satellite,
    title: 'Choose Your Satellite',
    description: 'Select from Sentinel-2 (10m resolution), Landsat-8 (30m resolution), or MODIS (250m resolution) based on your needs for detail vs. coverage.',
    color: 'from-blue-600 to-indigo-500'
  },
  {
    icon: MapPin,
    title: 'Select a Region',
    description: 'Pick from major Himalayan regions including Uttarakhand, Himachal Pradesh, Ladakh, Nepal, Bhutan, and more. Each region has unique snow patterns.',
    color: 'from-cyan-500 to-teal-500'
  },
  {
    icon: Calendar,
    title: 'Set Your Date Range',
    description: 'Choose a date range between 2018-2026 to analyze historical trends or monitor current conditions. Snow coverage varies significantly by season.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Play,
    title: 'Generate Your Map',
    description: 'Click "Show Map" to visualize snow coverage data. The system will process satellite imagery and display detailed coverage statistics and visualizations.',
    color: 'from-green-500 to-emerald-500'
  }
];

export function OnboardingTour({ onClose }: OnboardingTourProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const step = steps[currentStep];
  const Icon = step.icon;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-title"
    >
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden">
        <div className="relative">
          <div className={`h-2 bg-gradient-to-r ${step.color}`} />

          <button
            onClick={handleSkip}
            className="absolute top-4 right-4 p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            aria-label="Skip tour"
          >
            <X className="w-5 h-5 text-slate-600 dark:text-slate-400" />
          </button>
        </div>

        <div className="p-8">
          <div className="flex justify-center mb-6">
            <div className={`p-4 bg-gradient-to-br ${step.color} rounded-2xl shadow-lg`}>
              <Icon className="w-12 h-12 text-white" />
            </div>
          </div>

          <h2 id="onboarding-title" className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-3">
            {step.title}
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-center mb-8">
            {step.description}
          </p>

          <div className="flex items-center justify-center gap-2 mb-8">
            {steps.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentStep
                    ? 'w-8 bg-gradient-to-r ' + step.color
                    : 'w-2 bg-slate-300 dark:bg-slate-600'
                }`}
                aria-label={`Step ${idx + 1} of ${steps.length}`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            {currentStep > 0 && (
              <button
                onClick={handlePrevious}
                className="flex-1 px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>
            )}

            <button
              onClick={handleNext}
              className={`${currentStep === 0 ? 'w-full' : 'flex-1'} px-6 py-3 bg-gradient-to-r ${step.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2`}
            >
              {currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
              {currentStep < steps.length - 1 && <ChevronRight className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
