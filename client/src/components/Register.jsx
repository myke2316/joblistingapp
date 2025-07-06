import { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register form submitted');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-200 via-white to-green-100 px-4">
      <div className="w-full max-w-2xl rounded-2xl shadow-lg bg-white/90 border border-green-100 p-10 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['First Name', 'Middle Name', 'Last Name'].map((label, i) => (
              <div key={i} className="relative">
                <input
                  id={label.toLowerCase().replace(' ', '')}
                  type="text"
                  required
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-3 bg-white border border-green-300 text-gray-800 rounded-lg shadow-sm placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                />
                <label
                  htmlFor={label.toLowerCase().replace(' ', '')}
                  className="absolute left-4 top-3 text-sm text-green-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-green-600"
                >
                  {label}
                </label>
              </div>
            ))}
          </div>  

          {/* Gender */}
          <div className="relative">
            <select
              id="gender"
              required
              className="w-full px-4 py-4 bg-white border border-green-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="" disabled selected hidden>Choose Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Address Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Lot Number', 'City', 'Province', 'Country'].map((label, i) => (
              <div key={i} className="relative">
                <input
                  id={label.toLowerCase().replace(' ', '')}
                  type="text"
                  required
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-3 bg-white border border-green-300 text-gray-800 rounded-lg shadow-sm placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                />
                <label
                  htmlFor={label.toLowerCase().replace(' ', '')}
                  className="absolute left-4 top-3 text-sm text-green-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-green-600"
                >
                  {label}
                </label>
              </div>
            ))}
          </div>

          {/* Email */}
          <div className="relative">
            <input
              id="email"
              type="email"
              required
              placeholder=" "
              className="peer w-full px-4 pt-6 pb-3 bg-white border border-green-300 text-gray-800 rounded-lg shadow-sm placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-3 text-sm text-green-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-green-600"
            >
              Email address
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              required
              placeholder=" "
              className="peer w-full px-4 pt-6 pb-3 bg-white border border-green-300 text-gray-800 rounded-lg shadow-sm placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-3 text-sm text-green-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-green-600"
            >
              Password
            </label>
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-sm text-green-500 cursor-pointer"
            >
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              id="confirmPassword"
              type={showConfirm ? 'text' : 'password'}
              required
              placeholder=" "
              className="peer w-full px-4 pt-6 pb-3 bg-white border border-green-300 text-gray-800 rounded-lg shadow-sm placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            />
            <label
              htmlFor="confirmPassword"
              className="absolute left-4 top-3 text-sm text-green-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-green-600"
            >
              Confirm Password
            </label>
            <span
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-4 text-sm text-green-500 cursor-pointer"
            >
              {showConfirm ? 'Hide' : 'Show'}
            </span>
          </div>

          {/* Work Preference */}
          <div className="space-y-2">
            <label className="block text-green-600 font-medium">Work Preference</label>
            <div className="flex gap-4">
              {['Full Time', 'Part Time', 'Work From Home'].map((option, i) => (
                <label key={i} className="flex items-center space-x-2 text-sm text-green-700">
                  <input
                    type="radio"
                    name="workPreference"
                    value={option}
                    required
                    className="accent-green-600"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Resume Upload */}
          <div className="space-y-2">
            <label htmlFor="resume" className="block text-sm font-medium text-green-600">
              Upload Resume (PDF or DOC)
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              className="w-full border border-green-300 px-4 py-2 rounded-lg"
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <label htmlFor="profileImage" className="block text-sm font-medium text-green-600">
              Upload Profile Image
            </label>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              accept="image/*"
              required
              className="w-full border border-green-300 px-4 py-2 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-green-800 mt-6">
          Already have an account?{' '}
          <Link to="/" className="text-green-600 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
