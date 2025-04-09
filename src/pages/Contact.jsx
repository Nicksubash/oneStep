import React from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-100 flex flex-col p-4 md:p-9">
            <Header />

            <div className="flex-1 flex justify-center items-center py-8 px-4 md:px-6">
                <div className="relative max-w-4xl w-full">
                    <div className="w-full bg-white bg-opacity-90 shadow-2xl rounded-3xl p-4 md:p-8 relative overflow-hidden">
                        {/* Decorative Elements */}
                        <div className="absolute -top-20 -left-20 h-40 w-40 bg-cyan-400 bg-opacity-50 blur-3xl rounded-full"></div>
                        <div className="absolute -bottom-20 -right-20 h-40 w-40 bg-blue-400 bg-opacity-50 blur-3xl rounded-full"></div>
                        
                        {/* Content Container */}
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-cyan-400 mb-4 md:mb-6">
                                Let's Connect!
                            </h1>
                            <p className="text-center text-gray-700 font-medium mb-6 md:mb-8 px-4">
                                Have a question or want to collaborate? Drop me a message, and I'll get back to you soon!
                            </p>

                            <form className="space-y-6 px-4">
                                <div className="relative group">
                                    <input 
                                        type="text" 
                                        placeholder=" " 
                                        className="peer w-full border-2 border-gray-300 bg-transparent text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                                    />
                                    <label className="absolute left-4 -top-3.5 bg-white px-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-cyan-600 peer-focus:bg-white">
                                        Your Name
                                    </label>
                                </div>

                                <div className="relative group">
                                    <input 
                                        type="email" 
                                        placeholder=" " 
                                        className="peer w-full border-2 border-gray-300 bg-transparent text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                                    />
                                    <label className="absolute left-4 -top-3.5 bg-white px-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-cyan-600 peer-focus:bg-white">
                                        Your Email
                                    </label>
                                </div>

                                <div className="relative group">
                                    <textarea 
                                        rows="4"
                                        placeholder=" " 
                                        className="peer w-full border-2 border-gray-300 bg-transparent text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none md:resize-vertical"
                                    ></textarea>
                                    <label className="absolute left-4 -top-3.5 bg-white px-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-cyan-600 peer-focus:bg-white">
                                        Your Message
                                    </label>
                                </div>

                                <button 
                                    type="submit" 
                                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-lg text-lg font-bold hover:shadow-lg hover:scale-102 transition-all duration-300 backdrop-blur-lg bg-opacity-90">
                                    Send Message
                                </button>
                            </form>

                            <div className="mt-8 text-center px-4">
                                <p className="text-gray-700 font-medium">
                                    Or email me directly at{' '}
                                    <a 
                                        href="mailto:nicksubash9@gmail.com" 
                                        className="text-cyan-700 hover:text-cyan-600 hover:underline transition-colors inline-block"
                                    >
                                        nicksubash9@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Decorative Border */}
                    <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-gray-300 rounded-3xl pointer-events-none"></div>
                </div>
            </div>

            <Footer />
        </div>
    );
}