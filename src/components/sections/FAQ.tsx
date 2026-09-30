import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Card from '../ui/Card';
import { FAQ_ITEMS } from '../../data/faq';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Find answers to common questions about our services</p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <Card
              key={item.id}
              className="cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${
                    openId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </div>
              {openId === item.id && (
                <p className="mt-4 text-slate-300 animate-fade-in-up">{item.answer}</p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
