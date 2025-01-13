import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileShape from "../components/MobileShape";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Loading from "../components/Loader";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const sentence = "Hello, I'm an App Developer!";
    const wordToAnimate = "App";

    const [currentWord, setCurrentWord] = useState(wordToAnimate);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prevWord) => (prevWord === "App" ? "Web" : "App"));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleNavigate = () => {
        setLoading(true);
        setTimeout(() => {
            navigate("/projects");
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-100 flex flex-col p-4 md:p-9">

            <Header />
            <main className="flex flex-col md:flex-row flex-1 items-center justify-center px-4 md:px-10 pt-8 gap-5 pb-9">
                
                {/* Text Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center bg-opacity-90 shadow-2xl rounded-lg p-6 md:p-8">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                        {sentence.split(" ").map((word, index) => (
                            word === wordToAnimate ? (
                                <motion.div
                                    key={index}
                                    className="inline-flex justify-center items-center"
                                    animate={{ rotate: 0 }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                >
                                    <motion.span
                                        className="text-blue-900"
                                        key={currentWord}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.95 }}
                                    >
                                        {currentWord}
                                    </motion.span>
                                </motion.div>
                            ) : (
                                <span key={index} className="m-2">{word}</span>
                            )
                        ))}
                    </h2>
                    <p className="mt-5 text-base md:text-lg text-gray-700">
                        I specialize in building high-performance mobile apps with React Native and Kotlin.
                    </p>

                    {/* Animated Button with Running Border Effect */}
                    <motion.div
                        initial={{
                            backgroundImage:
                                "linear-gradient(to right, white, white), linear-gradient(0deg, #0DB1D6 , white 40%)"
                        }}
                        animate={{
                            backgroundImage:
                                "linear-gradient(to right, white, white), linear-gradient(360deg, #0DB1D6, white 40%)"
                        }}
                        transition={{
                            type: "tween",
                            ease: "linear",
                            duration: 2,
                            repeat: Infinity
                        }}
                        style={{
                            border: "2px solid transparent",
                            borderRadius: "40px",
                            backgroundClip: "padding-box, border-box",
                            backgroundOrigin: "padding-box, border-box",
                            padding: "2px", 
                            display: "inline-block"
                        }}
                    >
                        <button
                            onClick={handleNavigate}
                            className="w-full md:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg text-lg font-bold hover:shadow-lg hover:scale-105 transition-transform"
                            style={{
                                borderRadius: "40px",
                                width: "100%",
                                height: "100%"
                            }}
                        >
                            View Projects
                        </button>
                    </motion.div>
                </div>

                {/* Shape Section */}
                <div className="w-full md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
                    <MobileShape />
                </div>
            </main>

            <Footer />
        </div>
    );
}
