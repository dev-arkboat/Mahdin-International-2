import React, { useState } from 'react';

interface QuoteEstimatorProps {
  isOpen: boolean;
  onClose: () => void;
  onPreloadBooking: (service: string) => void;
}

export default function QuoteEstimator({ isOpen, onClose, onPreloadBooking }: QuoteEstimatorProps) {
  const [distance, setDistance] = useState(0);
  const estimate = distance * 10;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Quote Estimator</h2>
        <input type="number" placeholder="Distance (km)" value={distance} onChange={(e) => setDistance(Number(e.target.value))} className="w-full mb-4 p-2 border rounded" />
        <p className="mb-4 text-lg font-bold">Estimated Cost: ${estimate}</p>
        <button onClick={() => onPreloadBooking('Logistics')} className="w-full bg-blue-600 text-white py-2 rounded font-bold mb-2">Proceed to Booking</button>
        <button onClick={onClose} className="w-full bg-gray-300 text-black py-2 rounded font-bold">Close</button>
      </div>
    </div>
  );
}