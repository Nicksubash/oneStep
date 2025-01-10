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
    const[loading, setLoading] = useState(false)
    const navigate=useNavigate();

    // Automatically toggle the word every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord(prevWord => (prevWord === "App" ? "Web" : "App"));
        }, 5000);

        return () => clearInterval(interval); 
    }, []);

    const handleNavigate= ()=>{
        setLoading(true);
        setTimeout(()=>{
            navigate("/projects");
        },1000);
    }

    

    return (
        <div>
            <Header />
            <main className="flex items-center justify-center h-screen px-10">
                <div className="w-1/2 flex flex-col justify-center">
                    <h2 className="text-5xl font-extrabold">
                        {/* Split sentence into words and animate "Mobile" */}
                        {sentence.split(" ").map((word, index) => {
                            if (word === wordToAnimate) {
                                return (
                                    <span key={index} className="relative inline-block">
                                        {/* Container for rotating background and text */}
                                        <motion.div
                                            className="relative inline-flex justify-center items-center"
                                            animate={{ rotate: 0 }}
                                            transition={{ duration: 5, repeat: Infinity }} 
                                        >
                                            <motion.span
                                                className="text-blue-900 relative z-10"
                                                key={currentWord} // Key to trigger re-render on word change
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} 
                                                exit={{ opacity: 0, scale: 0.8, filter: "blur(5px)" }} 
                                                transition={{ duration: 0.95 }}
                                            >
                                                {currentWord} {/* Display current word */}
                                            </motion.span>
                                        </motion.div>
                                    </span>
                                );
                            }
                            return <span key={index} className={word === "Developer!" ? "m-2" : "m-2"}>{word} </span>;
                        })}
                    </h2>
                    <p className="mt-5 text-lg text-gray-700">
                        I specialize in building high-performance mobile apps with React Native and Kotlin.
                    </p>
                </div>
                <MobileShape />
            </main>
            <Footer/>
        </div>
    );
}
