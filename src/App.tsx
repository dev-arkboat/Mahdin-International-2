import React from 'react';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Team from './components/sections/Team';
import Projects from './components/sections/Projects';
import FAQ from './components/sections/FAQ';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Team />
        <Projects />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
