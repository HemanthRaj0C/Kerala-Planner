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
    days: 10,
    hours: 8,
    minutes: 45,
    seconds: 30
  });
  const router = useRouter();
  
  const carouselImages = [
    '/images/shared/kerala-hero.jpg',
    '/images/shared/kerala-backwaters.jpg',
    '/images/shared/kerala-tea-plantations.jpg',
    '/images/shared/kerala-culture.jpg'
  ];

  const keralaFacts = [
    "Kerala has a 100% literacy rate, the highest in India!",
    "Kerala is home to over 10,000 festivals annually",
    "The backwaters of Kerala stretch for more than 900 km",
    "Kerala's spice trade history dates back 3,000 years"
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
    <main className="min-h-screen">
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
              <h1 className="text-6xl font-bold text-white mb-3 animate-fade-in-down">Discover Kerala</h1>
              <p className="text-2xl text-white mt-4 animate-fade-in-up">God's Own Country Awaits You</p>
              
              <div className="mt-6 bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/30 animate-fade-in">
                <p className="text-white text-lg font-medium">{keralaFacts[currentFact]}</p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <button 
                  className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition transform hover:scale-105 duration-300 flex items-center"
                  onClick={handleJoinJourney}
                >
                  <span>Start Your Journey</span>
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
                  <span>Learn More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
      
      <section className="bg-gradient-to-r from-amber-500 to-orange-600 py-8 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white">Limited Time Offer: Save 15% on Summer Bookings!</h2>
              <p className="text-white/90 mt-2">Book your Kerala adventure before the timer ends</p>
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
          <h2 className="text-3xl font-bold text-center mb-2">Experience Kerala's Magic</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">Discover the rich culture, breathtaking landscapes, and unique experiences that await you</p>
          <TripHighlights />
        </div>
      </section>
      
      <section className="py-16 bg-slate-50 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Your Kerala Journey</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">Flip through our interactive brochure to preview your day-by-day adventure</p>
          <Brochure />
        </div>
        
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Choose Your Experience</h2>
          
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
                    <h3 className="text-2xl font-bold text-white">Male Experience</h3>
                    <p className="text-white/90">Curated adventures for men</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">Our male-focused journey includes thrilling adventure sports, cultural deep dives, and unique local experiences.</p>
                <button 
                  onClick={() => router.push('/experience/male')}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                >
                  Explore This Journey
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
                    <h3 className="text-2xl font-bold text-white">Female Experience</h3>
                    <p className="text-white/90">Designed for women travelers</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">Specially crafted experiences for women featuring wellness retreats, authentic cultural immersion, and safe group adventures.</p>
                <button 
                  onClick={() => router.push('/experience/female')}
                  className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
                >
                  Explore This Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">What Our Travelers Say</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">Hear from those who've experienced the beauty of Kerala with us</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition relative">
              <div className="absolute -top-4 -left-4 bg-teal-500 rounded-full w-10 h-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                  <path d="M13.583 17.321C12.553 16.227 12 15 12 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                </svg>
              </div>
              <p className="italic text-gray-600 mb-4 pt-2">The Kerala trip exceeded all my expectations. The backwaters cruise was magical and our guide knew all the hidden spots!</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="/images/testimonials/sarah.jpg" alt="Sarah M." className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold">Sarah M.</p>
                  <p className="text-sm text-gray-500">Traveled April 2024</p>
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
              <p className="italic text-gray-600 mb-4 pt-2">I've traveled to 42 countries, and Kerala remains one of my favorite destinations. The perfect mix of relaxation and adventure.</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="/images/testimonials/james.jpg" alt="James T." className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold">James T.</p>
                  <p className="text-sm text-gray-500">Traveled November 2023</p>
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
              <p className="italic text-gray-600 mb-4 pt-2">The Ayurvedic treatments and yoga sessions were transformative. I came back feeling like a new person. Worth every penny!</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="/images/testimonials/priya.jpg" alt="Priya K." className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold">Priya K.</p>
                  <p className="text-sm text-gray-500">Traveled January 2024</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <button 
              onClick={() => setIsConvinceUserOpen(true)}
              className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition transform hover:scale-105 duration-300"
            >
              Still Not Convinced?
            </button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Explore Our Route</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">Discover the beautiful locations you'll visit on your Kerala journey</p>
          
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
            <h2 className="text-4xl font-bold mb-4">Ready to Experience Kerala?</h2>
            <p className="text-lg mb-8">Join us for the adventure of a lifetime. Limited spots available for our next departure.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleJoinJourney}
                className="bg-white text-green-800 px-8 py-4 rounded-full hover:bg-green-50 transition transform hover:scale-105 duration-300 font-bold"
              >
                Book Your Adventure Now
              </button>
              <button
                onClick={() => router.push('/feedback-form')}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition"
              >
                Ask Us a Question
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