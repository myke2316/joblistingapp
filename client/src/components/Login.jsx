import { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-200 via-white to-green-100 px-4">
      <div className="w-full max-w-md rounded-2xl shadow-lg bg-white/90 border border-green-100 p-10 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
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

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-green-800 mt-6">
          Don’t have an account?{' '}
          <Link to="/register" className="text-green-600 font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
