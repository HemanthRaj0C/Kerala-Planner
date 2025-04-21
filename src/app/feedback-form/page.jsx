'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoginModal from '@/components/LoginModal';
import Image from 'next/image';

export default function FeedbackForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    otherPlans: '',
    futureInterest: 'yes',
    improvements: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [animation, setAnimation] = useState('');
  const totalSteps = 3;
  
  // For confetti effect on submit
  const [showConfetti, setShowConfetti] = useState(false);
  
  // For emoji rating
  const [emojiRating, setEmojiRating] = useState(null);
  const emojis = ['😔', '🙁', '😐', '🙂', '😄'];
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleEmojiSelect = (rating) => {
    setEmojiRating(rating);
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
    // Store feedback in localStorage or send to API
    const finalData = {
      ...formData,
      emojiRating
    };
    localStorage.setItem('feedbackFormData', JSON.stringify(finalData));
    setShowConfetti(true);
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1500);
  };
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-x-hidden">
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
      <h1 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">We'd Love Your Feedback</h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">Your thoughts help us create better experiences for future travelers</p>
      
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Progress indicator - Fixed */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 relative">
          <div className="flex justify-between items-center relative z-10">
            {[...Array(totalSteps)].map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i + 1 <= activeStep ? 'bg-white text-blue-600' : 'bg-blue-300 text-white'} font-medium`}>
                  {i + 1}
                </div>
                <span className="mt-1 text-xs text-white">
                  {i === 0 ? 'Info' : i === 1 ? 'Details' : 'Improve'}
                </span>
              </div>
            ))}
          </div>
          {/* Fixed progress line */}
          <div className="absolute left-0 right-0 h-1 top-1/2 -translate-y-3 mx-12 z-0">
            <div className="h-full bg-blue-300">
              <div 
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${((activeStep - 1) / (totalSteps - 1)) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          <div className={`form-step ${activeStep === 1 ? 'block' : 'hidden'} ${animation}`}>
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-gray-700 font-medium">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                placeholder="Enter your name"
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
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div className="text-right mt-8">
              <button 
                type="button" 
                onClick={nextStep}
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                Next Step <span className="text-lg">→</span>
              </button>
            </div>
          </div>
          
          <div className={`form-step ${activeStep === 2 ? 'block' : 'hidden'} ${animation}`}>
            <div className="mb-6">
              <label htmlFor="reason" className="block mb-2 text-gray-700 font-medium">Why did you decide not to join the Kerala trip?</label>
              <div className="relative">
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select a reason</option>
                  <option value="budget">Budget constraints</option>
                  <option value="timing">Bad timing</option>
                  <option value="destination">Not interested in Kerala as a destination</option>
                  <option value="other">Other reasons</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
            
            {formData.reason === 'other' && (
              <div className="mb-6 animate-fade-in">
                <label htmlFor="otherPlans" className="block mb-2 text-gray-700 font-medium">What are your travel plans instead?</label>
                <textarea
                  id="otherPlans"
                  name="otherPlans"
                  value={formData.otherPlans}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  rows="3"
                  placeholder="Tell us about your alternative travel plans..."
                ></textarea>
              </div>
            )}
            
            <div className="mb-6">
              <p className="block mb-3 text-gray-700 font-medium">Would you consider a Kerala trip in the future?</p>
              <div className="flex flex-wrap gap-4">
                {['yes', 'no', 'maybe'].map((option) => (
                  <label key={option} className="interest-option">
                    <input
                      type="radio"
                      name="futureInterest"
                      value={option}
                      checked={formData.futureInterest === option}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <div className={`px-6 py-3 rounded-full cursor-pointer transition-all ${formData.futureInterest === option 
                      ? 'bg-blue-100 border-blue-500 border-2 text-blue-700 font-medium shadow-md' 
                      : 'bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200'}`}>
                      {option === 'yes' ? 'Definitely!' : option === 'no' ? 'Not likely' : 'Perhaps'}
                    </div>
                  </label>
                ))}
              </div>
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
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                Next Step <span className="text-lg">→</span>
              </button>
            </div>
          </div>
          
          <div className={`form-step ${activeStep === 3 ? 'block' : 'hidden'} ${animation}`}>
            <div className="mb-6">
              <label htmlFor="improvements" className="block mb-2 text-gray-700 font-medium">How can we improve our trip offerings?</label>
              <textarea
                id="improvements"
                name="improvements"
                value={formData.improvements}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                rows="4"
                placeholder="Your suggestions for improvement..."
              ></textarea>
            </div>
            
            <div className="mb-8">
              <p className="block mb-3 text-gray-700 font-medium">How would you rate our current trip offerings?</p>
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl">
                {emojis.map((emoji, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleEmojiSelect(index)}
                    className={`emoji-rating text-4xl transition-transform ${emojiRating === index ? 'scale-125' : 'opacity-70 hover:opacity-100 hover:scale-110'}`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
              {emojiRating !== null && (
                <p className="text-center mt-2 text-sm text-gray-500">
                  {emojiRating === 0 ? 'Very Disappointed' :
                   emojiRating === 1 ? 'Not Great' :
                   emojiRating === 2 ? 'Average' :
                   emojiRating === 3 ? 'Good' : 'Excellent!'}
                </p>
              )}
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
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                Submit Feedback <span className="text-lg">✓</span>
              </button>
            </div>
          </div>
        </form>
        
        {/* Decoration images */}
        <div className="absolute -bottom-10 -left-10 opacity-10 pointer-events-none">
          <div className="w-40 h-40 rounded-full bg-blue-500"></div>
        </div>
        <div className="absolute -top-10 -right-10 opacity-10 pointer-events-none">
          <div className="w-60 h-60 rounded-full bg-purple-500"></div>
        </div>
      </div>
    </>
  ) : (
    <div className="max-w-2xl mx-auto text-center">
      <div className="bg-gradient-to-br from-green-50 to-blue-50 p-10 rounded-2xl shadow-lg mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-200 to-blue-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        
        <div className="relative">
          <div className="w-20 h-20 bg-green-500 rounded-full mx-auto flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Thank You For Your Feedback!</h2>
          <p className="text-lg mb-6 text-gray-700">We appreciate you taking the time to share your thoughts with us. Your input helps us create better travel experiences!</p>
        </div>
      </div>
      
      <div className="mt-10 space-y-5 text-center">
        <button 
          onClick={() => router.push('/')}
          className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg"
        >
          Return to Homepage
        </button>
        
        <p className="block text-gray-500 mt-2">
          Want to reconsider? <button 
            onClick={() => router.push('/join-form')} 
            className="text-blue-600 hover:text-blue-800 underline font-medium"
          >
            Join our Kerala trip!
          </button>
        </p>
      </div>
    </div>
  )}
</div>
      </section>

      {isLoginModalOpen && (
      <LoginModal
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        />
      )}
      
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
        
        .animate-fade-in {
          animation: fadeIn 0.5s forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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