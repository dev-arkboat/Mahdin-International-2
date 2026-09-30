import React from 'react';

interface HeroProps {
  onScrollToSection: (section: string) => void;
  onOpenEstimator: () => void;
  onOpenTracking: () => void;
  onQuickTrackSearch: (code: string) => void;
}

export default function Hero({ onScrollToSection, onOpenEstimator, onOpenTracking, onQuickTrackSearch }: HeroProps) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Mahdin International</h1>
        <p className="text-xl mb-8">Professional logistics and dispatch services</p>
        <button onClick={onOpenTracking} className="bg-white text-blue-600 px-6 py-2 rounded font-bold">Track Your Order</button>
      </div>
    </section>
  );
}