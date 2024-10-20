
"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Slider: React.FC = () => {
  const images = [
    '/images/error.jpg',
    '/images/error2.jpg',
    '/images/error3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex justify-center items-center py-8 bg-black h-screen">
      <div className="slider relative w-full max-w-lg h-264 md:h-96 shadow-lg rounded overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            width={800}
            height={800}
            className="transition-opacity duration-500 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
