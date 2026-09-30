import React from 'react';

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Reliability</h3>
            <p>24/7 support and tracking</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Experience</h3>
            <p>15+ years in the industry</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Expertise</h3>
            <p>Professional team ready to help</p>
          </div>
        </div>
      </div>
    </section>
  );
}