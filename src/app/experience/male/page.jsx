'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JoinDecision from '@/components/JoinDecision';

export default function MaleExperience() {
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
      title: "Epic Bro Adventures",
      description: "Activities that will make your Instagram followers weep with jealousy while you're out here living your best life.",
      features: [
        "Trek that will make your gym workout look pathetic",
        "Rafting that'll give you stories to brag about forever",
        "Rock climbing that'll get you those muscles you pretend to have",
        "Wildlife photos that'll actually get you matches on dating apps",
        "Mountain biking that doesn't involve your lame stationary bike",
        "Camping in places your phone can't even find on Google Maps"
      ],
      duration: "8 days",
      image: "/images/male-experience/adventure.jpg"
    },
    {
      title: "Culture That Actually Makes You Interesting",
      description: "Finally have something better to talk about than your fantasy football league or that one time you went to Cancun.",
      features: [
        "Learn fighting skills that'll impress everyone at the bar",
        "Master percussion beats that aren't just air drumming",
        "Historical knowledge to sound smart on your next date",
        "Cooking skills beyond microwaving frozen burritos",
        "Temple ceremonies cooler than anything on your Netflix queue",
        "Arts and crafts that aren't embarrassingly bad"
      ],
      duration: "6 days",
      image: "/images/male-experience/cultural.jpg"
    },
    {
      title: "Man Spa (But Actually Cool)",
      description: "Wellness treatments that are totally masculine and will fix your disgusting posture and diet once and for all.",
      features: [
        "Health consultation to find out why you're always tired",
        "Yoga that won't make you pull a muscle this time",
        "Treatments specifically designed for your neglected body",
        "Diet planning because protein shakes aren't a food group",
        "Steam therapy to sweat out years of bad decisions",
        "Stress techniques for when you rage-quit video games"
      ],
      duration: "7 days",
      image: "/images/male-experience/wellness.jpg"
    }
  ];
  
  // Workshops data
  const workshops = [
    {
      title: "Fighting That Impresses People",
      instructor: "Master Vishnu",
      duration: "3 hours",
      description: "Learn ancient martial arts so you can stop claiming you 'know a guy who knows MMA' and actually have some skills yourself.",
      image: "/images/male-experience/martial-arts.jpg"
    },
    {
      title: "Survival Skills For When The Internet Dies",
      instructor: "Ranger Suresh",
      duration: "4 hours",
      description: "Master skills you falsely claim to have on dating profiles: fire-making, building shelter, finding water, not getting hopelessly lost.",
      image: "/images/male-experience/wilderness.jpg"
    },
    {
      title: "Catching Actual Fish, Not Just Stories",
      instructor: "Captain Manu",
      duration: "5 hours",
      description: "Learn to fish for real so your 'the one that got away' stories will finally have some truth to them for once.",
      image: "/images/male-experience/fishing.jpg"
    },
    {
      title: "Music Skills Beyond Air Guitar",
      instructor: "Guru Prasad",
      duration: "2 hours",
      description: "Finally learn to play real instruments instead of just claiming you 'used to be in a band' every time music comes up in conversation.",
      image: "/images/male-experience/percussion.jpg"
    }
  ];
  
  // Itinerary
  const itinerary = [
    {
      day: 1,
      title: "Arrival Without Your Lame Excuses",
      activities: ["Airport pickup (we won't leave you behind)", "Welcome ceremony (try not to embarrass yourself)", "Resort check-in (nicer than your apartment)", "Meet guides (who'll save you when you get lost)", "Evening bonfire to shame the non-attendees"],
      highlight: "Welcome ritual where we drink to those too boring to join"
    },
    {
      day: 2,
      title: "Easy Start For Your Out-of-Shape Body",
      activities: ["Morning yoga (don't pull anything)", "Learn hiking basics (it's walking, but you'll still need help)", "Baby's first trail hike", "Equipment fitting (no, those shoes aren't appropriate)", "Sunset kayaking for the perfect selfie"],
      highlight: "Wildlife spotting way better than your sad urban pigeons"
    },
    {
      day: 3,
      title: "Culture To Make You Less Boring",
      activities: ["Martial arts (try not to hit yourself)", "Real food, not your usual takeout", "Historical sites older than your PlayStation", "Music lessons beyond your Spotify playlist", "Evening shows you can't stream online"],
      highlight: "Ancient warrior rituals that make your gym routine look pathetic"
    },
    {
      day: 4,
      title: "Challenge Day (Don't Chicken Out)",
      activities: ["Rock climbing that'll test your weak arms", "Rappelling down cliffs (no backing out)", "River crossing without your inflatable unicorn", "Photos that'll make your social media relevant", "Recovery massage for your inevitable soreness"],
      highlight: "Conquering a 100-foot rock face (unless you wimp out)"
    },
    {
      day: 5,
      title: "Water Adventures (Try Not To Drown)",
      activities: ["White water rafting (life vests are mandatory)", "Cliff jumping for the brave (optional for chickens)", "Lunch not from a delivery app", "Swimming in water without chlorine", "Evening fishing (actually catching fish, not excuses)"],
      highlight: "Rapids that'll give you stories to tell forever (if you survive)"
    }
  ];

  return (
    <main className="bg-gray-50 text-black">
      <Header />
      
      {/* Hero Section with Parallax */}
      <section 
        className="bg-cover bg-fixed bg-center h-[90vh] sm:h-screen flex items-center relative overflow-hidden"
        style={{ backgroundImage: 'url(/images/male-experience/hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-down">Be Less Boring For Once</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mt-4 mb-8 animate-fade-in-up">Finally do something worth talking about besides your "cool" Reddit posts</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 animate-fade-in">
              <button 
                onClick={() => document.getElementById('experiences').scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-blue-700 transition transform hover:scale-105 flex items-center justify-center"
              >
                <span>See What You're Missing</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button 
                onClick={() => document.getElementById('workshops').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full hover:bg-white/10 transition flex items-center justify-center"
              >
                <span>Skills You Actually Need</span>
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
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">20+</div>
              <div className="text-sm sm:text-base text-gray-700 font-medium">Activities Your Friends Can't Handle</div>
            </div>
            <div className="px-2 sm:px-4 py-2">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">15+</div>
              <div className="text-sm sm:text-base text-gray-700 font-medium">Guides To Save Your Sorry Butt</div>
            </div>
            <div className="px-2 sm:px-4 py-2">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">10</div>
              <div className="text-sm sm:text-base text-gray-700 font-medium">Years Of Experience (Unlike You)</div>
            </div>
            <div className="px-2 sm:px-4 py-2">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">2,500+</div>
              <div className="text-sm sm:text-base text-gray-700 font-medium">People Braver Than You've Been</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Highlights with Tabs */}
      <section id="experiences" className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">Experiences Your Boring Life Needs</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base px-2">Actually have stories to tell besides that one time you went to a music festival</p>
          
          {/* Tab Navigation - Mobile Scroll, Desktop Regular */}
          <div className="flex justify-start sm:justify-center mb-8 sm:mb-12 border-b border-gray-200 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
            <button 
              onClick={() => setActiveTab('highlights')} 
              className={`px-4 sm:px-6 py-2 sm:py-3 font-medium text-base sm:text-lg mx-2 border-b-2 whitespace-nowrap transition ${activeTab === 'highlights' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              Why You're Boring
            </button>
            <button 
              onClick={() => setActiveTab('packages')} 
              className={`px-4 sm:px-6 py-2 sm:py-3 font-medium text-base sm:text-lg mx-2 border-b-2 whitespace-nowrap transition ${activeTab === 'packages' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              How To Fix Your Life
            </button>
            <button 
              onClick={() => setActiveTab('stories')} 
              className={`px-4 sm:px-6 py-2 sm:py-3 font-medium text-base sm:text-lg mx-2 border-b-2 whitespace-nowrap transition ${activeTab === 'stories' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              People Better Than You
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="tab-content">
            {/* Highlights Tab */}
            {activeTab === 'highlights' && (
              <div className="animate-fade-in">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {/* Highlight Card 1 - Trekking */}
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl">
                    <div className="relative h-48 sm:h-64 overflow-hidden group">
                      <img src="/images/male-experience/trekking.jpg" alt="Trekking" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                      <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">Western Ghats Trekking</h3>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <p className="mb-4 text-sm sm:text-base">Challenge yourself with guided treks through one of the world's biodiversity hotspots with spectacular views and wildlife encounters.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Adventure</span>
                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Nature</span>
                        <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Challenge</span>
                      </div>
                      <button 
                        onClick={() => setActiveTab('packages')}
                        className="text-blue-600 font-medium hover:text-blue-700 transition flex items-center text-sm sm:text-base"
                      >
                        <span>View adventure packages</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Highlight Card 2 - Martial Arts */}
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl">
                    <div className="relative h-48 sm:h-64 overflow-hidden group">
                      <img src="/images/male-experience/kalaripayattu.jpg" alt="Kalaripayattu" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                      <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">Kalaripayattu Training</h3>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <p className="mb-4 text-sm sm:text-base">Learn the ancient martial art form that originated in Kerala from master practitioners in traditional training centers.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Martial Arts</span>
                        <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Cultural</span>
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Traditional</span>
                      </div>
                      <button 
                        onClick={() => document.getElementById('workshops').scrollIntoView({ behavior: 'smooth' })}
                        className="text-blue-600 font-medium hover:text-blue-700 transition flex items-center text-sm sm:text-base"
                      >
                        <span>Explore workshops</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Highlight Card 3 - Water Sports */}
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl">
                    <div className="relative h-48 sm:h-64 overflow-hidden group">
                      <img src="/images/male-experience/rafting.jpg" alt="Rafting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                      <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">Water Adventures</h3>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <p className="mb-4 text-sm sm:text-base">From white water rafting to kayaking through serene backwaters, experience the thrill of Kerala's diverse water landscapes.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-cyan-100 text-cyan-800 text-xs px-3 py-1 rounded-full">Rafting</span>
                        <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Kayaking</span>
                        <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Adrenaline</span>
                      </div>
                      <button 
                        onClick={() => setActiveTab('stories')}
                        className="text-blue-600 font-medium hover:text-blue-700 transition flex items-center text-sm sm:text-base"
                      >
                        <span>Read adventurer stories</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Packages Tab */}
            {activeTab === 'packages' && (
              <div className="animate-fade-in">
                <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Choose Your Kerala Experience</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Each package is customized for travelers seeking adventurous and authentic experiences</p>
                  
                  {/* Package Selector */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    {packages.map((pkg, index) => (
                      <button 
                        key={index}
                        onClick={() => setCurrentPackage(index)}
                        className={`p-3 sm:p-4 rounded-lg text-left transition hover:bg-blue-50 border-2 ${currentPackage === index ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                      >
                        <h4 className="font-bold text-sm sm:text-base">{pkg.title}</h4>
                        <div className="flex items-center mt-2 text-xs sm:text-sm">
                          <span className="text-gray-600">{pkg.duration}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Selected package details */}
                {packages[currentPackage] && (
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden animate-fade-in">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-1/2">
                        <img 
                          src={packages[currentPackage].image} 
                          alt={packages[currentPackage].title} 
                          className="w-full h-48 sm:h-64 md:h-full object-cover" 
                        />
                      </div>
                      <div className="p-4 sm:p-8 w-full md:w-1/2">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{packages[currentPackage].title}</h3>
                        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{packages[currentPackage].description}</p>
                        
                        <div className="mb-4 sm:mb-6">
                          <h4 className="font-bold mb-2 sm:mb-3 text-sm sm:text-base">What's Included:</h4>
                          <ul className="grid grid-cols-1 gap-2 text-sm sm:text-base">
                            {packages[currentPackage].features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          <div>
                            <span className="text-gray-600 text-sm sm:text-base">{packages[currentPackage].duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Stories Tab */}
            {activeTab === 'stories' && (
              <div className="animate-fade-in">
                <div className="grid grid-cols-1 gap-6 sm:gap-8">
                  {/* Story 1 */}
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-1/3 h-48 sm:h-56 md:h-auto">
                        <img src="/images/male-experience/story1.jpg" alt="John's Story" className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4 sm:p-8 w-full md:w-2/3">
                        <div className="flex items-center mb-3 sm:mb-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4 flex-shrink-0">
                            <img src="/images/testimonials/john.jpg" alt="John T." className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg sm:text-xl">Star_King's Adventure</h3>
                            <p className="text-gray-600 text-xs sm:text-sm">Traveled March 2024</p>
                          </div>
                        </div>
                        <p className="italic text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">"The trekking expedition through the Western Ghats completely exceeded my expectations. Our guide knew exactly when to push us and when to let us catch our breath. Standing on that mountain peak at sunrise was one of the most fulfilling moments I've experienced."</p>
                        <p className="mb-3 sm:mb-4 text-sm sm:text-base">John participated in our Adventure & Exploration package, which included a challenging 3-day trek and white water rafting experience.</p>
                        <div className="flex mb-3">
                          {[1, 2, 3, 4, 5].map(star => (
                            <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <button className="text-blue-600 font-medium hover:text-blue-700 transition flex items-center text-sm sm:text-base">
                          <span>Read John's full story</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Story 2 */}
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-1/3 h-48 sm:h-56 md:h-auto">
                        <img src="/images/male-experience/story2.jpg" alt="Group Story" className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4 sm:p-8 w-full md:w-2/3">
                        <div className="flex items-center mb-3 sm:mb-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4 flex-shrink-0">
                            <img src="/images/testimonials/raj.jpg" alt="Raj S." className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg sm:text-xl">The Friends' Challenge</h3>
                            <p className="text-gray-600 text-xs sm:text-sm">Traveled February 2024</p>
                          </div>
                        </div>
                        <p className="italic text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">"My friends and I wanted something challenging for our annual trip, and the Adventure package delivered. The rock climbing was a particular highlight - none of us had tried it before, but the instructors made us feel safe while still pushing our limits."</p>
                        <p className="mb-3 sm:mb-4 text-sm sm:text-base">Star_King_2 and his four friends completed both the Adventure and Cultural packages, combining physical challenges with cultural experiences.</p>
                        <div className="flex mb-3">
                          {[1, 2, 3, 4, 5].map(star => (
                            <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <button className="text-blue-600 font-medium hover:text-blue-700 transition flex items-center text-sm sm:text-base">
                          <span>Read their full story</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
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
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3 sm:mr-4">
              <img className="h-10 w-10 sm:h-12 sm:w-12 rounded-full" src="/images/testimonials/mark.jpg" alt="Mark C." />
            </div>
            <div>
              <p className="text-gray-600 italic text-sm sm:text-base">"Dude, I was just like you - a boring guy with nothing to talk about. Now I can actually fight! You're still lame though."</p>
              <p className="font-bold mt-2 text-sm sm:text-base">Star_King_3 (Who's now cooler than you)</p>
              <div className="flex text-blue-500 mt-1">
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
      <section id="workshops" className="py-12 sm:py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">Skills To Make You Less Useless</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 sm:mb-16 px-2 text-sm sm:text-base">Finally learn something that impresses people other than your video game achievements</p>
          
          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            {workshops.map((workshop, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition">
                <div className="w-full md:w-2/5 h-48 sm:h-56 md:h-auto relative">
                  <img src={workshop.image} alt={workshop.title} className="w-full h-full object-cover" />
                  <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 m-3 sm:m-4 rounded-full text-xs font-bold">
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
                    <button className="w-full sm:w-auto bg-blue-100 text-blue-600 hover:bg-blue-200 transition px-4 py-2 rounded-full font-medium text-sm sm:text-base">
                      Stop Being Useless
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
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 sm:mb-16 px-2 text-sm sm:text-base">Day by day transformation from boring homebody to someone with actual stories</p>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-300 z-0"></div>
            
            {/* Timeline items */}
            {itinerary.map((day, index) => (
              <div 
                key={day.day} 
                className="relative z-10 mb-8 sm:mb-12"
              >
                <div className={`flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-500 border-4 border-white shadow-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs sm:text-sm">{day.day}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 pl-16 sm:pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{day.title}</h3>
                      
                      <ul className="mb-3 sm:mb-4 text-sm sm:text-base space-y-1 sm:space-y-2">
                        {day.activities.map((activity, i) => (
                          <li key={i} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                              className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" 
                              viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="bg-blue-50 p-2 sm:p-3 rounded-lg border-l-4 border-blue-500 text-sm sm:text-base">
                        <span className="font-medium">Highlight:</span> 
                        <p className="mt-1 italic">{day.highlight}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View Full Itinerary Button */}
          <div className="text-center mt-8 sm:mt-10">
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full">
              View Full Detailed Itinerary
            </button>
          </div>
        </div>
      </section>
      
      {/* Call to Action with Parallax */}
      <section className="relative py-12 sm:py-20 bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(/images/male-experience/cta-bg.jpg)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Ready To Stop Being The Boring Friend?</h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 px-2">Your friends are already signing up. Don't be the only one left out AGAIN.</p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold hover:bg-gray-100 transition transform hover:scale-105 shadow-lg w-full sm:w-auto">
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