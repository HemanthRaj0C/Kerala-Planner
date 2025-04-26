'use client';

import { useState } from 'react';

export default function ConvinceUser({ onClose, onJoin, onDecline }) {
  const [currentReason, setCurrentReason] = useState(0);

  const reasons = [
    {
      title: "We All Know You've Got Nothing Better To Do",
      description: "Let's be honest, what else are you doing? Sitting around watching Netflix? This is your chance to finally have something interesting to talk about.",
      image: "/images/convince/experience.jpg"
    },
    {
      title: "Your Social Media Needs This Desperately",
      description: "Your Instagram feed is as boring as your excuses. These photos will finally make people think you have an actual life outside your apartment.",
      image: "/images/convince/pricing.jpg"
    },
    {
      title: "FOMO Will Destroy You If You Miss This",
      description: "We're all going to have the time of our lives, and you'll be stuck at home hearing about it for YEARS. Is that what you want?",
      image: "/images/convince/group.jpg"
    }
  ];

  const nextReason = () => {
    setCurrentReason((prev) => (prev < reasons.length - 1 ? prev + 1 : prev));
  };

  const prevReason = () => {
    setCurrentReason((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const testimonials = [
    {
      quote: "I almost didn't go because I had 'work'. Best decision I ever made was ditching that excuse and going anyway!",
      author: "Star_King (who actually knows how to have fun)"
    },
    {
      quote: "When they said Kerala was life-changing, I rolled my eyes. Now I won't shut up about it. Don't be me before the trip.",
      author: "Star_King_2 (used to be boring like you)"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/20 backdrop-blur-sm">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto shadow-xl">
        {/* Close button */}
        <div className="flex justify-end p-2 sticky top-0 bg-white z-10">
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Still Making Lame Excuses?</h2>

          {/* Carousel */}
          <div className="mb-8">
            <div className="relative">
              <img 
                src={reasons[currentReason].image} 
                alt={reasons[currentReason].title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute top-1/2 left-0 right-0 flex justify-between px-2 -translate-y-1/2">
                <button 
                  onClick={prevReason}
                  disabled={currentReason === 0}
                  className={`bg-white p-1 rounded-full ${currentReason === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                  aria-label="Previous reason"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextReason}
                  disabled={currentReason === reasons.length - 1}
                  className={`bg-white p-1 rounded-full ${currentReason === reasons.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                  aria-label="Next reason"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            <h3 className="text-xl font-bold mt-4 mb-2">{reasons[currentReason].title}</h3>
            <p>{reasons[currentReason].description}</p>
          </div>

          {/* Testimonials */}
          <div className="bg-green-50 p-4 rounded-lg mb-8">
            <h3 className="text-lg font-bold mb-3">People who once were as lame as you:</h3>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={index > 0 ? 'mt-4 pt-4 border-t' : ''}>
                <p className="italic">"{testimonial.quote}"</p>
                <p className="text-sm text-gray-600 mt-1">— {testimonial.author}</p>
              </div>
            ))}
          </div>

          {/* Special Offer */}
          <div className="bg-blue-50 p-4 rounded-lg mb-8">
            <h3 className="text-lg font-bold mb-1">Overly Dramatic Warning:</h3>
            <p>If you don't come with us, you'll probably regret it for the rest of your sad, unadventurous life. Just saying.</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onJoin}
              className="bg-green-600 text-white px-10 py-3 rounded-full hover:bg-green-700 transition"
            >
              Fine, I'll Join You Idiots
            </button>
            <button
              onClick={onDecline}
              className="bg-white border border-gray-300 text-gray-700 px-10 py-3 rounded-full hover:bg-gray-100 transition"
            >
              I Hate Fun and Happiness
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
