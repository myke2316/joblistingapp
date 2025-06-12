import React, { useState } from 'react';
import './index.css';
import Group5 from './Group5.png';

export default function NavBar() {
  const [active, setActive] = useState('Find Jobs');
  const menu = ['Find Jobs', 'Find Talent', 'Upload a Job', 'About'];

  return (
    <nav className="font-poppins">
      <div className='w-full bg-white shadow-md h-[90px] flex'>
        <div className="w-[20%] border-black flex items-center justify-start text-center">
          <img className='h-19 w-8 ml-6' src={Group5} alt="" />
          <h1 className='ml-4 text-2xl'>Joblisting App</h1>
        </div>
        <div className="w-[60%] border flex items-center justify-center gap-8">
          {menu.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`relative pb-2 text-base font-medium transition
                ${active === item ? 'text-blue-600' : 'hover:text-blue-600'}
              `}
              style={{ background: 'none', border: 'none', outline: 'none' }}
            >
              {item}
              {active === item && (
                <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-600 rounded"></span>
              )}
            </button>
          ))}
        </div>
        <div className="w-[20%] border">
          {/* Right content */}
        </div>
      </div>
    </nav>
  );
}