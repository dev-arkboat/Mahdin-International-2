import React, { useState } from 'react';

export default function FAQ() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const faqs = [
    { q: 'How do I track my order?', a: 'Use our live tracking terminal with your tracking ID' },
    { q: 'What are your service hours?', a: 'We operate 24/7 for all customers' },
    { q: 'How can I contact support?', a: 'Use the contact widget or call our support team' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow">
              <button onClick={() => setExpanded(expanded === i ? null : i)} className="w-full text-left font-bold">{faq.q}</button>
              {expanded === i && <p className="mt-2 text-gray-600">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}