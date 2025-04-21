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
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Login to Continue</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2">Username/Email:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          
          <div className="mb-4">
            <p className="mb-2">I am a:</p>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Female
              </label>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="mr-2"
              />
              Remember me
            </label>
          </div>
          
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}