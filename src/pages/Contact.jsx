import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-100 flex flex-col p-9">
            {/* Header */}
            <Header />

            {/* Content */}
            <div className="flex justify-center items-center p-6 h-screen">
                <div className="relative max-w-4xl w-full flex items-center justify-center">
                    <div className="w-full h-[650px] bg-white bg-opacity-90 shadow-2xl rounded-3xl p-8 relative overflow-hidden">
                        {/* Mobile Screen */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-white rounded-3xl overflow-hidden">
                            <div className="w-full h-full p-8">
                                <div className="absolute -top-10 -left-10 h-32 w-32 bg-cyan-400 bg-opacity-70 blur-3xl rounded-full"></div>
                                <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-blue-400 bg-opacity-70 blur-3xl rounded-full"></div>

                                <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-cyan-400 mb-6">
                                    Let's Connect!
                                </h1>
                                <p className="text-center text-gray-700 font-medium mb-8">
                                    Have a question or want to collaborate? Drop me a message, and I'll get back to you soon!
                                </p>

                                <form className="space-y-6">
                                    <div className="relative group">
                                        <input 
                                            type="text" 
                                            placeholder=" " 
                                            className="peer w-full border-2 border-gray-300 bg-transparent text-black px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                        <label className="absolute left-4 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-600">
                                            Your Name
                                        </label>
                                    </div>
                                    <div className="relative group">
                                        <input 
                                            type="email" 
                                            placeholder=" " 
                                            className="peer w-full border-2 border-gray-300 bg-transparent text-black px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                        <label className="absolute left-4 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-600">
                                            Your Email
                                        </label>
                                    </div>
                                    <div className="relative group">
                                        <textarea 
                                            rows="5" 
                                            placeholder=" " 
                                            className="peer w-full border-2 border-gray-300 bg-transparent text-black px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        ></textarea>
                                        <label className="absolute left-4 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-600">
                                            Your Message
                                        </label>
                                    </div>
                                    <button 
                                        type="submit" 
                                        // className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-3 px-4 rounded-lg text-lg font-bold hover:shadow-lg hover:scale-105 transition-transform"
                                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-lg text-lg font-bold hover:shadow-lg hover:scale-105 transition-transform backdrop-blur-lg bg-opacity-30">
                                        Send Message
                                    </button>
                                </form>

                                <div className="mt-8 text-center">
                                    <p className="text-gray-700 font-medium">
                                        Or email me directly at 
                                        <a href="mailto:nicksubash9@gmail.com" className="text-cyan-700 hover:underline ml-1">
                                            nicksubash9@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-gray-300 rounded-3xl pointer-events-none"></div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
