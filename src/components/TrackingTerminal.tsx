import React from 'react';
import { TrackingItem } from '../types';

interface TrackingTerminalProps {
  trackingItems: TrackingItem[];
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  onSimulateProgress: (trackingId: string) => void;
}

export default function TrackingTerminal({ trackingItems, searchQuery, onSearchQueryChange, onSimulateProgress }: TrackingTerminalProps) {
  const filtered = trackingItems.filter(item => item.trackingId.includes(searchQuery));

  return (
    <section id="tracking-terminal-section" className="py-16 bg-slate-900 text-green-400">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Live Tracking Terminal</h2>
        <input type="text" placeholder="Search tracking ID..." value={searchQuery} onChange={(e) => onSearchQueryChange(e.target.value)} className="w-full mb-4 p-2 bg-slate-800 text-green-400 border border-green-400 rounded" />
        <div className="space-y-4">
          {filtered.map((item) => (
            <div key={item.trackingId} className="bg-slate-800 p-4 rounded border border-green-400">
              <p><strong>ID:</strong> {item.trackingId}</p>
              <p><strong>Status:</strong> {item.status}</p>
              <p><strong>Location:</strong> {item.location}</p>
              <button onClick={() => onSimulateProgress(item.trackingId)} className="mt-2 px-4 py-1 bg-green-600 text-white rounded">Update Progress</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}