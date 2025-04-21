'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoginModal from '@/components/LoginModal';
import Image from 'next/image';

export default function JoinForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDates: '',
    specialRequirements: '',
    expectations: '',
    numberOfTravelers: 1,
    interests: []
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [animation, setAnimation] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const totalSteps = 3;
  
  const availableInterests = [
    { id: 'nature', label: 'Nature & Wildlife', icon: '🌴' },
    { id: 'culture', label: 'Cultural Experience', icon: '🏛️' },
    { id: 'food', label: 'Culinary Delights', icon: '🍛' },
    { id: 'adventure', label: 'Adventure Activities', icon: '🧗‍♀️' },
    { id: 'relaxation', label: 'Relaxation & Spa', icon: '🧘‍♀️' },
    { id: 'photography', label: 'Photography', icon: '📷' },
  ];
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleInterestToggle = (interestId) => {
    setFormData(prevData => {
      const interests = [...prevData.interests];
      if (interests.includes(interestId)) {
        return { ...prevData, interests: interests.filter(id => id !== interestId) };
      } else {
        return { ...prevData, interests: [...interests, interestId] };
      }
    });
  };
  
  const nextStep = () => {
    setAnimation('slide-out');
    setTimeout(() => {
      setActiveStep(current => Math.min(current + 1, totalSteps));
      setAnimation('slide-in');
    }, 300);
  };
  
  const prevStep = () => {
    setAnimation('slide-out-reverse');
    setTimeout(() => {
      setActiveStep(current => Math.max(current - 1, 1));
      setAnimation('slide-in-reverse');
    }, 300);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('joinFormData', JSON.stringify(formData));
    setShowConfetti(true);
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1200);
  };
  
  const getStepValidation = (step) => {
    if (step === 1) {
      return formData.name && formData.email && formData.phone;
    }
    if (step === 2) {
      return formData.preferredDates && formData.numberOfTravelers;
    }
    return true;
  };
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header onLoginClick={() => setIsLoginModalOpen(true)}/>
      
      <section className="py-16 relative">
        {showConfetti && (
          <div className="confetti-container">
            {[...Array(50)].map((_, i) => (
              <div 
                key={i} 
                className="confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`
                }}
              />
            ))}
          </div>
        )}
        
        <div className="container mx-auto px-4 py-24">
          {!isSubmitted ? (
            <>
              <h1 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Join Our Kerala Adventure</h1>
              <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">Embark on an unforgettable journey through God's Own Country</p>
              
              <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden relative">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4 relative">
                  <div className="flex justify-between items-center relative z-10">
                    {[...Array(totalSteps)].map((_, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i + 1 <= activeStep ? 'bg-white text-green-600' : 'bg-green-300 text-white'} font-medium`}>
                          {i + 1}
                        </div>
                        <span className="mt-1 text-xs text-white">
                          {i === 0 ? 'Personal' : i === 1 ? 'Travel' : 'Preferences'}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="absolute -left-2 right-0 h-1 top-1/2 -translate-y-3 mx-12 z-0">
                      <div className="h-full bg-green-300">
                        <div 
                          className="h-full bg-white transition-all duration-300"
                          style={{ width: `${((activeStep - 1) / (totalSteps - 1)) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6 md:p-8">
                  <div className={`form-step ${activeStep === 1 ? 'block' : 'hidden'} ${animation}`}>
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Tell us about yourself</h2>
                    <div className="mb-6">
                      <label htmlFor="name" className="block mb-2 text-gray-700 font-medium">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="phone" className="block mb-2 text-gray-700 font-medium">Phone Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                          </svg>
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                          placeholder="+1 (123) 456-7890"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="text-right mt-8">
                      <button 
                        type="button" 
                        onClick={nextStep}
                        disabled={!getStepValidation(1)}
                        className={`bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2 ml-auto ${!getStepValidation(1) ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        Continue <span className="text-lg">→</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className={`form-step ${activeStep === 2 ? 'block' : 'hidden'} ${animation}`}>
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Travel Details</h2>
                    <div className="mb-6">
                      <label htmlFor="preferredDates" className="block mb-2 text-gray-700 font-medium">Preferred Travel Dates</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="preferredDates"
                          name="preferredDates"
                          value={formData.preferredDates}
                          onChange={handleChange}
                          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                          placeholder="e.g., May 15-30, 2025"
                          required
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Flexibility with dates? Let us know in the special requirements.</p>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="numberOfTravelers" className="block mb-2 text-gray-700 font-medium">Number of Travelers</label>
                      <div className="flex items-center">
                        <button 
                          type="button"
                          onClick={() => setFormData({...formData, numberOfTravelers: Math.max(1, formData.numberOfTravelers - 1)})}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 h-10 w-10 rounded-l-lg flex items-center justify-center transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                        </button>
                        <input
                          type="number"
                          id="numberOfTravelers"
                          name="numberOfTravelers"
                          value={formData.numberOfTravelers}
                          onChange={handleChange}
                          min="1"
                          max="20"
                          className="h-10 border-y border-gray-300 w-16 text-center focus:outline-none"
                          readOnly
                        />
                        <button 
                          type="button"
                          onClick={() => setFormData({...formData, numberOfTravelers: Math.min(20, formData.numberOfTravelers + 1)})}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 h-10 w-10 rounded-r-lg flex items-center justify-center transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                        </button>
                        <span className="ml-3 text-gray-700">
                          {formData.numberOfTravelers === 1 ? 'Person' : 'People'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="specialRequirements" className="block mb-2 text-gray-700 font-medium">Special Requirements</label>
                      <textarea
                        id="specialRequirements"
                        name="specialRequirements"
                        value={formData.specialRequirements}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                        rows="3"
                        placeholder="Accessibility needs, dietary restrictions, etc."
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-between mt-8">
                      <button 
                        type="button" 
                        onClick={prevStep}
                        className="text-gray-600 hover:text-gray-800 font-medium py-3 px-6 rounded-lg transition-all flex items-center gap-2"
                      >
                        <span className="text-lg">←</span> Previous
                      </button>
                      <button 
                        type="button" 
                        onClick={nextStep}
                        disabled={!getStepValidation(2)}
                        className={`bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2 ${!getStepValidation(2) ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        Continue <span className="text-lg">→</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className={`form-step ${activeStep === 3 ? 'block' : 'hidden'} ${animation}`}>
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Your Interests</h2>
                    <p className="text-gray-600 mb-6">Help us customize your Kerala experience by selecting what interests you the most</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                      {availableInterests.map(interest => (
                        <div 
                          key={interest.id}
                          onClick={() => handleInterestToggle(interest.id)}
                          className={`border rounded-xl p-4 text-center cursor-pointer transition-all hover:shadow-md ${
                            formData.interests.includes(interest.id) 
                            ? 'border-green-500 bg-green-50 shadow-sm' 
                            : 'border-gray-200'
                          }`}
                        >
                          <div className="text-4xl mb-2">{interest.icon}</div>
                          <div className="font-medium">{interest.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="expectations" className="block mb-2 text-gray-700 font-medium">What are you most excited about?</label>
                      <textarea
                        id="expectations"
                        name="expectations"
                        value={formData.expectations}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                        rows="3"
                        placeholder="Tell us what you're looking forward to the most..."
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-between mt-8">
                      <button 
                        type="button" 
                        onClick={prevStep}
                        className="text-gray-600 hover:text-gray-800 font-medium py-3 px-6 rounded-lg transition-all flex items-center gap-2"
                      >
                        <span className="text-lg">←</span> Previous
                      </button>
                      <button 
                        type="submit" 
                        className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                      >
                        Submit and Join <span className="text-lg">✓</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-10 rounded-2xl shadow-lg mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-200 to-teal-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                
                <div className="relative">
                  <div className="w-20 h-20 bg-green-500 rounded-full mx-auto flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  
                  <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">You're All Set!</h2>
                  <p className="text-lg mb-6 text-gray-700">Thank you for joining our Kerala adventure!</p>
                  <p className="mb-6">We've received your details and will be in touch soon with more information about the trip.</p>
                  
                  <div className="bg-white p-6 rounded-xl shadow-inner mt-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">What's Next?</h3>
                    <ol className="list-none pl-0 text-left mb-8 space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full text-green-700 font-bold shrink-0">1</span>
                        <span>Check your email for a confirmation from our team</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full text-green-700 font-bold shrink-0">2</span>
                        <span>Complete your payment to secure your spot</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full text-green-700 font-bold shrink-0">3</span>
                        <span>Join our pre-trip orientation session (details to follow)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full text-green-700 font-bold shrink-0">4</span>
                        <span>Pack your bags and get ready for an unforgettable adventure!</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => router.push('/')}
                className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                Return to Home
              </button>
            </div>
          )}
        </div>
      </section>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
      
      <style jsx global>{`
        .form-step {
          transition: all 0.3s ease;
        }
        
        .slide-in {
          animation: slideIn 0.3s forwards;
        }
        
        .slide-out {
          animation: slideOut 0.3s forwards;
        }
        
        .slide-in-reverse {
          animation: slideInReverse 0.3s forwards;
        }
        
        .slide-out-reverse {
          animation: slideOutReverse 0.3s forwards;
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideOut {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(-30px); }
        }
        
        @keyframes slideInReverse {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideOutReverse {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(30px); }
        }
        
        .confetti-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 100;
        }
        
        .confetti {
          position: absolute;
          top: -10px;
          width: 10px;
          height: 20px;
          animation: confetti 3s ease-in-out forwards;
        }
        
        @keyframes confetti {
          0% { transform: translateY(-10px) rotate(0deg); }
          100% { transform: translateY(calc(100vh + 10px)) rotate(360deg); }
        }
      `}</style>
      
      <Footer />
    </main>
  );
}