'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ConvinceUser from './ConvinceUser';

export default function JoinDecision() {
  const router = useRouter();
  const [showConvinceModal, setShowConvinceModal] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Set trip date to June 15, 2025
  useEffect(() => {
    const tripDate = new Date('June 15, 2025').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = tripDate - now;
      
      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Check if user is already registered
  const [isRegistered, setIsRegistered] = useState(false);
  useEffect(() => {
    const registered = localStorage.getItem('joinedTrip') === 'true';
    setIsRegistered(registered);
  }, []);
  
  const handleYesClick = () => {
    router.push('/join-form');
  };
  
  const handleNoClick = () => {
    setShowConvinceModal(true);
  };
  
  const handleFinalNo = () => {
    router.push('/feedback-form');
  };
  
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-3">The Decision That Will Define Your Entire Summer</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Time is running out and someone (you) still hasn't committed to our epic trip. We've waited long enough. What's your answer?
        </p>
        
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-3 text-green-700">Trip Countdown Timer</h3>
          <p className="mb-4">The trip starts with or without your indecisive self in:</p>
          <div className="flex justify-center gap-4">
            <div className="bg-green-100 p-3 rounded-lg w-20">
              <div className="text-3xl font-bold text-green-800">{countdown.days}</div>
              <div className="text-sm text-green-600">Days</div>
            </div>
            <div className="bg-green-100 p-3 rounded-lg w-20">
              <div className="text-3xl font-bold text-green-800">{countdown.hours}</div>
              <div className="text-sm text-green-600">Hours</div>
            </div>
            <div className="bg-green-100 p-3 rounded-lg w-20">
              <div className="text-3xl font-bold text-green-800">{countdown.minutes}</div>
              <div className="text-sm text-green-600">Minutes</div>
            </div>
            <div className="bg-green-100 p-3 rounded-lg w-20">
              <div className="text-3xl font-bold text-green-800">{countdown.seconds}</div>
              <div className="text-sm text-green-600">Seconds</div>
            </div>
          </div>
        </div>
        
        {isRegistered ? (
          <div className="bg-green-100 p-6 rounded-lg border border-green-300">
            <div className="text-2xl font-bold text-green-700 mb-2">You're In! (Finally made a good decision)</div>
            <p className="text-gray-700">
              Congratulations on not being lame! Pack your bags and prepare for the adventure of a lifetime. We'll send details to your email shortly.
            </p>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={handleYesClick}
              className="bg-green-600 text-white px-10 py-3 rounded-full hover:bg-green-700 transition"
            >
              Yes, I'm Not A Loser!
            </button>
            <button 
              onClick={handleNoClick}
              className="bg-white border border-green-600 text-green-600 px-10 py-3 rounded-full hover:bg-gray-100 transition"
            >
              I Need More Convincing
            </button>
          </div>
        )}
        
        {/* Trip Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="text-2xl font-bold text-green-600">7 Days</div>
            <div className="text-gray-700">of memories you'll miss</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="text-2xl font-bold text-green-600">12+ Experiences</div>
            <div className="text-gray-700">your boring life needs</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="text-2xl font-bold text-green-600">24 Travelers</div>
            <div className="text-gray-700">who will talk about this forever</div>
          </div>
        </div>
      </div>
      
      {/* Convince Modal */}
      {showConvinceModal && (
        <ConvinceUser 
          onClose={() => setShowConvinceModal(false)}
          onJoin={handleYesClick}
          onDecline={handleFinalNo}
        />
      )}
    </section>
  );
}