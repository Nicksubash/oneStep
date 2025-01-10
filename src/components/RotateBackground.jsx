import { motion } from "framer-motion";

export default function RotateBackground() {
    return (
        <div className="relative flex justify-center items-center h-screen">
            {/* Rotating Background */}
            <motion.div
                style={box}
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute z-0"
            />

            <motion.h1
                className="text-5xl font-extrabold text-blue-900 relative z-10"
            >
                App
            </motion.h1>
        </div>
    );
}

/**
 * ==============   Styles   ================
 */

const box = {
    width: 20, 
    height: 20,
    backgroundColor: "#ff0088",
    borderRadius: "50%", 
};
