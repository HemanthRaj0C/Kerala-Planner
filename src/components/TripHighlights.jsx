'use client';

import { useState } from 'react';

export default function TripHighlights() {
  // Define highlight categories with their respective details
  const [activeCategory, setActiveCategory] = useState('nature');
  
  const highlightCategories = {
    nature: [
      {
        title: 'Alleppey Backwaters',
        description: 'Experience the serene beauty of Kerala\'s backwaters on a traditional houseboat.',
        image: '/images/highlights/backwaters.jpg',
        facts: ['Over 900 km of interconnected waterways', 'Known as the "Venice of the East"', 'Home to diverse aquatic life']
      },
      {
        title: 'Munnar Tea Plantations',
        description: 'Explore lush tea gardens set against the backdrop of the Western Ghats.',
        image: '/images/highlights/munnar.jpg',
        facts: ['Situated at 1,600 meters above sea level', 'Home to the endangered Nilgiri Tahr', 'Tea plantations established in the late 19th century']
      },
      {
        title: 'Periyar Wildlife Sanctuary',
        description: 'Spot elephants, tigers, and other wildlife in their natural habitat.',
        image: '/images/highlights/periyar.jpg',
        facts: ['Covers an area of 925 sq km', 'Home to over 35 species of mammals', 'Known for bamboo raft safaris']
      }
    ],
    culture: [
      {
        title: 'Kathakali Performances',
        description: 'Witness this classical dance form known for its elaborate costumes and makeup.',
        image: '/images/highlights/kathakali.jpg',
        facts: ['Originated in the 17th century', 'Performers train for 8-10 years', 'Each facial expression has a specific meaning']
      },
      {
        title: 'Fort Kochi',
        description: 'Walk through the historic streets with influences from Portuguese, Dutch, and British colonizers.',
        image: '/images/highlights/fort-kochi.jpg',
        facts: ['Chinese fishing nets date back to the 14th century', 'Home to the oldest European church in India', 'Was a major spice trading center']
      },
      {
        title: 'Thrissur Pooram Festival',
        description: 'Experience Kerala\'s most famous temple festival with elaborate elephant processions.',
        image: '/images/highlights/thrissur.jpg',
        facts: ['Features over 30 caparisoned elephants', 'Famous for its percussion ensembles', 'Tradition dating back to the late 18th century']
      }
    ],
    wellness: [
      {
        title: 'Ayurvedic Treatments',
        description: 'Rejuvenate your body and mind with traditional Ayurvedic therapies.',
        image: '/images/highlights/ayurveda.jpg',
        facts: ['Kerala is known as the birthplace of Ayurveda', 'Treatments use herbs and oils from the Western Ghats', 'Some therapies date back over 5,000 years']
      },
      {
        title: 'Yoga Retreats',
        description: 'Practice yoga and meditation in Kerala\'s tranquil natural settings.',
        image: '/images/highlights/yoga.jpg',
        facts: ['Combines traditional techniques with natural surroundings', 'Courses available for beginners to advanced practitioners', 'Often incorporates local healing traditions']
      },
      {
        title: 'Wellness Cuisine',
        description: 'Savor nutritious and delicious plant-based Kerala cuisine.',
        image: '/images/highlights/cuisine.jpg',
        facts: ['Rich in coconut, spices, and fresh vegetables', 'Many dishes have medicinal properties', 'Emphasizes seasonal and local ingredients']
      }
    ]
  };

  return (
    <div className="py-8">
      {/* Category Tabs */}
      <div className="flex justify-center mb-8 border-b">
        <button 
          className={`px-6 py-3 font-medium ${activeCategory === 'nature' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-green-600'}`}
          onClick={() => setActiveCategory('nature')}
        >
          Nature & Wildlife
        </button>
        <button 
          className={`px-6 py-3 font-medium ${activeCategory === 'culture' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-green-600'}`}
          onClick={() => setActiveCategory('culture')}
        >
          Culture & Heritage
        </button>
        <button 
          className={`px-6 py-3 font-medium ${activeCategory === 'wellness' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-green-600'}`}
          onClick={() => setActiveCategory('wellness')}
        >
          Wellness & Relaxation
        </button>
      </div>
      
      {/* Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {highlightCategories[activeCategory].map((highlight, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-[16/9] relative">
              <img src={highlight.image} alt={highlight.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
              <p className="text-gray-700 mb-4">{highlight.description}</p>
              <div className="border-t pt-4">
                <h4 className="font-bold mb-2">Quick Facts:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {highlight.facts.map((fact, factIndex) => (
                    <li key={factIndex} className="text-sm text-gray-600">{fact}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Call to Action */}
      <div className="text-center mt-10">
        <p className="text-lg mb-4">These are just a few highlights of what awaits you in God's Own Country</p>
        <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">
          Explore Full Itinerary
        </button>
      </div>
    </div>
  );
}