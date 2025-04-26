'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Header({ onLoginClick }) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Check login status on component mount and window focus
  useEffect(() => {
    checkLoginStatus();
    window.addEventListener('focus', checkLoginStatus);
    
    // Add scroll event listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('focus', checkLoginStatus);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const checkLoginStatus = () => {
    const loginStatus = sessionStorage.getItem('isLoggedIn');
    const storedUsername = sessionStorage.getItem('username') || localStorage.getItem('username');
    setIsLoggedIn(loginStatus === 'true');
    setUsername(storedUsername || '');
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('gender');
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/50 backdrop-blur-md shadow-lg py-3 my-3 rounded-3xl' 
        : 'bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm py-6 rounded-xl'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center">
            <div className="relative overflow-hidden">
              <div className={`absolute -inset-1 ${isScrolled ? 'bg-gradient-to-r from-rose-400 to-rose-500' : 'bg-gradient-to-r from-rose-400 to-amber-400'} rounded-full blur-sm opacity-30 group-hover:opacity-70 transition duration-300`}></div>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-9 w-9 relative ${isScrolled ? 'text-rose-600' : 'text-rose-400'} transition-transform duration-300 group-hover:rotate-12`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div className="ml-3 flex flex-col">
              <span className={`text-2xl font-extrabold ${isScrolled ? 'text-gray-800' : 'text-white'} transition-all duration-300 group-hover:tracking-wider`}>
                Kerala <span className={`${isScrolled ? 'text-rose-600' : 'text-rose-400'}`}>Adventure</span>
              </span>
              <span className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-gray-300'} italic mt-[-4px]`}>
                Better Than Your Couch
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`font-medium ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-rose-400 transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-rose-400 after:transition-all after:duration-300`}>
              Home (Boring)
            </Link>
            {isLoggedIn && (
              <Link 
                href={`/experience/${sessionStorage.getItem('gender') || localStorage.getItem('gender') || 'male'}`} 
                className={`font-medium ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-rose-400 transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-rose-400 after:transition-all after:duration-300`}
              >
                Actually Do Something
              </Link>
            )}
            <Link href="/join-form" className={`font-medium ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-rose-400 transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-rose-400 after:transition-all after:duration-300`}>
              Commit Already
            </Link>
            <Link href="/feedback-form" className={`font-medium ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-rose-400 transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-rose-400 after:transition-all after:duration-300`}>
              Make Excuses
            </Link>
            
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <div className={`relative flex items-center ${isScrolled ? 'text-gray-800 bg-gray-100' : 'text-white bg-white/20'} px-4 py-1.5 rounded-full shadow-sm`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{username}</span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="relative overflow-hidden bg-gradient-to-r from-rose-500 to-rose-600 text-white px-5 py-1.5 rounded-full font-medium shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span className="relative z-10">Run Away</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-rose-600 to-rose-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </div>
            ) : (
              <button 
                onClick={onLoginClick} 
                className="relative overflow-hidden bg-gradient-to-r from-rose-500 to-rose-600 text-white px-6 py-1.5 rounded-full font-medium shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="relative z-10">Sign Up Already</span>
                <span className="absolute inset-0 bg-gradient-to-r from-rose-600 to-rose-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-amber-400 to-rose-400 opacity-30 blur group-hover:opacity-40 transition duration-200"></span>
              </button>
            )}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'} focus:outline-none p-2 rounded-full transition-all duration-300`}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 pt-3 transition-all duration-500 ease-in-out origin-top">
            <div className={`flex flex-col space-y-3 ${isScrolled ? 'bg-white shadow-xl' : 'bg-gray-800/95'} backdrop-blur-md rounded-2xl p-4 border ${isScrolled ? 'border-gray-200' : 'border-gray-700'}`}>
              <Link href="/" className={`flex items-center py-2 px-4 ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'} rounded-lg transition-all duration-200`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Home (Boring)
              </Link>
              {isLoggedIn && (
                <Link 
                  href={`/experience/${sessionStorage.getItem('gender') || localStorage.getItem('gender') || 'male'}`} 
                  className={`flex items-center py-2 px-4 ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'} rounded-lg transition-all duration-200`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  Actually Do Something
                </Link>
              )}
              <Link href="/join-form" className={`flex items-center py-2 px-4 ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'} rounded-lg transition-all duration-200`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                </svg>
                Commit Already
              </Link>
              <Link href="/feedback-form" className={`flex items-center py-2 px-4 ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'} rounded-lg transition-all duration-200`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
                Make Excuses
              </Link>
              
              {isLoggedIn ? (
                <div className="space-y-3 pt-2 border-t border-dashed mt-2 border-opacity-40 border-gray-400">
                  <div className={`flex items-center px-4 py-2 ${isScrolled ? 'text-gray-700 bg-gray-100' : 'text-gray-200 bg-white/10'} rounded-lg`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <span>Fine, {username}</span>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className={`w-full bg-gradient-to-r from-rose-500 to-rose-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex justify-center items-center`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V7.414l-5-5H3zm7 5a1 1 0 10-2 0v4.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 12.586V8z" clipRule="evenodd" />
                    </svg>
                    Run Away
                  </button>
                </div>
              ) : (
                <button 
                  onClick={onLoginClick} 
                  className={`w-full mt-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex justify-center items-center`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.03-.692-.08-1.024A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                  Sign Up Already
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}