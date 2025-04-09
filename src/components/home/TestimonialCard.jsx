import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm">
            <p className="text-lg mb-4">{testimonial.quote}</p>
            <div className="flex items-center">
                <img
                    src={testimonial.userImage}
                    alt="User"
                    className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                    <h4 className="font-semibold">{testimonial.userName}</h4>
                    <p className="text-gray-600">{testimonial.userTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;