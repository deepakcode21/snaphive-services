import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons for navigation

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Homeowner",
    comment:
      "SnapHive made finding a plumber so easy! The professional was punctual, skilled, and fixed my issue in no time. Highly recommend!",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Business Owner",
    comment:
      "I booked an electrician through SnapHive, and the service was exceptional. The platform is user-friendly, and the professionals are top-notch.",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Fitness Enthusiast",
    comment:
      "I found the perfect fitness trainer on SnapHive. The trainer was knowledgeable and helped me achieve my fitness goals. Thank you!",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Homeowner",
    comment:
      "SnapHive is a lifesaver! I found a great painter who transformed my home. The process was seamless, and the results were amazing.",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    name: "Sarah Lee",
    role: "Event Planner",
    comment:
      "I used SnapHive to find a caterer for my event, and it was a fantastic experience. The caterer was professional and delivered delicious food!",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 6,
    name: "David Wilson",
    role: "Software Engineer",
    comment:
      "SnapHive helped me find a reliable handyman. The service was quick, and the handyman did an excellent job fixing my shelves.",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 7,
    name: "Emily Davis",
    role: "Teacher",
    comment:
      "I booked a tutor for my son through SnapHive, and it was a great decision. The tutor was patient and helped him improve his grades significantly.",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 8,
    name: "Chris Evans",
    role: "Photographer",
    comment:
      "SnapHive connected me with a fantastic model for my photoshoot. The platform is easy to use, and the results were outstanding.",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 9,
    name: "Laura Martinez",
    role: "Interior Designer",
    comment:
      "I found a skilled carpenter on SnapHive who helped me with a custom furniture project. The craftsmanship was impeccable!",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 10,
    name: "Daniel Garcia",
    role: "Chef",
    comment:
      "SnapHive helped me find a sous chef for my restaurant. The process was smooth, and the chef was highly skilled and professional.",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 11,
    name: "Olivia Taylor",
    role: "Yoga Instructor",
    comment:
      "I used SnapHive to find a studio space for my yoga classes. The platform made it easy to find the perfect location quickly.",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 12,
    name: "James Anderson",
    role: "Real Estate Agent",
    comment:
      "SnapHive helped me find a reliable cleaning service for my properties. The cleaners were thorough and efficient.",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 13,
    name: "Sophia Clark",
    role: "Graphic Designer",
    comment:
      "I found a great web developer on SnapHive who helped me redesign my portfolio. The results were beyond my expectations!",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 14,
    name: "William Rodriguez",
    role: "Musician",
    comment:
      "SnapHive connected me with a sound engineer for my recording sessions. The engineer was professional and delivered high-quality work.",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 15,
    name: "Ava Hernandez",
    role: "Marketing Specialist",
    comment:
      "I used SnapHive to find a social media manager for my campaign. The manager was creative and helped me achieve my marketing goals.",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 16,
    name: "Ethan Moore",
    role: "Student",
    comment:
      "SnapHive helped me find a great math tutor. The tutor was patient and explained concepts clearly, which improved my grades.",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 17,
    name: "Mia Lewis",
    role: "Freelancer",
    comment:
      "I found a reliable virtual assistant on SnapHive who helped me manage my workload. The assistant was efficient and professional.",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 18,
    name: "Noah Walker",
    role: "Entrepreneur",
    comment:
      "SnapHive helped me find a business consultant who provided valuable insights for my startup. The experience was excellent.",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 19,
    name: "Charlotte Hall",
    role: "Artist",
    comment:
      "I used SnapHive to find a gallery space for my art exhibition. The platform made it easy to find the perfect venue.",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 20,
    name: "Liam Young",
    role: "Writer",
    comment:
      "SnapHive connected me with an editor for my book. The editor was thorough and helped me refine my manuscript.",
    image: "https://via.placeholder.com/100",
  },
];

const Testimonial = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(1); // Start with the center testimonial
    const [direction, setDirection] = useState(""); // To track swipe direction
  
    // Automatically cycle through testimonials
    useEffect(() => {
      const interval = setInterval(() => {
        setDirection("next");
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000); // Change testimonial every 5 seconds
  
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);
  
    // Handle manual navigation
    const goToNext = () => {
      setDirection("next");
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    };
  
    const goToPrev = () => {
      setDirection("prev");
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
  
            {/* Testimonial Content with Swipe Effect */}
            <div className="flex items-center justify-center space-x-8 overflow-hidden relative h-96">
              {/* Previous Testimonial */}
              <div
                className={`w-1/3 opacity-50 transform scale-90 transition-all duration-500 ease-in-out ${
                  direction === "next"
                    ? "animate-slide-out-prev"
                    : "animate-slide-in-prev"
                }`}
              >
                <div className="bg-white p-6 rounded-lg shadow-md h-80 flex flex-col justify-center">
                  <div className="flex flex-col items-center">
                    <img
                      src={testimonials[prevIndex].image}
                      alt={testimonials[prevIndex].name}
                      className="w-16 h-16 rounded-full mb-4 object-cover"
                    />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {testimonials[prevIndex].name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {testimonials[prevIndex].role}
                    </p>
                    <p className="text-gray-600 italic text-center mt-4 text-sm">
                      "{testimonials[prevIndex].comment}"
                    </p>
                  </div>
                </div>
              </div>
  
              {/* Active Testimonial */}
              <div
                className={`w-1/3 transform scale-105 transition-all duration-500 ease-in-out ${
                  direction === "next"
                    ? "animate-slide-in-next"
                    : "animate-slide-in-prev"
                }`}
              >
                <div className="bg-white p-8 rounded-lg shadow-lg h-96 flex flex-col justify-center">
                  <div className="flex flex-col items-center">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-20 h-20 rounded-full mb-6 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {testimonials[activeIndex].name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {testimonials[activeIndex].role}
                    </p>
                    <p className="text-gray-600 italic text-center mt-6">
                      "{testimonials[activeIndex].comment}"
                    </p>
                  </div>
                </div>
              </div>
  
              {/* Next Testimonial */}
              <div
                className={`w-1/3 opacity-50 transform scale-90 transition-all duration-500 ease-in-out ${
                  direction === "next"
                    ? "animate-slide-in-next"
                    : "animate-slide-out-next"
                }`}
              >
                <div className="bg-white p-6 rounded-lg shadow-md h-80 flex flex-col justify-center">
                  <div className="flex flex-col items-center">
                    <img
                      src={testimonials[nextIndex].image}
                      alt={testimonials[nextIndex].name}
                      className="w-16 h-16 rounded-full mb-4 object-cover"
                    />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {testimonials[nextIndex].name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {testimonials[nextIndex].role}
                    </p>
                    <p className="text-gray-600 italic text-center mt-4 text-sm">
                      "{testimonials[nextIndex].comment}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeTestimonial ? "next" : "prev");
                    setActiveTestimonial(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === activeTestimonial
                      ? "bg-blue-500"
                      : "bg-gray-300 hover:bg-gray-400"
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