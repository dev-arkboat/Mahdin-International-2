import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function ContactWidget() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
      <button className="bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition flex items-center gap-2">
        <MessageCircle className="h-6 w-6" />
        <span className="hidden sm:inline">WhatsApp</span>
      </button>
      <button className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition flex items-center gap-2">
        <Phone className="h-6 w-6" />
        <span className="hidden sm:inline">Call</span>
      </button>
    </div>
  );
}