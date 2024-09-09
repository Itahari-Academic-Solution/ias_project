import React, { useState } from 'react';

export default function Popup() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center items-center">
      <div className="relative">
        <div
          className="h-16 w-16 bg-pink-700 hover:bg-pink-800 rounded-full flex items-center justify-center text-white cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="text-4xl text-center"><i class="ri-customer-service-2-line"></i></span>
        </div>

        {/* Popup is always rendered but hidden with opacity */}
        <div
          className={`absolute left-[-450%] bottom-0  bg-white text-black p-2 rounded-md shadow-lg z-30 transition-opacity duration-500 ease-in-out w-72  ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
            <ul>
                <li><span className='text-pink-700 font-semibold text-lg'>Phone:</span> +977 980-4317636</li>
                <li><span className='text-pink-700 font-semibold text-lg'>Email:</span> Itahari.ias@gmail.com</li>
            </ul>
        </div>
      </div>
    </div>
  );
}
