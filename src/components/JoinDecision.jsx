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
        <h2 className="text-3xl font-bold mb-8">Ready for the adventure of a lifetime?</h2>
        
        {/* Countdown Timer */}
        <div className="mb-10">
          <p className="text-lg mb-4">Trip departure in:</p>
          <div className="flex justify-center gap-4">
            <div className="bg-white rounded-lg shadow-md p-4 w-24">
              <div className="text-3xl font-bold text-green-600">{countdown.days}</div>
              <div className="text-gray-500">Days</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 w-24">
              <div className="text-3xl font-bold text-green-600">{countdown.hours}</div>
              <div className="text-gray-500">Hours</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 w-24">
              <div className="text-3xl font-bold text-green-600">{countdown.minutes}</div>
              <div className="text-gray-500">Minutes</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 w-24">
              <div className="text-3xl font-bold text-green-600">{countdown.seconds}</div>
              <div className="text-gray-500">Seconds</div>
            </div>
          </div>
        </div>
        
        <p className="text-xl mb-4">Join our Kerala trip and create memories that will last forever</p>
        <p className="mb-8 text-gray-600">Limited spots available! Reserve yours before they're gone.</p>
        
        {isRegistered ? (
          <div className="bg-green-100 border border-green-300 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-lg font-medium text-green-700">
              You're all set for the trip! We can't wait to see you in Kerala.
            </p>
            <p className="mt-2 text-green-600">
              Check your email for trip updates and preparation tips.
            </p>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={handleYesClick}
              className="bg-green-600 text-white px-10 py-3 rounded-full hover:bg-green-700 transition"
            >
              Yes, I'm In!
            </button>
            <button 
              onClick={handleNoClick}
              className="bg-white border border-green-600 text-green-600 px-10 py-3 rounded-full hover:bg-gray-100 transition"
            >
              Not Sure Yet
            </button>
          </div>
        )}
        
        {/* Trip Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="text-2xl font-bold text-green-600">7 Days</div>
            <div className="text-gray-700">of exploration</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="text-2xl font-bold text-green-600">12+ Experiences</div>
            <div className="text-gray-700">to cherish</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="text-2xl font-bold text-green-600">24 Travelers</div>
            <div className="text-gray-700">maximum group size</div>
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