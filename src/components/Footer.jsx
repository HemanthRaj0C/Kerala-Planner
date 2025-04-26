'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [emailValue, setEmailValue] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailValue) {
      setIsSubscribed(true);
      setEmailValue('');
      // Would normally submit to a backend here
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }
  };
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 via-amber-300 to-rose-400"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600 rounded-full opacity-10 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500 rounded-full opacity-5 -ml-48 -mb-48"></div>
      
      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* About Section */}
          <div className="md:col-span-4 transform transition duration-500 hover:translate-y-[-5px]">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Kerala Adventure
            </h3>
            <p className="mb-6 text-gray-200 leading-relaxed">
              Stop daydreaming about being interesting and actually do something with your life.
              Our Kerala trips are what your social media profile desperately needs. Better than
              staying home watching the same shows on repeat.
            </p>
            <div className="flex items-center text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-rose-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <div>
                <p>Making Boring People Interesting Since 2023</p>
                <p>Kerala, India (Look It Up)</p>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-700">Get Over Here</h3>
            <ul className="space-y-2">
              <li className="transform transition duration-300 hover:translate-x-2">
                <Link href="/" className="hover:text-rose-300 transition flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-rose-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Home (Boring)
                </Link>
              </li>
              <li className="transform transition duration-300 hover:translate-x-2">
                <Link href="/join-form" className="hover:text-rose-300 transition flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-rose-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Commit Already
                </Link>
              </li>
              <li className="transform transition duration-300 hover:translate-x-2">
                <Link href="/feedback-form" className="hover:text-rose-300 transition flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-rose-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Make Excuses
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Experiences */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-700">When You Stop Being Afraid</h3>
            <ul className="space-y-2">
              <li className="transform transition duration-300 hover:translate-x-2">
                <a href="#" className="hover:text-rose-300 transition flex items-center group">
                  <span className="relative w-6 h-6 mr-2 overflow-hidden rounded-md">
                    <span className="absolute inset-0 bg-rose-400 opacity-20 group-hover:opacity-40 transition"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-rose-300" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                    </svg>
                  </span>
                  Boats Better Than Your Tub
                </a>
              </li>
              <li className="transform transition duration-300 hover:translate-x-2">
                <a href="#" className="hover:text-rose-300 transition flex items-center group">
                  <span className="relative w-6 h-6 mr-2 overflow-hidden rounded-md">
                    <span className="absolute inset-0 bg-rose-400 opacity-20 group-hover:opacity-40 transition"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-rose-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Real Wellness, Not Instagram
                </a>
              </li>
              <li className="transform transition duration-300 hover:translate-x-2">
                <a href="#" className="hover:text-rose-300 transition flex items-center group">
                  <span className="relative w-6 h-6 mr-2 overflow-hidden rounded-md">
                    <span className="absolute inset-0 bg-rose-400 opacity-20 group-hover:opacity-40 transition"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-rose-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Animals Not Behind Glass
                </a>
              </li>
              <li className="transform transition duration-300 hover:translate-x-2">
                <a href="#" className="hover:text-rose-300 transition flex items-center group">
                  <span className="relative w-6 h-6 mr-2 overflow-hidden rounded-md">
                    <span className="absolute inset-0 bg-rose-400 opacity-20 group-hover:opacity-40 transition"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-rose-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8a0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Culture Beyond Netflix
                </a>
              </li>
              <li className="transform transition duration-300 hover:translate-x-2">
                <a href="#" className="hover:text-rose-300 transition flex items-center group">
                  <span className="relative w-6 h-6 mr-2 overflow-hidden rounded-md">
                    <span className="absolute inset-0 bg-rose-400 opacity-20 group-hover:opacity-40 transition"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-rose-300" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                  </span>
                  Markets That Don't Sell Soap
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Subscription */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-700">Get Better Updates</h3>
            <p className="mb-4 text-gray-200">
              Subscribe to find out what your friends already know about. Your inbox could use some excitement.
            </p>
            
            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex items-center mb-2">
                <input
                  type="email"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  placeholder="That email you actually check"
                  className="w-full bg-gray-700 bg-opacity-50 border border-gray-600 rounded-l-md py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-rose-400"
                  required
                />
                <button
                  type="submit"
                  className="bg-rose-500 hover:bg-rose-600 transition py-2 px-4 rounded-r-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-rose-500 hover:scale-y-110 transform duration-250"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6.5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              
              {isSubscribed && (
                <div className="absolute -bottom-8 left-0 w-full bg-rose-600 text-white text-sm py-1 px-3 rounded-md animate-pulse">
                  Fine, now we'll email you too!
                </div>
              )}
            </form>
          </div>
        </div>
        
        {/* Social Media & Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} Kerala Adventure. All rights we made up.
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-rose-400 transition">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-rose-400 transition">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-rose-400 transition">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-rose-400 transition">
              <span className="sr-only">YouTube</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Legal Links */}
        <div className="mt-6 text-center text-xs text-gray-500">
          <span className="inline-block mx-2 hover:text-rose-400 cursor-pointer">Privacy Policy (Like You Read It)</span>
          <span className="inline-block mx-2">|</span>
          <span className="inline-block mx-2 hover:text-rose-400 cursor-pointer">Terms (That You'll Ignore)</span>
          <span className="inline-block mx-2">|</span>
          <span className="inline-block mx-2 hover:text-rose-400 cursor-pointer">Contact (We Might Answer)</span>
        </div>
      </div>
    </footer>
  );
}