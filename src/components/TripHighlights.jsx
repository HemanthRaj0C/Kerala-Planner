'use client';

import { useState } from 'react';

export default function TripHighlights() {
  // Define highlight categories with their respective details
  const [activeCategory, setActiveCategory] = useState('nature');
  
  const highlightCategories = {
    nature: [
      {
        title: 'Alleppey Backwaters',
        description: 'Float like royalty on a luxury houseboat while your Instagram followers seethe with jealousy.',
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b', // Houseboat/Backwaters
        facts: ['Better than ANY puddle you\'ve ever seen near your home', 'Your apartment looks like a trash can compared to these houseboats', 'Your dating profile needs these photos desperately']
      },
      {
        title: 'Munnar Tea Plantations',
        description: 'Those sad tea bags in your kitchen cabinet? This is where REAL tea comes from, you uncultured swine.',
        image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368', // Munnar tea plantations
        facts: ['Views so good they\'ll break your phone\'s camera', 'The air smells better than your entire neighborhood', 'You\'ll never respect your grocery store tea again']
      },
      {
        title: 'Periyar Wildlife Sanctuary',
        description: 'See actual wild tigers instead of those sad zoo cats you usually pretend to enjoy.',
        image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2', // Periyar wildlife sanctuary
        facts: ['Watch elephants living their best life while you\'re still figuring out yours', 'No glass barriers like your pathetic local zoo', 'Animals that are more interesting than your current friends']
      }
    ],
    culture: [
      {
        title: 'Kathakali Performances',
        description: 'Witness performers who trained for a DECADE while you can\'t even commit to a full season of any TV show.',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308', // Kathakali performance
        facts: ['More colorful than your entire personality', 'Performers with more talent in their pinky than you have in your entire body', 'Actually worth putting your phone down for once']
      },
      {
        title: 'Fort Kochi',
        description: 'Walk streets that are actually historically significant, not like your suburb from the 1980s that you think is "vintage."',
        image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29', // Fort Kochi
        facts: ['Fishing techniques older than your country', 'Colonial architecture that puts your IKEA furniture to absolute shame', 'Your history teacher would be ashamed you almost missed this']
      },
      {
        title: 'Thrissur Pooram Festival',
        description: 'A festival that makes your local parade look like a sad birthday party for a forgotten hamster.',
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca', // Thrissur Pooram festival
        facts: ['Elephants dressed better than you on your best day', 'Drums that will make your Spotify playlist sound like amateur hour', 'The only thing that might make you interesting at parties']
      }
    ],
    wellness: [
      {
        title: 'Ayurvedic Treatments',
        description: 'Experience actual ancient healing while you usually just pop Advil and hope your problems go away.',
        image: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92', // Ayurveda
        facts: ['Treatments that make your bubble bath look absolutely pathetic', '5,000 years of wisdom vs. your WebMD searches', 'You\'ll never respect your local strip mall "spa" again']
      },
      {
        title: 'Yoga Retreats',
        description: 'Practice yoga where it was meant to be done, not in your stuffy apartment between the couch and that pile of laundry.',
        image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c', // Yoga retreat
        facts: ['Poses with views that destroy your living room scenery', 'Actual peace and quiet without your neighbor\'s terrible music', 'Instructors who won\'t judge your terrible form (at least not to your face)']
      },
      {
        title: 'Wellness Cuisine',
        description: 'Eat food that\'s both healthy AND delicious, not your sad desk salad or "healthy" frozen dinners for one.',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836', // Kerala cuisine
        facts: ['Spices you can\'t even pronounce but will pretend to know later', 'Food that\'s Instagram-worthy without 17 filters', 'Zero chance of getting delivery from this cuisine at your sad apartment']
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
          Nature You're Missing Out On
        </button>
        <button 
          className={`px-6 py-3 font-medium ${activeCategory === 'culture' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-green-600'}`}
          onClick={() => setActiveCategory('culture')}
        >
          Culture You Desperately Need
        </button>
        <button 
          className={`px-6 py-3 font-medium ${activeCategory === 'wellness' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-green-600'}`}
          onClick={() => setActiveCategory('wellness')}
        >
          Wellness Your Sad Life Requires
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
                <h4 className="font-bold mb-2">Brutal Truths:</h4>
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
        <p className="text-lg mb-4">And this is just the stuff we can tell you about without embarrassing you further</p>
        <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">
          See What Else Your Boring Life Is Missing
        </button>
      </div>
    </div>
  );
}