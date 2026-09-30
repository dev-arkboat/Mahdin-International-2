import React from 'react';

export default function ProjectsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Completed Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Project {i}</h3>
              <p className="text-gray-600">Successfully completed logistics operation for client {i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}