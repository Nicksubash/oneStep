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
        <div className="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-100 flex flex-col p-9">

            <Header />
            <main className="flex flex-1 items-center justify-center px-10 pt-8 gap-5 pb-9">
                <div className="w-1/2 mb-8 flex flex-col justify-center items-center text-center  bg-opacity-90 shadow-2xl rounded-lg p-8">
                    <h2 className="text-5xl font-extrabold mb-6">
                        {sentence.split(" ").map((word, index) => {
                            if (word === wordToAnimate) {
                                return (
                                    <span key={index} className="relative inline-block">
                                        <motion.div
                                            className="relative inline-flex justify-center items-center"
                                            animate={{ rotate: 0 }}
                                            transition={{ duration: 5, repeat: Infinity }}
                                        >
                                            <motion.span
                                                className="text-blue-900 relative z-10"
                                                key={currentWord}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                transition={{ duration: 0.95 }}
                                            >
                                                {currentWord}
                                            </motion.span>
                                        </motion.div>
                                    </span>
                                );
                            }
                            return <span key={index} className="m-2">{word}</span>;
                        })}
                    </h2>
                    <p className="mt-5 text-lg text-gray-700">
                        I specialize in building high-performance mobile apps with React Native and Kotlin.
                    </p>
                    <button
                        onClick={handleNavigate}
                        className="mt-8 bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-3 px-6 rounded-lg text-lg font-bold hover:shadow-lg hover:scale-105 transition-transform"
                    >
                        View Projects
                    </button>
                </div>
                <MobileShape />
            </main>
            <Footer />
        </div>
    );
}
