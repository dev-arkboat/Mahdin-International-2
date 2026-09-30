import React;

interface HeaderProps {
  onNavigate: (section: string) => void;
  activeSection: string;
  onOpenTracking: () => void;
  onOpenEstimator: () => void;
}

export default function Header({ onNavigate, activeSection, onOpenTracking, onOpenEstimator }: HeaderProps) {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Mahdin International</div>
        <div className="flex gap-4">
          <button onClick={() => onNavigate('home')} className={activeSection === 'home' ? 'font-bold' : ''}>Home</button>
          <button onClick={() => onNavigate('services')} className={activeSection === 'services' ? 'font-bold' : ''}>Services</button>
          <button onClick={onOpenTracking}>Tracking</button>
          <button onClick={onOpenEstimator}>Estimator</button>
        </div>
      </nav>
    </header>
  );
}