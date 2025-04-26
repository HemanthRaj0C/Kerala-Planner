'use client';

import { useState, useEffect } from 'react';
import Brochure from '@/components/Brochure';
import LoginModal from '@/components/LoginModal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TripHighlights from '@/components/TripHighlights';
import ConvinceUser from '@/components/ConvinceUser';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isConvinceUserOpen, setIsConvinceUserOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [countdown, setCountdown] = useState({
    days: 3,
    hours: 14,
    minutes: 22,
    seconds: 45
  });
  const router = useRouter();
  
  const carouselImages = [
    '/images/shared/kerala-hero.jpg',
    '/images/shared/kerala-backwaters.jpg',
    '/images/shared/kerala-tea-plantations.jpg',
    '/images/shared/kerala-culture.jpg'
  ];

  const keralaFacts = [
    "You'll be sitting at home scrolling Instagram while we're living our best life in Kerala, you fool!",
    "Everyone from the group chat is coming. Even KEVIN is coming, and he hates everything.",
    "Your boring social media needs this trip. Imagine the content you'll miss out on!",
    "We're gonna send you so many amazing pics you'll cry yourself to sleep with FOMO.",
    "SAY YES TO THE TRIP ALREADY, YOU PATHETIC COWARD!"
  ];
  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const factInterval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % keralaFacts.length);
    }, 4000);
    return () => clearInterval(factInterval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const handleJoinJourney = () => {
    router.push('/join-form');
  };

  const handleConvinceClose = () => {
    setIsConvinceUserOpen(false);
  };

  return (
    <main className="min-h-screen text-black">
      <Header onLoginClick={() => setIsLoginModalOpen(true)} />
      
      <section className="relative h-screen">
        {carouselImages.map((image, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 bg-cover bg-center h-full w-full transition-opacity duration-1000 ${index === activeImage ? 'opacity-100' : 'opacity-0'}`} 
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-6xl font-bold text-white mb-3 animate-fade-in-down">Stop Being Lame</h1>
              <p className="text-2xl text-white mt-4 animate-fade-in-up">Kerala Is Waiting (And Everyone's Going Except You)</p>
              
              <div className="mt-6 bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/30 animate-fade-in">
                <p className="text-white text-lg font-medium">{keralaFacts[currentFact]}</p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <button 
                  className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition transform hover:scale-105 duration-300 flex items-center"
                  onClick={handleJoinJourney}
                >
                  <span>Fine, I'll Stop Being Lame</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition flex items-center"
                  onClick={() => setIsLoginModalOpen(true)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  <span>I Need More Convincing (I'm Dense)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce group cursor-pointer"
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
        >
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 px-1 py-1 text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Scroll you DUMBASS
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
      
      <section className="bg-gradient-to-r from-amber-500 to-orange-600 py-8 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white">Time's Running Out, Loser!</h2>
              <p className="text-white/90 mt-2">We need to book your ticket before the group rate expires!</p>
            </div>
            <div className="flex gap-3 text-center">
              <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-lg flex flex-col justify-center">
                <span className="text-xl md:text-2xl font-bold text-orange-600">{countdown.days}</span>
                <span className="text-xs text-gray-600">Days</span>
              </div>
              <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-lg flex flex-col justify-center">
                <span className="text-xl md:text-2xl font-bold text-orange-600">{countdown.hours}</span>
                <span className="text-xs text-gray-600">Hours</span>
              </div>
              <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-lg flex flex-col justify-center">
                <span className="text-xl md:text-2xl font-bold text-orange-600">{countdown.minutes}</span>
                <span className="text-xs text-gray-600">Mins</span>
              </div>
              <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-lg flex flex-col justify-center">
                <span className="text-xl md:text-2xl font-bold text-orange-600">{countdown.seconds}</span>
                <span className="text-xs text-gray-600">Secs</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-yellow-300 rounded-full opacity-20"></div>
        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-red-300 rounded-full opacity-20"></div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">What You'll Miss If You're Stupid</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">Everyone else will make memories without you. Good luck seeing this on Instagram later.</p>
          <TripHighlights />
        </div>
      </section>
      
      <section className="py-16 bg-slate-50 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">The Trip You're Ditching</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">See all the fun we'll have without you. Maybe we'll send you a postcard (but probably not).</p>
          <Brochure />
        </div>
        
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">How Great It'll Be Without You</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden bg-gray-50 border border-gray-200 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 group">
              <div className="h-60 overflow-hidden relative">
                <img 
                  src="/images/shared/male-experience.jpg" 
                  alt="Male experience" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white">Guys Having a Blast</h3>
                    <p className="text-white/90">Without their lame friend (that's you)</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">The boys are going to have epic adventures, hilarious inside jokes, and bonding moments you'll never be part of. Enjoy your FOMO!</p>
                <button 
                  onClick={() => router.push('/experience/male')}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                >
                  See What You're Missing
                </button>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden bg-gray-50 border border-gray-200 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 group">
              <div className="h-60 overflow-hidden relative">
                <img 
                  src="/images/shared/female-experience.jpg" 
                  alt="Female experience" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white">Ladies Living it Up</h3>
                    <p className="text-white/90">Already forgot to invite you</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">The girls are planning spa days, incredible photo ops, and making memories that will last a lifetime. Your invite? We'll think about it.</p>
                <button 
                  onClick={() => router.push('/experience/female')}
                  className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
                >
                  More Fun You'll Miss
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">What Your Friends Really Think</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">Everyone's tired of waiting for you to make up your mind</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition relative">
              <div className="absolute -top-4 -left-4 bg-teal-500 rounded-full w-10 h-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                  <path d="M13.583 17.321C12.553 16.227 12 15 12 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                </svg>
              </div>
              <p className="italic text-gray-600 mb-4 pt-2">I can't believe they're still waffling about this trip. We've been planning this for MONTHS! What a flake.</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="/images/testimonials/sarah.jpg" alt="Sarah M." className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold">Star_King (Your So-Called Friend)</p>
                  <p className="text-sm text-gray-500">Getting tired of your crap</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition relative">
              <div className="absolute -top-4 -left-4 bg-teal-500 rounded-full w-10 h-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                  <path d="M13.583 17.321C12.553 16.227 12 15 12 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                </svg>
              </div>
              <p className="italic text-gray-600 mb-4 pt-2">Seriously? Still thinking about it? This is why we don't invite them to spontaneous stuff anymore. Always a buzzkill.</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="/images/testimonials/james.jpg" alt="James T." className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold">Star_King_2 (Group Chat Admin)</p>
                  <p className="text-sm text-gray-500">About to remove you</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition relative">
              <div className="absolute -top-4 -left-4 bg-teal-500 rounded-full w-10 h-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                  <path d="M13.583 17.321C12.553 16.227 12 15 12 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                </svg>
              </div>
              <p className="italic text-gray-600 mb-4 pt-2">Even I'm going, and I hate traveling. What's their problem? Are they that afraid of having actual fun for once?</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="/images/testimonials/priya.jpg" alt="Priya K." className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold">Star_King_3 (The One Who Hates Everything)</p>
                  <p className="text-sm text-gray-500">Judging you harshly</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <button 
              onClick={() => setIsConvinceUserOpen(true)}
              className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition transform hover:scale-105 duration-300"
            >
              I'm Still A Hopeless Loser
            </button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Places We'll Tag You From</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">We'll make sure to check in at all these spots so you can see what you're missing</p>
          
          <div className="bg-gray-100 rounded-xl p-4 aspect-video relative overflow-hidden group shadow-lg">
            <img 
              src="/images/shared/kerala-map.jpg" 
              alt="Interactive Kerala map" 
              className="w-full h-full object-cover rounded-lg"
            />
            
            {/* Interactive hotspots with enhanced animations */}
            <div className="absolute top-[30%] left-[25%] w-6 h-6 bg-red-500 rounded-full animate-intense-pulse cursor-pointer hover:scale-125 transition-all">
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white px-3 py-1 rounded text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-md">Kochi</span>
            </div>
            <div className="absolute top-[45%] left-[40%] w-6 h-6 bg-red-500 rounded-full animate-intense-pulse cursor-pointer hover:scale-125 transition-all" style={{animationDelay: '0.5s'}}>
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white px-3 py-1 rounded text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-md">Alleppey</span>
            </div>
            <div className="absolute top-[20%] left-[45%] w-6 h-6 bg-red-500 rounded-full animate-intense-pulse cursor-pointer hover:scale-125 transition-all" style={{animationDelay: '1s'}}>
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white px-3 py-1 rounded text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-md">Munnar</span>
            </div>
            <div className="absolute top-[60%] left-[30%] w-6 h-6 bg-red-500 rounded-full animate-intense-pulse cursor-pointer hover:scale-125 transition-all" style={{animationDelay: '1.5s'}}>
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white px-3 py-1 rounded text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-md">Kovalam</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-r from-green-800 to-green-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Seriously, Are You Coming Or Not?</h2>
            <p className="text-lg mb-8">We need to know like RIGHT NOW. We've been planning forever and everyone's tired of waiting for you.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleJoinJourney}
                className="bg-white text-green-800 px-8 py-4 rounded-full hover:bg-green-50 transition transform hover:scale-105 duration-300 font-bold"
              >
                Fine, I'll Come (Finally!)
              </button>
              <button
                onClick={() => router.push('/feedback-form')}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition"
              >
                I Have More Stupid Questions
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white opacity-10"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white opacity-10"></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-white opacity-10"></div>
        </div>
      </section>
      
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
      
      {isConvinceUserOpen && (
        <ConvinceUser 
          onClose={handleConvinceClose}
          onJoin={handleJoinJourney}
          onDecline={handleConvinceClose}
        />
      )}
      
      <Footer />
    </main>
  );
}