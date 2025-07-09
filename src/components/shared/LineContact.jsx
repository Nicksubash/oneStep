import React from 'react';

const LineContact = () => {
    // You can change the position by modifying the className prop below
    // Here are some common position combinations you can use:
    
    // For bottom-right corner:
    // className="fixed bottom-4 right-4 z-50 bg-green-500 p-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-300"
    
    // For bottom-left corner:
    // className="fixed bottom-4 left-4 z-50 bg-green-500 p-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-300"
    
    // For top-right corner:
    // className="fixed top-4 right-4 z-50 bg-green-500 p-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-300"
    
    // For top-left corner:
    // className="fixed top-4 left-4 z-50 bg-green-500 p-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-300"
    
    // Current position (middle-left):
    return (
        <a
            href="https://qr-official.line.me/gs/M_038ounou_GW.png?oat_content=qr" 
            target="_blank"
            rel="noopener noreferrer"
            className="fixed left-0 top-1/2  z-50 bg-green-500 p-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-300"
        >
            <i className="fab fa-line text-white text-3xl"></i>
        </a>
    );
};

export default LineContact; 