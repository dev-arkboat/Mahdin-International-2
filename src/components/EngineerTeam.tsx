import React from 'react';
import { TrackingItem } from '../types';

interface EngineerTeamProps {
  onHireSuccess: (item: TrackingItem) => void;
}

export default function EngineerTeam({ onHireSuccess }: EngineerTeamProps) {
  const team = [
    { name: 'Engr. Kamrul Hasan', role: 'Lead Dispatcher', experience: '15+ years' },
    { name: 'Dispatch Crew A', role: 'Field Engineers', experience: '8+ years' },
    { name: 'Dispatch Crew B', role: 'Field Engineers', experience: '10+ years' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Engineer Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-sm text-gray-500 mb-4">{member.experience}</p>
              <button onClick={() => onHireSuccess({ trackingId: `HIRE${i}`, service: 'Hire', location: 'TBD', status: 'Received', assignedTech: member.name, updates: [] })} className="bg-blue-600 text-white px-4 py-2 rounded">Hire</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}