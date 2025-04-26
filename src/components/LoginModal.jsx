'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginModal({ isOpen, onClose }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    gender: '',
    rememberMe: false
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store in localStorage if remember me is checked
    if (formData.rememberMe) {
      localStorage.setItem('username', formData.username);
      localStorage.setItem('gender', formData.gender);
    }
    
    // Store in sessionStorage for current session
    sessionStorage.setItem('username', formData.username);
    sessionStorage.setItem('gender', formData.gender);
    sessionStorage.setItem('isLoggedIn', 'true');
    
    // Redirect based on gender
    if (formData.gender === 'male') {
      router.push('/experience/male');
    } else if (formData.gender === 'female') {
      router.push('/experience/female');
    } else {
      // Default fallback
      router.push('/experience/male');
    }
    
    onClose();
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl p-8 max-w-md w-full shadow-2xl border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Fine, Join Everyone Else</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="username" className="block mb-2 font-medium text-gray-700">What Do We Call You?</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-gray-800 placeholder-gray-400"
                placeholder="Your name that isn't boring"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="password" className="block mb-2 font-medium text-gray-700">Secret Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-gray-800 placeholder-gray-400"
                placeholder="Something better than 'password123'"
                required
              />
            </div>
          </div>
          
          <div className="rounded-lg bg-white border border-gray-200 p-4 shadow-inner">
            <p className="mb-3 font-medium text-gray-700">Which Restroom Do You Use?</p>
            <div className="flex gap-4">
              <label className="relative flex-1 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                  className="peer sr-only"
                  required
                />
                <div className="flex items-center justify-center py-2.5 px-4 rounded-lg border-2 border-gray-200 bg-gray-50 
                               text-gray-700 peer-checked:border-rose-500 peer-checked:bg-rose-50 transition-all hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500 peer-checked:text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Male</span>
                </div>
              </label>
              <label className="relative flex-1 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                  className="peer sr-only"
                />
                <div className="flex items-center justify-center py-2.5 px-4 rounded-lg border-2 border-gray-200 bg-gray-50 
                               text-gray-700 peer-checked:border-rose-500 peer-checked:bg-rose-50 transition-all hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500 peer-checked:text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Female</span>
                </div>
              </label>
            </div>
          </div>
          
          <div className="flex items-center">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="h-6 w-6 border-2 border-gray-300 rounded-md bg-white peer-checked:bg-rose-500 peer-checked:border-rose-500 transition-all"></div>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="absolute top-0.5 left-0.5 h-5 w-5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="ml-3 text-gray-700">Remember me (we know you'll forget)</span>
            </label>
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-rose-500 to-rose-600 text-white py-3 px-6 rounded-lg font-medium shadow-md 
                      hover:from-rose-600 hover:to-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500
                      transition transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Fine, Let Me In
          </button>
          
          <p className="text-center text-sm text-gray-500">
            By clicking above, you agree that we're making your life less boring
          </p>
        </form>
      </div>
    </div>
  );
}