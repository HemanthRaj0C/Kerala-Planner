'use client';

import { useState, useEffect, useRef } from 'react';

export default function EnhancedBrochure() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const autoplayRef = useRef(null);
  
  // Brochure pages content
  const pages = [
    {
      title: "Kerala: God's Own Country",
      content: "Experience the magic of Kerala with our carefully curated 7-day adventure. From serene backwaters to lush hill stations, immerse yourself in the natural beauty and rich culture of this tropical paradise.",
      image: "/images/brochure/cover.jpg",
      isMainPage: true,
      bgColor: "bg-emerald-50"
    },
    {
      title: "Day 1-2: Cochin & Fort Kochi",
      content: "Begin your journey in the historic port city of Kochi. Explore the charming streets of Fort Kochi with its colonial architecture, Chinese fishing nets, and vibrant local markets. Experience a traditional Kathakali performance in the evening.",
      image: "/images/brochure/kochi.jpg",
      highlights: [
        "Visit the 16th-century Mattancherry Palace",
        "Witness the iconic Chinese fishing nets at sunset",
        "Explore the historic Jewish Synagogue",
        "Enjoy authentic Kerala seafood cuisine"
      ],
      bgColor: "bg-blue-50"
    },
    {
      title: "Day 3-4: Alleppey Backwaters",
      content: "Cruise through the tranquil backwaters of Alleppey on a traditional houseboat. Wind through narrow canals lined with coconut palms, passing villages and rice paddies. Experience the unique ecosystem and way of life on these waters.",
      image: "/images/brochure/alleppey.jpg",
      highlights: [
        "Overnight stay on a luxury houseboat",
        "Fresh seafood prepared by your private chef",
        "Village visits and cultural interactions",
        "Breathtaking sunset views over the backwaters"
      ],
      bgColor: "bg-teal-50"
    },
    {
      title: "Day 5-6: Munnar Hill Station",
      content: "Ascend to the cool heights of Munnar, surrounded by rolling hills of tea plantations. The fresh mountain air and stunning vistas offer a perfect contrast to the tropical lowlands. Explore tea estates and spot unique wildlife.",
      image: "/images/brochure/munnar.jpg",
      highlights: [
        "Tour of working tea plantations and factory",
        "Hike through the Eravikulam National Park",
        "Visit to the Mattupetty Dam and Echo Point",
        "Experience the rare Neelakurinji flowers (if in bloom)"
      ],
      bgColor: "bg-green-50"
    },
    {
      title: "Day 7: Ayurvedic Experience",
      content: "Conclude your journey with a day dedicated to wellness in the tradition of Ayurveda, Kerala's ancient healing system. Rejuvenate your body and mind with traditional treatments using local herbs and techniques.",
      image: "/images/brochure/ayurveda.jpg",
      highlights: [
        "Personalized Ayurvedic consultation",
        "Traditional massage and treatment session",
        "Ayurvedic cooking demonstration",
        "Farewell dinner with Kerala specialties"
      ],
      bgColor: "bg-amber-50"
    },
    {
      title: "Practical Information",
      content: "Our trip departs on June 15, 2025. The package includes all accommodations, transportation within Kerala, most meals, and guided experiences. Group size is limited to 24 participants to ensure a personalized experience.",
      image: "/images/brochure/info.jpg",
      isInfoPage: true,
      details: [
        "Price: $1,895 per person (double occupancy)",
        "Single supplement: $450",
        "Deposit: $500 (due at registration)",
        "Full payment due: April 30, 2025",
        "Climate: Warm and humid (24-32°C/75-90°F)",
        "Recommended items: Light clothing, rain jacket, insect repellent"
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
          className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition mr-2"
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            
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
              className={`bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg transform transition hover:scale-110 ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextPage}
              disabled={currentPage === pages.length - 1}
              className={`bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg transform transition hover:scale-110 ${currentPage === pages.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Page content */}
        <div className="p-10">
          <p className="mb-8 text-lg leading-relaxed">{pages[currentPage].content}</p>
          
          {/* Conditional rendering based on page type */}
          {pages[currentPage].highlights && (
            <div className="mb-8 bg-white/50 p-6 rounded-xl shadow-inner">
              <h3 className="font-bold text-xl mb-4 text-green-800 border-b border-green-200 pb-2">Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {pages[currentPage].highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {pages[currentPage].details && (
            <div className="mb-8 bg-white/50 p-6 rounded-xl shadow-inner">
              <h3 className="font-bold text-xl mb-4 text-green-800 border-b border-green-200 pb-2">Trip Details</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {pages[currentPage].details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {pages[currentPage].isMainPage && (
            <div className="mt-8 text-center py-6 bg-white/50 rounded-xl shadow-inner">
              <span className="text-3xl font-bold text-green-700">Kerala Adventure 2025</span>
              <p className="mt-3 text-gray-700 text-lg">June 15-21, 2025</p>
              <div className="mt-4 flex justify-center">
                <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Limited Spots Available</span>
              </div>
            </div>
          )}
          
          {pages[currentPage].isInfoPage && (
            <div className="mt-8 text-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition transform hover:scale-105 shadow-lg">
                Reserve Your Spot
              </button>
              <p className="mt-4 text-gray-600">Contact us at travel@keraladventures.com</p>
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
                ? 'bg-green-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Progress bar */}
      <div className="mt-4 bg-gray-200 rounded-full h-1 max-w-md mx-auto overflow-hidden">
        <div 
          className="bg-green-600 h-full transition-all duration-300 ease-out"
          style={{ width: `${((currentPage + 1) / pages.length) * 100}%` }}
        />
      </div>
    </div>
  );
}