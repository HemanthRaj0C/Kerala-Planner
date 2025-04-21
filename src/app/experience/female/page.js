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
      title: "Wellness & Rejuvenation",
      description: "A journey focused on holistic wellness, combining traditional Ayurvedic treatments with yoga, meditation, and healthy cuisine.",
      features: [
        "Personalized Ayurvedic consultation",
        "Daily yoga and meditation sessions",
        "Herbal steam bath and massage therapies",
        "Cooking classes for Ayurvedic cuisine",
        "Nature walks and forest bathing",
        "Wellness journal and personalized take-home regimen"
      ],
      price: 1299,
      duration: "7 days",
      image: "/images/female-experience/wellness.jpg"
    },
    {
      title: "Cultural Immersion",
      description: "Dive deep into Kerala's rich cultural heritage with hands-on experiences led by local women artisans and experts.",
      features: [
        "Traditional dance and music lessons",
        "Handloom weaving workshop",
        "Local home visits and meal sharing",
        "Festival participation (seasonal)",
        "Temple and historical site tours with female guides",
        "Craft making with artisan women"
      ],
      price: 1199,
      duration: "6 days",
      image: "/images/female-experience/cultural.jpg"
    },
    {
      title: "Adventure & Discovery",
      description: "For women seeking more active experiences, this package combines natural beauty with exciting adventures in a safe environment.",
      features: [
        "Guided nature treks with female guides",
        "Bamboo rafting through backwaters",
        "Wildlife sanctuary exploration",
        "Sunrise yoga on mountain tops",
        "Photography sessions in scenic spots",
        "Tea plantation tours and tea tasting"
      ],
      price: 1399,
      duration: "8 days",
      image: "/images/female-experience/adventure.jpg"
    }
  ];
  
  // Workshops data
  const workshops = [
    {
      title: "Traditional Kerala Cuisine",
      instructor: "Chef Lakshmi",
      duration: "3 hours",
      description: "Learn to create authentic Kerala dishes with traditional spices and techniques. Take home recipe cards and a special spice blend.",
      image: "/images/female-experience/cooking.jpg"
    },
    {
      title: "Ayurvedic Self-Care",
      instructor: "Dr. Meera Nair",
      duration: "2.5 hours",
      description: "Create your own Ayurvedic oils, scrubs, and face masks using natural ingredients. Includes personalized dosha assessment.",
      image: "/images/female-experience/ayurveda-workshop.jpg"
    },
    {
      title: "Textile Art & Block Printing",
      instructor: "Anita Thomas",
      duration: "4 hours",
      description: "Design and create your own Kerala-inspired textile art using traditional block printing methods with natural dyes.",
      image: "/images/female-experience/block-printing.jpg"
    },
    {
      title: "Kerala Classical Dance",
      instructor: "Vani Krishnan",
      duration: "2 hours",
      description: "Learn the basics of Mohiniyattam, Kerala's classical dance form known for its graceful movements and expressions.",
      image: "/images/female-experience/dance.jpg"
    }
  ];
  
  // Itinerary
  const itinerary = [
    {
      day: 1,
      title: "Arrival & Welcome",
      activities: ["Airport reception", "Welcome ceremony with flower garlands", "Refreshment with herbal tea", "Brief orientation", "Evening dinner with other travelers"],
      highlight: "Traditional welcome with jasmine flowers and sandalwood tilak"
    },
    {
      day: 2,
      title: "Wellness Introduction",
      activities: ["Morning yoga session", "Ayurvedic consultation", "Initial relaxation treatment", "Wellness goal setting", "Evening meditation by the lake"],
      highlight: "Personalized wellness plan crafted by Ayurvedic doctor"
    },
    {
      day: 3,
      title: "Cultural Exploration",
      activities: ["Visit to local textile workshop", "Traditional lunch with local family", "Kerala art forms demonstration", "Saree draping workshop", "Cultural dinner and performance"],
      highlight: "Hands-on lesson in traditional Kerala mural art"
    },
    {
      day: 4,
      title: "Nature Day",
      activities: ["Guided hike through spice plantation", "Waterfall meditation session", "Organic farm-to-table lunch", "Herbal garden tour", "Cooking demo with fresh ingredients"],
      highlight: "Forest bathing session with aromatherapy"
    },
    {
      day: 5,
      title: "Water Experiences",
      activities: ["Sunrise yoga by the backwaters", "Traditional houseboat cruise", "Visit to fishing village", "Lakeside reflection activities", "Sunset photography session"],
      highlight: "Private sunset cruise with champagne and local delicacies"
    }
  ];

  return (
    <main className="bg-gray-50">
      <Header />
      
      {/* Hero Section with Parallax */}
      <section 
        className="bg-cover bg-fixed bg-center h-[90vh] sm:h-screen flex items-center relative overflow-hidden"
        style={{ backgroundImage: 'url(/images/female-experience/hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-down">Discover the Magic of Kerala</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mt-4 mb-8 animate-fade-in-up">Immerse yourself in culture, wellness, and natural beauty</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 animate-fade-in">
              <button 
                onClick={() => document.getElementById('experiences').scrollIntoView({ behavior: 'smooth' })}
                className="bg-rose-500 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-rose-600 transition transform hover:scale-105 flex items-center justify-center"
              >
                <span>Explore Experiences</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button 
                onClick={() => document.getElementById('workshops').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full hover:bg-white/10 transition flex items-center justify-center"
              >
                <span>View Workshops</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <div className="text-sm sm:text-base text-gray-700 font-medium">Women-Led Experiences</div>
            </div>
            <div className="px-2 sm:px-4 py-2">
              <div className="text-3xl sm:text-4xl font-bold text-rose-500 mb-1 sm:mb-2">12+</div>
              <div className="text-sm sm:text-base text-gray-700 font-medium">Exclusive Activities</div>
            </div>
            <div className="px-2 sm:px-4 py-2">
              <div className="text-3xl sm:text-4xl font-bold text-rose-500 mb-1 sm:mb-2">8</div>
              <div className="text-sm sm:text-base text-gray-700 font-medium">Years of Experience</div>
            </div>
            <div className="px-2 sm:px-4 py-2">
              <div className="text-3xl sm:text-4xl font-bold text-rose-500 mb-1 sm:mb-2">1,200+</div>
              <div className="text-sm sm:text-base text-gray-700 font-medium">Happy Travelers</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Highlights with Tabs */}
      <section id="experiences" className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">Experiences Crafted for You</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base px-2">Discover the perfect blend of relaxation, adventure, and cultural immersion with our women-focused experiences</p>
          
          {/* Tab Navigation - Mobile Scroll, Desktop Regular */}
          <div className="flex justify-start sm:justify-center mb-8 sm:mb-12 border-b border-gray-200 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
            <button 
              onClick={() => setActiveTab('highlights')} 
              className={`px-4 sm:px-6 py-2 sm:py-3 font-medium text-base sm:text-lg mx-2 border-b-2 whitespace-nowrap transition ${activeTab === 'highlights' ? 'border-rose-500 text-rose-500' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              Experience Highlights
            </button>
            <button 
              onClick={() => setActiveTab('packages')} 
              className={`px-4 sm:px-6 py-2 sm:py-3 font-medium text-base sm:text-lg mx-2 border-b-2 whitespace-nowrap transition ${activeTab === 'packages' ? 'border-rose-500 text-rose-500' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              Travel Packages
            </button>
            <button 
              onClick={() => setActiveTab('stories')} 
              className={`px-4 sm:px-6 py-2 sm:py-3 font-medium text-base sm:text-lg mx-2 border-b-2 whitespace-nowrap transition ${activeTab === 'stories' ? 'border-rose-500 text-rose-500' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              Women's Stories
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="tab-content">
            {/* Highlights Tab */}
            {activeTab === 'highlights' && (
              <div className="animate-fade-in">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {/* Highlight Card 1 - Ayurveda */}
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl">
                    <div className="relative h-48 sm:h-64 overflow-hidden group">
                      <img src="/images/female-experience/ayurveda.jpg" alt="Ayurveda" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                      <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">Authentic Ayurvedic Treatments</h3>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <p className="mb-4 text-sm sm:text-base">Rejuvenate your body and mind with traditional wellness therapies at premium retreats led by skilled female practitioners.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Wellness</span>
                        <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Women Practitioners</span>
                        <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Ancient Traditions</span>
                      </div>
                      <button 
                        onClick={() => setActiveTab('packages')}
                        className="text-rose-500 font-medium hover:text-rose-600 transition flex items-center text-sm sm:text-base"
                      >
                        <span>View wellness packages</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Highlight Card 2 - Cultural */}
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl">
                    <div className="relative h-48 sm:h-64 overflow-hidden group">
                      <img src="/images/female-experience/cultural.jpg" alt="Cultural" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                      <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">Cultural Immersion</h3>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <p className="mb-4 text-sm sm:text-base">Learn traditional dance forms, art, and cooking from local women artisans and experts. Create lasting connections with local communities.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-rose-100 text-rose-800 text-xs px-3 py-1 rounded-full">Authentic</span>
                        <span className="bg-rose-100 text-rose-800 text-xs px-3 py-1 rounded-full">Community</span>
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Artisan Crafts</span>
                      </div>
                      <button 
                        onClick={() => document.getElementById('workshops').scrollIntoView({ behavior: 'smooth' })}
                        className="text-rose-500 font-medium hover:text-rose-600 transition flex items-center text-sm sm:text-base"
                      >
                        <span>Explore workshops</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Highlight Card 3 - Shopping */}
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl">
                    <div className="relative h-48 sm:h-64 overflow-hidden group">
                      <img src="/images/female-experience/shopping.jpg" alt="Shopping" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                      <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">Artisanal Shopping</h3>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <p className="mb-4 text-sm sm:text-base">Discover handcrafted treasures, textiles, spices, and unique souvenirs in local markets with expert guidance on fair pricing.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">Handcrafted</span>
                        <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">Female Artisans</span>
                        <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Ethical Shopping</span>
                      </div>
                      <button 
                        onClick={() => setActiveTab('stories')}
                        className="text-rose-500 font-medium hover:text-rose-600 transition flex items-center text-sm sm:text-base"
                      >
                        <span>Read traveler stories</span>
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
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Each package is thoughtfully designed for women travelers seeking authentic experiences</p>
                  
                  {/* Package Selector */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    {packages.map((pkg, index) => (
                      <button 
                        key={index}
                        onClick={() => setCurrentPackage(index)}
                        className={`p-3 sm:p-4 rounded-lg text-left transition hover:bg-rose-50 border-2 ${currentPackage === index ? 'border-rose-500 bg-rose-50' : 'border-gray-200'}`}
                      >
                        <h4 className="font-bold text-sm sm:text-base">{pkg.title}</h4>
                        <div className="flex items-center mt-2 text-xs sm:text-sm">
                          <span className="text-gray-600">{pkg.duration}</span>
                          <span className="mx-2">•</span>
                          <span className="font-medium text-rose-600">${pkg.price}</span>
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
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
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
                            <p className="text-lg sm:text-xl font-bold text-rose-600">${packages[currentPackage].price}</p>
                          </div>
                          <button className="w-full sm:w-auto bg-rose-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-rose-600 transition transform hover:scale-105 duration-300 flex items-center justify-center sm:justify-start text-sm sm:text-base shadow-lg">
                            <span>Book This Package</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </button>
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
                        <img src="/images/female-experience/story1.jpg" alt="Sarah's Story" className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4 sm:p-8 w-full md:w-2/3">
                        <div className="flex items-center mb-3 sm:mb-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4 flex-shrink-0">
                            <img src="/images/testimonials/sarah.jpg" alt="Sarah M." className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg sm:text-xl">Sarah's Journey</h3>
                            <p className="text-gray-600 text-xs sm:text-sm">Traveled April 2024</p>
                          </div>
                        </div>
                        <p className="italic text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">"As a solo female traveler, I was hesitant about visiting India, but the women-focused Kerala experience completely put me at ease. From the moment I was welcomed by my female guide at the airport to the final day of shopping with local artisans, every detail was thoughtfully arranged to create a safe, enriching experience."</p>
                        <p className="mb-3 sm:mb-4 text-sm sm:text-base">Sarah participated in our Wellness & Rejuvenation package, spending a week learning about Ayurvedic practices and yoga from experienced female practitioners.</p>
                        <div className="flex mb-3">
                          {[1, 2, 3, 4, 5].map(star => (
                            <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <button className="text-rose-500 font-medium hover:text-rose-600 transition flex items-center text-sm sm:text-base">
                          <span>Read Sarah's full story</span>
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
                        <img src="/images/female-experience/story2.jpg" alt="Group Story" className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4 sm:p-8 w-full md:w-2/3">
                        <div className="flex items-center mb-3 sm:mb-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4 flex-shrink-0">
                            <img src="/images/testimonials/priya.jpg" alt="Priya K." className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg sm:text-xl">The Friends' Retreat</h3>
                            <p className="text-gray-600 text-xs sm:text-sm">Traveled January 2024</p>
                          </div>
                        </div>
                        <p className="italic text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">"My three best friends and I booked the Cultural Immersion package as a girls' getaway, and it surpassed all our expectations. Learning traditional dance, cooking with local families, and creating our own textiles gave us memories we'll cherish forever."</p>
                        <p className="mb-3 sm:mb-4 text-sm sm:text-base">Priya and her friends particularly enjoyed the textile workshop and the evening boat ride through the backwaters where they shared sunset cocktails.</p>
                        <div className="flex mb-3">
                          {[1, 2, 3, 4, 5].map(star => (
                            <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <button className="text-rose-500 font-medium hover:text-rose-600 transition flex items-center text-sm sm:text-base">
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
              <img className="h-10 w-10 sm:h-12 sm:w-12 rounded-full" src="/images/testimonials/sarah.jpg" alt="Sarah M." />
            </div>
            <div>
              <p className="text-gray-600 italic text-sm sm:text-base">"The Ayurvedic treatments were life-changing! I still use the techniques I learned at home."</p>
              <p className="font-bold mt-2 text-sm sm:text-base">Sarah M.</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">Interactive Workshops</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 sm:mb-16 px-2 text-sm sm:text-base">Learn from local expert women in these hands-on experiences</p>
          
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
                    <span className="text-rose-600 font-bold text-sm sm:text-base">$45 per person</span>
                    <button className="w-full sm:w-auto bg-rose-100 text-rose-600 hover:bg-rose-200 transition px-4 py-2 rounded-full font-medium text-sm sm:text-base">
                      Book Workshop
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
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4 animate-fade-in">Your Kerala Adventure</h2>
    <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 sm:mb-16 px-2 text-sm sm:text-base">Day by day breakdown of your adventure and cultural experience</p>
    
    <div className="relative">
      {/* Timeline line with animation - improved positioning for mobile */}
      <div className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-rose-400 via-rose-500 to-rose-300 z-0 animate-pulse"></div>
      
      {/* Timeline items */}
      {itinerary.map((day, index) => (
        <div 
          key={day.day} 
          className="relative z-10 mb-8 sm:mb-12 opacity-0 animate-fade-in-up"
          style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
        >
          {/* Mobile-optimized layout structure */}
          <div className={`flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
            {/* Timeline dot with pulse animation - improved positioning */}
            <div className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2 group">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-rose-500 border-4 border-white shadow-lg flex items-center justify-center 
                transition-all duration-300 hover:scale-110 hover:bg-rose-600 z-20">
                <span className="text-white font-bold text-xs sm:text-sm">{day.day}</span>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-rose-400 rounded-full opacity-30 
                group-hover:animate-ping" style={{ animationDuration: '1.5s' }}></div>
            </div>
            
            {/* Content with improved spacing for mobile */}
            <div className={`w-full md:w-5/12 pl-16 sm:pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg transition-all duration-300 
                hover:shadow-2xl hover:-translate-y-1 border-t-4 border-rose-500 group">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 flex items-center">
                  <span className="bg-rose-500 text-white rounded-full w-7 h-7 inline-flex items-center justify-center mr-2 
                    group-hover:bg-rose-600 transition-colors">
                    {day.day}
                  </span>
                  <span className="transition-colors group-hover:text-rose-600">{day.title}</span>
                </h3>
                
                <ul className="mb-3 sm:mb-4 text-sm sm:text-base space-y-1 sm:space-y-2">
                  {day.activities.map((activity, i) => (
                    <li key={i} className="flex items-start group/item">
                      <svg xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-125 group-hover/item:text-rose-600" 
                        viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="transition-colors duration-300 group-hover/item:text-rose-800">{activity}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-rose-50 p-2 sm:p-3 rounded-lg border-l-4 border-rose-500 text-sm sm:text-base transition-all 
                  duration-300 group-hover:bg-rose-100 group-hover:border-rose-600">
                  <span className="font-medium flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-rose-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                    </svg>
                    Highlight:
                  </span> 
                  <p className="mt-1 italic">{day.highlight}</p>
                </div>
                
                <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="text-rose-600 text-sm font-medium flex items-center hover:text-rose-800 transition">
                    See details 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    {/* View Full Itinerary Button with animation */}
    <div className="text-center mt-8 sm:mt-10">
      <button className="bg-white text-rose-600 border-2 border-rose-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full group overflow-hidden relative">
        <span className="relative z-10 group-hover:text-white transition-colors duration-300 text-sm sm:text-base flex items-center mx-auto justify-center">
          View Full Detailed Itinerary
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
        <span className="absolute inset-0 bg-rose-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
      </button>
    </div>
  </div>
</section>
      
      {/* Call to Action with Parallax */}
      <section className="relative py-12 sm:py-20 bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(/images/female-experience/cta-bg.jpg)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/80 to-pink-700/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Ready for Your Kerala Journey?</h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 px-2">Join a small group of like-minded women for the experience of a lifetime.</p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <button className="bg-white text-rose-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold hover:bg-gray-100 transition transform hover:scale-105 shadow-lg w-full sm:w-auto">
                Book Your Journey
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-white/10 transition w-full sm:w-auto">
                Request Custom Itinerary
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