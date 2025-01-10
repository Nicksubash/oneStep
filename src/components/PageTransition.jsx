import { motion } from 'framer-motion';

const scaleTransition = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
};

export default function PageTransition({ children }) {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={scaleTransition}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
            {children}
        </motion.div>
    );
}

// export default function PageTransition({ children }) {
//     return (
//         <motion.div
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             variants={bounceTransition}
//         >
//             {children}
//         </motion.div>
//     );
// }
