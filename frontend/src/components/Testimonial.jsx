import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons for navigation
import { testimonials } from '../assets/assets'; // Import testimonials from assets

const Testimonial = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(1); // Start with the center testimonial
  const [direction, setDirection] = useState(''); // To track swipe direction

  // Automatically cycle through testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('next');
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Handle manual navigation
  const goToNext = () => {
    setDirection('next');
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setDirection('prev');
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Calculate the indices of the testimonials to display
  const getTestimonialIndices = () => {
    const prev =
      activeTestimonial === 0 ? testimonials.length - 1 : activeTestimonial - 1;
    const next = (activeTestimonial + 1) % testimonials.length;
    return [prev, activeTestimonial, next];
  };

  const [prevIndex, activeIndex, nextIndex] = getTestimonialIndices();

  return (
    <div className="py-16 my-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
          What Our Clients Say
        </h2>
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 z-10"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 z-10"
          >
            <FaChevronRight className="text-gray-700" />
          </button>

          {/* Testimonial Content */}
          <div className="flex items-center justify-center space-x-4 md:space-x-8 relative h-64 md:h-96">
            {/* Previous Testimonial */}
            <div
              className={`w-1/4 md:w-1/3 opacity-50 transform scale-90 transition-all duration-500 ease-in-out ${
                direction === 'next'
                  ? 'animate-slide-out-prev'
                  : 'animate-slide-in-prev'
              }`}
            >
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-[11px_10px_0px_rgba(0,0,0,0.85)] border-[1px] border-black h-56 md:h-80 flex flex-col justify-center overflow-y-auto">
                <div className="flex flex-col items-center">
                  <img
                    src={testimonials[prevIndex].image} // Use imported image
                    alt={testimonials[prevIndex].name}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full mb-2 object-cover"
                  />
                  <h3 className="text-[10px] sm:text-xs md:text-lg font-semibold text-gray-900">
                    {testimonials[prevIndex].name}
                  </h3>
                  <p className="text-[8px] sm:text-xs md:text-sm text-gray-500">
                    {testimonials[prevIndex].role}
                  </p>
                  <p className="text-[8px] sm:text-xs md:text-sm text-gray-600 italic text-center mt-2 line-clamp-2 md:line-clamp-none">
                    "{testimonials[prevIndex].comment}"
                  </p>
                </div>
              </div>
            </div>

            {/* Active Testimonial */}
            <div
              className={`w-1/2 md:w-1/3 transition-all duration-500 ease-in-out ${
                direction === 'next'
                  ? 'animate-slide-in-next'
                  : 'animate-slide-in-prev'
              }`}
            >
              <div className="relative z-20">
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-[11px_10px_0px_rgba(0,0,0,0.85)] border-[1px] border-black h-64 md:h-96 flex flex-col justify-center overflow-y-auto">
                  <div className="flex flex-col items-center">
                    <img
                      src={testimonials[activeIndex].image} // Use imported image
                      alt={testimonials[activeIndex].name}
                      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full mb-4 object-cover"
                    />
                    <h3 className="text-xs sm:text-sm md:text-xl font-semibold text-gray-900">
                      {testimonials[activeIndex].name}
                    </h3>
                    <p className="text-[10px] sm:text-xs md:text-base text-gray-500">
                      {testimonials[activeIndex].role}
                    </p>
                    <p className="text-[10px] sm:text-xs md:text-base text-gray-600 italic text-center mt-4 line-clamp-2 md:line-clamp-none">
                      "{testimonials[activeIndex].comment}"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Testimonial */}
            <div
              className={`w-1/4 md:w-1/3 opacity-50 transform scale-90 transition-all duration-500 ease-in-out ${
                direction === 'next'
                  ? 'animate-slide-in-next'
                  : 'animate-slide-out-next'
              }`}
            >
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-[11px_10px_0px_rgba(0,0,0,0.85)] border-[1px] border-black h-56 md:h-80 flex flex-col justify-center overflow-y-auto">
                <div className="flex flex-col items-center">
                  <img
                    src={testimonials[nextIndex].image} // Use imported image
                    alt={testimonials[nextIndex].name}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full mb-2 object-cover"
                  />
                  <h3 className="text-[10px] sm:text-xs md:text-lg font-semibold text-gray-900">
                    {testimonials[nextIndex].name}
                  </h3>
                  <p className="text-[8px] sm:text-xs md:text-sm text-gray-500">
                    {testimonials[nextIndex].role}
                  </p>
                  <p className="text-[8px] sm:text-xs md:text-sm text-gray-600 italic text-center mt-2 line-clamp-2 md:line-clamp-none">
                    "{testimonials[nextIndex].comment}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeTestimonial ? 'next' : 'prev');
                  setActiveTestimonial(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === activeTestimonial
                    ? 'bg-blue-500'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;