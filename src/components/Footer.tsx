import React from 'react';

interface FooterProps {
  onNavigate: (section: string) => void;
  onOpenTracking: () => void;
}

export default function Footer({ onNavigate, onOpenTracking }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <p>Mahdin International - Professional Logistics & Dispatch</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('home')} className="hover:underline">Home</button></li>
              <li><button onClick={onOpenTracking} className="hover:underline">Track Order</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p>Email: info@mahdin.com</p>
            <p>Phone: +880-1234-567890</p>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center">
          <p>&copy; 2024 Mahdin International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}