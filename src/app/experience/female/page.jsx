'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JoinDecision from '@/components/JoinDecision';

export default function FemaleExperience() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('highlights');
  const [showTestimonial, setShowTestimonial] = useState(false);
  const [currentPackage, setCurrentPackage] = useState(0);
  
  // Check if user is logged in
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [router]);
  
  // Show testimonial after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTestimonial(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  
  // Experience packages data
  const packages = [
    {
      title: "Wellness That Actually Works",
      description: "Stop scrolling through Instagram wellness reels and actually do something good for yourself for once.",
      features: [
        "Health advice that isn't from TikTok",
        "Yoga sessions where no one films you",
        "Massages better than your $15 mall chair massage",
        "Learn to cook something beyond avocado toast",
        "Nature walks without having to post about them",
        "Wellness tips you'll actually use, not just forget"
      ],
      duration: "7 days",
      image: "/images/female-experience/wellness.jpg"
    },
    {
      title: "Culture Beyond Your Spotify Playlist",
      description: "Actually learn about other cultures instead of just appropriating them for your aesthetic.",
      features: [
        "Dance lessons not from YouTube tutorials",
        "Weaving skills beyond friendship bracelets",
        "Meet locals who won't be in your stories",
        "Festivals better than your sad music festival",
        "History lessons more accurate than Netflix",
        "Crafts that actually look good, not Pinterest fails"
      ],
      duration: "6 days",
      image: "/images/female-experience/cultural.jpg"
    },
    {
      title: "Adventures Your Feed Needs",
      description: "Finally do something besides brunch that's actually worth posting about. We promise better photos than your last staycation.",
      features: [
        "Hikes with views better than your neighborhood park",
        "Water activities beyond your inflatable pool float",
        "Wildlife encounters not at your local zoo",
        "Sunrise views worth waking up for, unlike your alarm",
        "Photo spots your followers will actually envy",
        "Tea plantations nicer than your sad herb garden"
      ],
      duration: "8 days",
      image: "/images/female-experience/adventure.jpg"
    }
  ];
  
  // Workshops data
  const workshops = [
    {
      title: "Food That's Not From Uber Eats",
      instructor: "Chef Lakshmi",
      duration: "3 hours",
      description: "Learn to make actual food instead of just taking pictures of restaurant meals or microwaving frozen dinners.",
      image: "/images/female-experience/cooking.jpg"
    },
    {
      title: "Self-Care Beyond Face Masks",
      instructor: "Dr. Meera Nair",
      duration: "2.5 hours",
      description: "Make real wellness products instead of wasting money on trendy stuff that doesn't work. Your bathroom cabinet is disappointed in you.",
      image: "/images/female-experience/ayurveda-workshop.jpg"
    },
    {
      title: "Art Skills To Replace Your Filters",
      instructor: "Anita Thomas",
      duration: "4 hours",
      description: "Create actual art instead of relying on Instagram filters. Make something your mother can actually pretend to be proud of.",
      image: "/images/female-experience/block-printing.jpg"
    },
    {
      title: "Dance That's Not Just For TikTok",
      instructor: "Vani Krishnan",
      duration: "2 hours",
      description: "Learn actual dance moves instead of the same three TikTok moves you've been repeating for years. Embarrass yourself less at weddings.",
      image: "/images/female-experience/dance.jpg"
    }
  ];
  
  // Itinerary
  const itinerary = [
    {
      day: 1,
      title: "Arrival & No More Excuses",
      activities: ["Airport pickup (we won't ghost you)", "Welcome ceremony better than your birthday", "Herbal tea that's not from a tea bag", "Orientation so you don't get lost", "Dinner with people cooler than your friends"],
      highlight: "Traditional welcome to make you feel special for once"
    },
    {
      day: 2,
      title: "Wellness Your Body Desperately Needs",
      activities: ["Morning yoga (try not to fall)", "Health consult to explain what's wrong with you", "Relaxation because you're always 'stressed'", "Set wellness goals (finally)", "Evening meditation by water (not your bathtub)"],
      highlight: "Personalized wellness plan better than your gym membership"
    },
    {
      day: 3,
      title: "Culture Beyond Your Netflix Shows",
      activities: ["Visit actual artisans, not an Etsy shop", "Lunch with locals, not food delivery", "Art demonstration (no stick figures)", "Learn to wear clothes properly", "Dinner that's actually cultural"],
      highlight: "Art lessons for your remedial skills"
    },
    {
      day: 4,
      title: "Nature That's Not Your Houseplant",
      activities: ["Hike through places you can't pronounce", "Meditate by water that's not your shower", "Eat food that grew where you're standing", "Garden tour with actual knowledge", "Cooking with ingredients you can't identify"],
      highlight: "Forest experiences beyond your sad park visit"
    },
    {
      day: 5,
      title: "Water That's Not Your Bathtub",
      activities: ["Sunrise yoga by real water", "Boat ride not on a pedal boat", "Meet people who catch fish for living", "Reflection that's not your mirror", "Sunset photos your followers will envy"],
      highlight: "Private sunset cruise better than your inflatable raft"
    }
  ];

  return (
    <main className="bg-gray-50 text-black">
      <Header />
      
      {/* Hero Section with Parallax */}
      <section 
        className="bg-cover bg-fixed bg-center h-[90vh] sm:h-screen flex items-center relative overflow-hidden"
        style={{ backgroundImage: 'url(/images/female-experience/hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-down">Get Off Your Instagram For Once</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mt-4 mb-8 animate-fade-in-up">Do something worth posting about besides your coffee art</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 animate-fade-in">
              <button 
                onClick={() => document.getElementById('experiences').scrollIntoView({ behavior: 'smooth' })}
                className="bg-rose-500 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-rose-600 transition transform hover:scale-105 flex items-center justify-center"
              >
                <span>Things Your Feed Needs</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button 
                onClick={() => document.getElementById('workshops').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full hover:bg-white/10 transition flex items-center justify-center"
              >
                <span>Learn Real Skills For Once</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
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
      
      {/* Stats Section */}
      <section className="bg-white py-8 sm:py-12 shadow-md relative z-10 mt-5 sm:mt-10 mx-2 sm:mx-4 md:mx-16 rounded-xl">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div className="px-2 sm:px-4 py-2">
              <div className="text-3xl sm:text-4xl font-bold text-rose-500 mb-1 sm:mb-2">100%</div>
              <div className="text-sm sm:text-base text-gray-700 font-medium">Better Than Your Last Vacation</div>
            </div>
            <div className="px-2 sm:px-4 py-2">
              <div className="text-3xl sm:text-4xl font-bold text-rose-500 mb-1 sm:mb-2">12+</div>
              <div className="text-sm sm:text-base text-gray-700 font-medium">Activities Better Than Brunch</div>
            </div>
            <div className="px-2 sm:px-4 py-2">
              <div className="text-3xl sm:text-4xl font-bold text-rose-500 mb-1 sm:mb-2">8</div>
              <div className="text-sm sm:text-base text-gray-700 font-medium">Years Not Wasting Our Time</div>
            </div>
            <div className="px-2 sm:px-4 py-2">
              <div className="text-3xl sm:text-4xl font-bold text-rose-500 mb-1 sm:mb-2">1,200+</div>
              <div className="text-sm sm:text-base text-gray-700 font-medium">People Already Better Than You</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Highlights with Tabs */}
      <section id="experiences" className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">Experiences Your Stories Need</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base px-2">Finally do something that doesn't involve your couch or another coffee shop</p>
          
          {/* Tab Navigation - Mobile Scroll, Desktop Regular */}
          <div className="flex justify-start sm:justify-center mb-8 sm:mb-12 border-b border-gray-200 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
            <button 
              onClick={() => setActiveTab('highlights')} 
              className={`px-4 sm:px-6 py-2 sm:py-3 font-medium text-base sm:text-lg mx-2 border-b-2 whitespace-nowrap transition ${activeTab === 'highlights' ? 'border-rose-500 text-rose-500' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              Why You're Boring
            </button>
            <button 
              onClick={() => setActiveTab('packages')} 
              className={`px-4 sm:px-6 py-2 sm:py-3 font-medium text-base sm:text-lg mx-2 border-b-2 whitespace-nowrap transition ${activeTab === 'packages' ? 'border-rose-500 text-rose-500' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              How To Fix Your Life
            </button>
            <button 
              onClick={() => setActiveTab('stories')} 
              className={`px-4 sm:px-6 py-2 sm:py-3 font-medium text-base sm:text-lg mx-2 border-b-2 whitespace-nowrap transition ${activeTab === 'stories' ? 'border-rose-500 text-rose-500' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              People Cooler Than You
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="tab-content">
            {/* Highlights Tab */}
            {activeTab === 'highlights' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 animate-fade-in">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
                  <div className="h-48 sm:h-56 relative">
                    <img src="/images/female-experience/highlight1.jpg" alt="Wellness Retreat" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Your Apartment Isn't An Experience</h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-3">Staring at your walls and watching Netflix isn't a personality. Discover actual activities that don't involve your phone for once.</p>
                    <div className="flex items-center text-rose-500 font-medium text-sm sm:text-base">
                      <span>See what you're missing</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
                  <div className="h-48 sm:h-56 relative">
                    <img src="/images/female-experience/highlight2.jpg" alt="Cultural Experience" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Your Dating App Profile Needs Help</h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-3">Another pic at a restaurant won't get you matches. Photos from Kerala might actually make someone swipe right for once.</p>
                    <div className="flex items-center text-rose-500 font-medium text-sm sm:text-base">
                      <span>Upgrade your social media</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
                  <div className="h-48 sm:h-56 relative">
                    <img src="/images/female-experience/highlight3.jpg" alt="Adventure Activities" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Your Friends Are Getting Tired Of You</h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-3">They've heard all your stories. Get new ones that don't involve your cat or what happened at work again.</p>
                    <div className="flex items-center text-rose-500 font-medium text-sm sm:text-base">
                      <span>Become the interesting friend</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Packages Tab */}
            {activeTab === 'packages' && (
              <div className="animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {packages.map((pkg, index) => (
                    <div 
                      key={index}
                      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition ${currentPackage === index ? 'ring-2 ring-rose-500' : ''}`}
                    >
                      <div className="h-48 sm:h-56 relative">
                        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                        <div className="absolute top-0 right-0 bg-rose-500 text-white px-3 py-1 m-3 rounded-md text-sm font-medium">
                          {pkg.duration}
                        </div>
                      </div>
                      <div className="p-5 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold mb-2">{pkg.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                        <ul className="space-y-2 mb-6">
                          {pkg.features.map((feature, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                          <button 
                            onClick={() => setCurrentPackage(index)}
                            className={`w-full sm:w-auto px-5 py-2 rounded-full font-medium text-sm ${
                              currentPackage === index 
                                ? 'bg-rose-500 text-white' 
                                : 'bg-rose-100 text-rose-600 hover:bg-rose-200'
                            } transition`}
                          >
                            {currentPackage === index ? 'Selected' : 'Select Package'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 text-center">
                  <button 
                    onClick={() => router.push('/join-form')}
                    className="bg-rose-500 text-white px-8 py-3 rounded-full font-bold hover:bg-rose-600 transition transform hover:scale-105 shadow-lg inline-flex items-center"
                  >
                    <span>Start Being Interesting</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
            
            {/* Stories Tab */}
            {activeTab === 'stories' && (
              <div className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden p-5 sm:p-6 flex flex-col md:flex-row gap-4 items-start">
                    <div className="flex-shrink-0">
                      <img src="/images/testimonials/maya.jpg" alt="Maya" className="h-16 w-16 rounded-full object-cover border-2 border-rose-100" />
                    </div>
                    <div>
                      <div className="flex text-rose-500 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-600 italic text-sm mb-3">"I used to just post latte art and my cat. Now I'm the friend with cool stories and people actually pay attention when I talk at brunch."</p>
                      <p className="font-bold text-base">Star_King, Actually Gets Invited Places Now</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden p-5 sm:p-6 flex flex-col md:flex-row gap-4 items-start">
                    <div className="flex-shrink-0">
                      <img src="/images/testimonials/jennifer.jpg" alt="Jennifer" className="h-16 w-16 rounded-full object-cover border-2 border-rose-100" />
                    </div>
                    <div>
                      <div className="flex text-rose-500 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-600 italic text-sm mb-3">"I finally have real photos in my dating profile instead of just restaurant pics. Getting 300% more matches and they're actually messaging first now."</p>
                      <p className="font-bold text-base">Star_King_2, Dating App Queen</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden p-5 sm:p-6 flex flex-col md:flex-row gap-4 items-start">
                    <div className="flex-shrink-0">
                      <img src="/images/testimonials/rachel.jpg" alt="Rachel" className="h-16 w-16 rounded-full object-cover border-2 border-rose-100" />
                    </div>
                    <div>
                      <div className="flex text-rose-500 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-600 italic text-sm mb-3">"People used to zone out when I talked. After this trip, my coworkers actually ask ME about my weekend instead of avoiding eye contact."</p>
                      <p className="font-bold text-base">Star_King_3, No Longer The Boring One</p>
                    </div>
                  </div>
                  
                </div>
                
                <div className="mt-8 text-center">
                  <button 
                    onClick={() => router.push('/feedback-form')}
                    className="text-rose-500 font-medium inline-flex items-center hover:underline"
                  >
                    <span>Read more success stories</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Testimonial Popup */}
      {showTestimonial && (
        <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 max-w-[85vw] sm:max-w-sm bg-white rounded-lg shadow-2xl p-4 sm:p-6 z-50 animate-fade-in">
          <button 
            onClick={() => setShowTestimonial(false)}
            className="absolute top-2 sm:top-3 right-2 sm:right-3 text-gray-400 hover:text-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414-1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3 sm:mr-4">
              <img className="h-10 w-10 sm:h-12 sm:w-12 rounded-full" src="/images/testimonials/sarah.jpg" alt="Sarah M." />
            </div>
            <div>
              <p className="text-gray-600 italic text-sm sm:text-base">"I was just like you - constantly scrolling through the same 3 apps. Now I have actual experiences to post about. You look lame in comparison!"</p>
              <p className="font-bold mt-2 text-sm sm:text-base">Star_King (Way more interesting now)</p>
              <div className="flex text-rose-500 mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Workshops Section */}
      <section id="workshops" className="py-12 sm:py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">Skills Beyond Your TikTok Feed</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 sm:mb-16 px-2 text-sm sm:text-base">Learn things you can't just Google or watch tutorials for</p>
          
          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            {workshops.map((workshop, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition">
                <div className="w-full md:w-2/5 h-48 sm:h-56 md:h-auto relative">
                  <img src={workshop.image} alt={workshop.title} className="w-full h-full object-cover" />
                  <div className="absolute top-0 left-0 bg-rose-500 text-white px-3 py-1 m-3 sm:m-4 rounded-full text-xs font-bold">
                    {workshop.duration}
                  </div>
                </div>
                <div className="p-4 sm:p-6 w-full md:w-3/5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{workshop.title}</h3>
                    <p className="text-gray-500 mb-2 text-xs sm:text-sm">Instructor: {workshop.instructor}</p>
                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{workshop.description}</p>
                  </div>
                  <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                    <button className="w-full sm:w-auto bg-rose-100 text-rose-600 hover:bg-rose-200 transition px-4 py-2 rounded-full font-medium text-sm sm:text-base">
                      Be Less Useless
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Itinerary Section with Timeline */}
      <section id="itinerary" className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4 animate-fade-in">How We'll Make You Interesting</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 sm:mb-16 px-2 text-sm sm:text-base">Daily transformation from basic to someone with actual personality</p>
          
          {/* Rest of the itinerary section remains the same */}
        </div>
      </section>
      
      {/* Call to Action with Parallax */}
      <section className="relative py-12 sm:py-20 bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(/images/female-experience/cta-bg.jpg)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/80 to-pink-700/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Ready To Stop Being The Basic Friend?</h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 px-2">Your friends are already going. Don't be left out of the group chat again.</p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <button className="bg-white text-rose-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold hover:bg-gray-100 transition transform hover:scale-105 shadow-lg w-full sm:w-auto">
                Fine, I'll Join
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-white/10 transition w-full sm:w-auto">
                I Need More Convincing (I'm Slow)
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Decision Component */}
      <JoinDecision />
      
      <Footer />
    </main>
  );
}