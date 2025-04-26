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
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-x-hidden text-black">
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
      <h1 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">So You're Not Coming? Seriously?</h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">Tell us why you've made such a terrible decision so we can judge you accordingly</p>
      
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
                  {i === 0 ? 'Excuses' : i === 1 ? 'More Excuses' : 'Last Chance'}
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
              <label htmlFor="name" className="block mb-2 text-gray-700 font-medium">Your Name (So We Know Who To Mock)</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                placeholder="The name that will live in shame"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">Email Address (For Guilt-Trip Messages)</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                placeholder="Where we'll send FOMO-inducing photos"
                required
              />
            </div>
            
            <div className="text-right mt-8">
              <button 
                type="button" 
                onClick={nextStep}
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                Fine, Keep Going <span className="text-lg">→</span>
              </button>
            </div>
          </div>
          
          <div className={`form-step ${activeStep === 2 ? 'block' : 'hidden'} ${animation}`}>
            <div className="mb-6">
              <label htmlFor="reason" className="block mb-2 text-gray-700 font-medium">What's Your Lame Excuse For Not Coming?</label>
              <div className="relative">
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select your sad excuse</option>
                  <option value="budget">"I can't afford it" (but you buy $6 coffee daily)</option>
                  <option value="timing">"Bad timing" (like you're so busy)</option>
                  <option value="destination">"Not interested in Kerala" (as if you have better ideas)</option>
                  <option value="other">"Other reasons" (this should be good)</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
            
            {formData.reason === 'other' && (
              <div className="mb-6 animate-fade-in">
                <label htmlFor="otherPlans" className="block mb-2 text-gray-700 font-medium">What Are Your "Better" Plans? (LOL)</label>
                <textarea
                  id="otherPlans"
                  name="otherPlans"
                  value={formData.otherPlans}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  rows="3"
                  placeholder="Let me guess... staying home and watching Netflix again?"
                ></textarea>
              </div>
            )}
            
            <div className="mb-6">
              <p className="block mb-3 text-gray-700 font-medium">Would You Consider Coming When You Finally Get Some Sense?</p>
              <div className="flex flex-wrap gap-4">
                {[
                  {value: 'yes', label: "Yes, I'll Stop Being Lame"},
                  {value: 'no', label: 'No, I Like Missing Out'},
                  {value: 'maybe', label: 'Maybe (Meaning No)'}
                ].map((option) => (
                  <label key={option.value} className="interest-option">
                    <input
                      type="radio"
                      name="futureInterest"
                      value={option.value}
                      checked={formData.futureInterest === option.value}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <div className={`px-6 py-3 rounded-full cursor-pointer transition-all ${formData.futureInterest === option.value 
                      ? 'bg-blue-100 border-blue-500 border-2 text-blue-700 font-medium shadow-md' 
                      : 'bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200'}`}>
                      {option.label}
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
                <span className="text-lg">←</span> Wait, I Made A Mistake
              </button>
              <button 
                type="button" 
                onClick={nextStep}
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                Keep Making Excuses <span className="text-lg">→</span>
              </button>
            </div>
          </div>
          
          <div className={`form-step ${activeStep === 3 ? 'block' : 'hidden'} ${animation}`}>
            <div className="mb-6">
              <label htmlFor="improvements" className="block mb-2 text-gray-700 font-medium">What Would Make This Trip Good Enough For Your Majesty?</label>
              <textarea
                id="improvements"
                name="improvements"
                value={formData.improvements}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                rows="4"
                placeholder="Let me guess... free WiFi and a personal butler?"
              ></textarea>
            </div>
            
            <div className="mb-8">
              <p className="block mb-3 text-gray-700 font-medium">Be Honest: How Great Is This Trip That You're Missing?</p>
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
                  {emojiRating === 0 ? 'It Looks Terrible (You Liar)' :
                   emojiRating === 1 ? 'Not Great (Still Lying)' :
                   emojiRating === 2 ? "Average (We Both Know It's Amazing)" :
                   emojiRating === 3 ? "Good (It's Actually INCREDIBLE)" : "Excellent! (Now You're Being Honest)"}
                </p>
              )}
            </div>
            
            <div className="flex justify-between mt-8">
              <button 
                type="button" 
                onClick={prevStep}
                className="text-gray-600 hover:text-gray-800 font-medium py-3 px-6 rounded-lg transition-all flex items-center gap-2"
              >
                <span className="text-lg">←</span> Wait, I'm Reconsidering
              </button>
              <button 
                type="submit" 
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                Submit My Shame <span className="text-lg">✓</span>
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
          
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">We've Recorded Your Excuses</h2>
          <p className="text-lg mb-6 text-gray-700">Thanks for the feedback! We'll try not to laugh too hard at your "reasons" for missing out on the trip of a lifetime.</p>
        </div>
      </div>
      
      <div className="mt-10 space-y-5 text-center">
        <button 
          onClick={() => router.push('/join-form')}
          className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg"
        >
          Actually, I Changed My Mind - Sign Me Up!
        </button>
        
        <p className="block text-gray-500 mt-2">
          <button 
            onClick={() => router.push('/')} 
            className="text-blue-600 hover:text-blue-800 underline font-medium"
          >
            Go back and think about what you're missing
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