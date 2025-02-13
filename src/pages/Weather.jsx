import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import MobileShape from '../components/MobileShape';
import weatherImage from './../../public/projects/weatherApp.png';
import weatherImage2 from './../../public/projects/weatherImage2.png';
import weatherImage3 from './../../public/projects/weatherImage3.png';
import weatherVideo from './../../public/projects/weather.mp4';
import Footer from "./../components/Footer";

export default function Weather() {
  const slides = [
    { type: 'image', src: weatherImage, alt: 'Weather Screenshot 1' },
    { type: 'image', src: weatherImage2, alt: 'Weather Screenshot 2' },
    { type: 'image', src: weatherImage3, alt: 'Weather Screenshot 3' },
    { type: 'video', src: weatherVideo, alt: 'Weather Video' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const getRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * slides.length);
    return randomIndex === currentIndex ? 
      (randomIndex + 1) % slides.length : randomIndex;
  };

  const randomSlide = () => {
    setCurrentIndex(getRandomIndex());
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    let intervalId;
    if (isAutoPlay) {
      intervalId = setInterval(() => {
        randomSlide();
      }, 3000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlay]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-100 p-4 md:p-9">
      <Header />
      <h1 className="text-4xl text-cyan-600 font-bold text-center mt-8 mb-12">
        Weather App
      </h1>
      
      <div className="flex-grow">
        <div className="container mx-auto px-4 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Description Section */}
            <div className="space-y-6 p-6 rounded-lg shadow-sm h-full overflow-hidden">
              <h2 className="text-3xl text-cyan-600 font-bold mb-6">
                About the App
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  This weather application is built using Kotlin for Android, providing real-time weather updates with a dynamic and intuitive interface.
                </p>
                <h3 className="text-xl font-semibold text-cyan-700">Key Features:</h3>
                <div className="space-y-2">
                  <p>• Real-time weather data integration with accurate forecasts</p>
                  <p>• Dynamic background changes based on current weather conditions</p>
                  <p>• Detailed weather metrics including temperature, humidity, and wind speed</p>
                  <p>• Location-based automatic weather updates</p>
                  <p>• User-friendly interface with smooth animations</p>
                </div>
                <h3 className="text-xl font-semibold text-cyan-700">Technical Highlights:</h3>
                <div className="space-y-2">
                  <p>• Built with modern Kotlin technologies</p>
                  <p>• Implements MVVM architecture for clean code organization</p>
                  <p>• Uses Retrofit for API integration</p>
                  <p>• Features efficient data caching</p>
                </div>
              </div>
            </div>

            {/* Mobile Shape Section */}
            <div className="flex flex-col items-center">
              <MobileShape>
                <div className="relative w-full h-full">
                  <div className="absolute inset-0">
                    {slides[currentIndex].type === 'video' ? (
                      <video 
                        autoPlay 
                        muted 
                        controls 
                        className="w-full h-full object-cover"
                      >
                        <source src={slides[currentIndex].src} type="video/mp4"/>
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={slides[currentIndex].src}
                        alt={slides[currentIndex].alt}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75"
                  >
                    &#8249;
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75"
                  >
                    &#8250;
                  </button>
                </div>
              </MobileShape>

              <div className="mt-4 space-x-4">
                <button
                  onClick={randomSlide}
                  className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700"
                >
                  Random
                </button>
                <button
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className={`px-4 py-2 rounded-md ${
                    isAutoPlay 
                      ? 'bg-red-600 hover:bg-red-700' 
                      : 'bg-green-600 hover:bg-green-700'
                  } text-white`}
                >
                  {isAutoPlay ? 'Stop Auto' : 'Auto Play'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}