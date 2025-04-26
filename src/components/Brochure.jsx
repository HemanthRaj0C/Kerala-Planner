'use client';

import { useState, useEffect, useRef } from 'react';

export default function EnhancedBrochure() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const autoplayRef = useRef(null);
  
  // Brochure pages content with updated mocking tone
  const pages = [
    {
      title: "Stop Scrolling And Do Something",
      content: "Instead of wasting another year of your life looking at other people's vacations, how about you actually experience something worth talking about for once? Our Kerala trip is better than whatever's in your sad social feed.",
      image: "/images/brochure/cover.jpg",
      isMainPage: true,
      bgColor: "bg-emerald-50"
    },
    {
      title: "Day 1-2: Finally See Something Real",
      content: "Your apartment walls are tired of your face. Start in Kochi, where you can pretend to be cultured as you discover architecture that's been around longer than your attention span. Your Instagram will actually be interesting for once.",
      image: "/images/brochure/kochi.jpg",
      highlights: [
        "Visit historic places instead of the same coffee shop",
        "See sunset views without adding a filter",
        "Actually learn history not from Netflix",
        "Eat real seafood, not frozen grocery store trash"
      ],
      bgColor: "bg-blue-50"
    },
    {
      title: "Day 3-4: Water Better Than Your Bathtub",
      content: "Put down your rubber duck and experience actual water. Float through Alleppey on a houseboat that makes your apartment look like the sad box it is. Maybe you'll finally relax instead of just saying you're going to.",
      image: "/images/brochure/alleppey.jpg",
      highlights: [
        "Sleep on a boat, not your secondhand mattress",
        "Fresh seafood not from a delivery app",
        "Meet people besides your same 3 friends",
        "Sunsets more impressive than your screen saver"
      ],
      bgColor: "bg-teal-50"
    },
    {
      title: "Day 5-6: Hills That Aren't Just Desktop Wallpapers",
      content: "Yes, touching grass is an actual thing. Munnar's hills and tea plantations will make your sad house plant collection look even more pathetic. Breathe air that hasn't been recycled through your apartment's HVAC system.",
      image: "/images/brochure/munnar.jpg",
      highlights: [
        "See how tea is actually made, not just steeped",
        "Walk in nature without complaining about it",
        "Views better than whatever you're watching on Netflix",
        "See flowers that aren't from the grocery store"
      ],
      bgColor: "bg-green-50"
    },
    {
      title: "Day 7: Wellness Better Than Your App",
      content: "End your trip with actual self-care, not just buying another scented candle. Experience Ayurveda, which has been working for thousands of years, unlike your fad diet that you'll quit next week.",
      image: "/images/brochure/ayurveda.jpg",
      highlights: [
        "Real health advice, not from TikTok",
        "Massages better than your foam roller",
        "Learn cooking skills beyond microwaving",
        "Final dinner better than your takeout ritual"
      ],
      bgColor: "bg-amber-50"
    },
    {
      title: "Stuff You Need To Know",
      content: "We're leaving May first week. This trip includes everything you need because we know you can't plan your way out of a paper bag. Limited to 24 people so we don't have to deal with too many of you at once.",
      image: "/images/brochure/info.jpg",
      isInfoPage: true,
      details: [
        "Price: Depending on Number of People (cheaper than your monthly takeout habit)",
        "Weather: Warm and humid (24-32°C/75-90°F)",
        "Pack: Light clothing, rain jacket, bug spray (duh)"
      ],
      bgColor: "bg-orange-50"
    }
  ];
  
  // Autoplay logic
  useEffect(() => {
    const handleAutoplay = () => {
      if (isPlaying && !isHovering) {
        setCurrentPage((prev) => (prev < pages.length - 1 ? prev + 1 : 0));
      }
    };

    // Set up autoplay timer
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    
    autoplayRef.current = setInterval(handleAutoplay, 5000);
    
    // Clean up timer on unmount
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isPlaying, isHovering, pages.length]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev < pages.length - 1 ? prev + 1 : prev));
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };
  
  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  return (
    <div className="max-w-5xl mx-auto my-12">
      {/* Control buttons */}
      <div className="flex justify-end mb-4">
        <button 
          onClick={togglePlayPause}
          className="bg-rose-600 text-white p-2 rounded-full hover:bg-rose-700 transition mr-2"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>
      </div>

      {/* Brochure viewer */}
      <div 
        className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 transform ${pages[currentPage].bgColor}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={() => setIsHovering(true)}
        onTouchEnd={() => setIsHovering(false)}
      >
        <div className="relative">
          {/* Page image with overlay gradient */}
          <div className="relative">
            <img 
              src={pages[currentPage].image} 
              alt={pages[currentPage].title} 
              className="w-full h-96 object-cover transition-transform duration-700 ease-in-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            
            {/* Page title overlay */}
            <h2 className="absolute bottom-8 left-8 text-3xl font-bold text-white drop-shadow-lg">
              {pages[currentPage].title}
            </h2>
          </div>
          
          {/* Page navigation arrows */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-6 -translate-y-1/2">
            <button 
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg transform transition hover:scale-110 ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextPage}
              disabled={currentPage === pages.length - 1}
              className={`bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg transform transition hover:scale-110 ${currentPage === pages.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Page content */}
        <div className="p-10">
          <p className="mb-8 text-lg leading-relaxed text-gray-800">{pages[currentPage].content}</p>
          
          {/* Conditional rendering based on page type */}
          {pages[currentPage].highlights && (
            <div className="mb-8 bg-white/60 p-6 rounded-xl shadow-inner">
              <h3 className="font-bold text-xl mb-4 text-rose-800 border-b border-rose-200 pb-2">Things Your Feed Needs</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {pages[currentPage].highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-800">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {pages[currentPage].details && (
            <div className="mb-8 bg-white/60 p-6 rounded-xl shadow-inner">
              <h3 className="font-bold text-xl mb-4 text-rose-800 border-b border-rose-200 pb-2">The Fine Print</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {pages[currentPage].details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-800">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {pages[currentPage].isMainPage && (
            <div className="mt-8 text-center py-6 bg-white/60 rounded-xl shadow-inner">
              <span className="text-3xl font-bold text-rose-700">Stop Being Boring in 2025</span>
              <p className="mt-3 text-gray-700 text-lg">May first week</p>
              <div className="mt-4 flex justify-center">
                <span className="inline-block bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-medium">Your Friends Are Already Going</span>
              </div>
            </div>
          )}
          
          {pages[currentPage].isInfoPage && (
            <div className="mt-8 text-center">
              <button className="bg-rose-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-rose-700 transition transform hover:scale-105 shadow-lg">
                Fine, I'll Join
              </button>
              <p className="mt-4 text-gray-600">Or email try.something.new@keraladventures.com</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Page indicator dots with progress animation */}
      <div className="flex justify-center mt-8 space-x-3">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentPage === index 
                ? 'bg-rose-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Progress bar */}
      <div className="mt-4 bg-gray-200 rounded-full h-1 max-w-md mx-auto overflow-hidden">
        <div 
          className="bg-rose-600 h-full transition-all duration-300 ease-out"
          style={{ width: `${((currentPage + 1) / pages.length) * 100}%` }}
        />
      </div>
    </div>
  );
}