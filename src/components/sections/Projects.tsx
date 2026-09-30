import React from 'react';
import { Calendar, Folder } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { PROJECTS } from '../../data/projects';

export default function Projects() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">Recent Projects</h2>
          <p className="section-subtitle">Successful implementations across multiple sectors</p>
        </div>

        {/* Projects Timeline */}
        <div className="space-y-6">
          {PROJECTS.map((project, index) => (
            <Card
              key={project.id}
              className="animate-fade-in-up border-l-4 border-l-cyan-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Folder className="w-5 h-5 text-cyan-400" />
                    <Badge variant="info">{project.category}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    {new Date(project.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
