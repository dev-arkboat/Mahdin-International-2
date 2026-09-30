import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 glass">
          <Zap className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-slate-300">Welcome to Mahdin International</span>
        </div>

        {/* Main Headline */}
        <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Professional Services</span>
            <br />
            <span className="text-white">for Modern Business</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We deliver reliable logistics, expert consultation, and dedicated support to keep your business running smoothly.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button variant="primary" size="lg" className="flex items-center justify-center gap-2">
            Get Started <ArrowRight size={20} />
          </Button>
          <Button variant="secondary" size="lg">
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-12">
          {[
            { value: '500+', label: 'Deliveries' },
            { value: '99%', label: 'On-Time' },
            { value: '24/7', label: 'Support' },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
