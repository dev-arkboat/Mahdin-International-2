import React from 'react';
import { Users } from 'lucide-react';
import Card from '../ui/Card';
import { TEAM } from '../../data/team';

export default function Team() {
  return (
    <section id="team" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">Experienced professionals dedicated to your success</p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {TEAM.map((member, index) => (
            <Card key={member.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              {/* Avatar Placeholder */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-1">{member.name}</h3>
              <p className="text-sm text-cyan-400 text-center font-semibold mb-2">{member.role}</p>
              <p className="text-slate-300 text-center text-sm">{member.specialty}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
