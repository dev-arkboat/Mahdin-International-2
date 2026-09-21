import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import BookingForm from './components/BookingForm';
import TrackingTerminal from './components/TrackingTerminal';
import ProjectsSection from './components/ProjectsSection';
import QuoteEstimator from './components/QuoteEstimator';
import FAQ from './components/FAQ';
import EngineerTeam from './components/EngineerTeam';
import Footer from './components/Footer';
import ContactWidget from './components/ContactWidget';

import { PRELOADED_TRACKING } from './data';
import { TrackingItem, TrackingStatus, TrackingHistory } from './types';
import { triggerBookingSuccessConfetti, triggerServiceCompletedConfetti } from './utils/confetti';
import { 
  Building2, 
  Wrench, 
  Phone, 
  Mail, 
  MapPin, 
  AlertCircle, 
  Clock, 
  CheckCircle2, 
  BellRing,
  Award,
  BookOpenCheck
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [preselectedService, setPreselectedService] = useState('');
  const [trackingItems, setTrackingItems] = useState<TrackingItem[]>(() => {
    // Attempt local storage persistence
    const saved = localStorage.getItem('mahdin_tracking_tickets');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* fallback */ }
    }
    return PRELOADED_TRACKING;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);

  // Global visual toast alert layout
  const [toastMessage, setToastMessage] = useState<{ text: string, type: 'info' | 'success' | 'alert' } | null>(null);

  useEffect(() => {
    localStorage.setItem('mahdin_tracking_tickets', JSON.stringify(trackingItems));
  }, [trackingItems]);

  const triggerToast = (text: string, type: 'info' | 'success' | 'alert' = 'success') => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleBookingSuccess = (newTrackItem: TrackingItem) => {
    setTrackingItems((prev) => [newTrackItem, ...prev]);
    setSearchQuery(newTrackItem.trackingId);
    triggerToast(`Booking submitted! New Live Track Ticket Generated: ${newTrackItem.trackingId}`, 'success');
    triggerBookingSuccessConfetti();
  };

  // Simulates real-time dispatcher milestone advancement
  const handleSimulateProgress = (trackingId: string) => {
    setTrackingItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.trackingId !== trackingId) return item;

        const statuses: TrackingStatus[] = ['Received', 'Assigned', 'In Progress', 'Inspection', 'Completed'];
        const currentIndex = statuses.indexOf(item.status);
        if (currentIndex === -1 || currentIndex === statuses.length - 1) {
          return item; // Already completed or invalid
        }

        const nextStatus = statuses[currentIndex + 1];
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const currentDateStr = new Date().toISOString().split('T')[0];

        let simulationNote = '';
        let simulatedTech = item.assignedTech;

        switch (nextStatus) {
          case 'Assigned':
            simulatedTech = 'Engr. Kamrul Hasan & Dispatch Crew B';
            simulationNote = `Dispatcher team assigned. Vehicle #09-D loaded with calibrated testing rigs and dispatched from central Jatrabari hub. Estimated transit hour to site: 45 minutes.`;
            break;
          case 'In Progress':
            simulationNote = `Technicians arrived on-site in ${item.location}. Disconnecting mains power for isolation checks. Heavy recalibration and sensor auditing initiated.`;
            break;
          case 'Inspection':
            simulationNote = `Servicing actions finalized. Mounted multimetre diagnostic test is successful. Standard load test metrics compiled. system holds 100% stable voltage and heat values.`;
            break;
          case 'Completed':
            simulationNote = `Official servicing sign-off completed by client. Warranty seal applied. Digital safety logs sent to primary customer contact phone and mailbox. Site reinstated.`;
            triggerServiceCompletedConfetti();
            break;
          default:
            simulationNote = `Milestone status modernized to ${nextStatus}.`;
        }

        const freshLog: TrackingHistory = {
          timestamp: `${currentDateStr} ${currentTime}`,
          status: nextStatus,
          note: simulationNote,
          location: item.location
        };

        const updatedItem: TrackingItem = {
          ...item,
          status: nextStatus,
          assignedTech: simulatedTech,
          updates: [freshLog, ...item.updates]
        };

        triggerToast(`Ticket ${trackingId} updated to: ${nextStatus}!`, 'info');
        return updatedItem;
      });
    });
  };

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleQuickTrackSearch = (code: string) => {
    setSearchQuery(code);
    setActiveSection('tracking');
    const el = document.getElementById('tracking-terminal-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePreloadBooking = (serviceName: string) => {
    setPreselectedService(serviceName);
    setActiveSection('book');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-slate-900 scroll-smooth">
      
      {/* Absolute Dynamic Slide-in Toast Banner */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 animate-in slide-in-from-top-12 duration-300">
          <div className={`rounded-2xl border p-4 shadow-xl flex items-start gap-3 text-white ${
            toastMessage.type === 'success' 
              ? 'bg-emerald-900 border-emerald-500' 
              : toastMessage.type === 'alert'
                ? 'bg-rose-900 border-rose-500'
                : 'bg-indigo-950 border-indigo-500'
          }`}>
            <BellRing className="h-5 w-5 shrink-0 text-blue-400 mt-0.5 animate-bounce" />
            <div className="space-y-0.5">
              <span className="font-bold text-xs uppercase font-mono block">Terminal Message</span>
              <p className="text-xs text-slate-100">{toastMessage.text}</p>
            </div>
          </div>
        </div>
      )}

      {/* Corporate Header element with customized logo */}
      <Header 
        onNavigate={handleNavigate} 
        activeSection={activeSection}
        onOpenTracking={() => {
          const el = document.getElementById('tracking-terminal-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Main Sections */}
      <main className="grow">
        
        {/* Hero Section */}
        <Hero 
          onScrollToSection={handleNavigate}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
          onOpenTracking={() => {
            const el = document.getElementById('tracking-terminal-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onQuickTrackSearch={handleQuickTrackSearch}
        />

        {/* Dynamic Services display */}
        <Services onBookService={handlePreloadBooking} />

        {/* Why Choose Us & Statistics layout */}
        <WhyChooseUs />

        {/* Our Engineer Team Directory & Hiring Panel */}
        <EngineerTeam onHireSuccess={handleBookingSuccess} />

        {/* Live Tracking Engine/Terminal */}
        <TrackingTerminal 
          trackingItems={trackingItems}
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
          onSimulateProgress={handleSimulateProgress}
        />

        {/* Dynamic completed projects display */}
        <ProjectsSection />

        {/* FAQ - Support Resource Center Accordions */}
        <FAQ />

        {/* Scheduling Booking Form */}
        <BookingForm 
          preselectedService={preselectedService} 
          onBookingSuccess={handleBookingSuccess}
        />

      </main>

      {/* Cost Estimator Drawer Modal */}
      <QuoteEstimator 
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onPreloadBooking={handlePreloadBooking}
      />

      {/* Footer Details */}
      <Footer 
        onNavigate={handleNavigate} 
        onOpenTracking={() => {
          const el = document.getElementById('tracking-terminal-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Floating WhatsApp and Phone Support Widget */}
      <ContactWidget />

    </div>
  );
}
