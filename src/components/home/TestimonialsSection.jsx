import React from 'react';
import TestimonialCard from "./TestimonialCard"; // Import TestimonialCard

const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: `"The mock tests helped me pass JLPT N2 on my first attempt. The detailed answer explanations were invaluable!"`,
            userName: "Aarav Sharma",
            userTitle: "Tokyo University Student",
            userImage: "/user1.jpg",
        },
        {
            quote: `"Thanks to the business Japanese course, I secured a job at a major Japanese IT company!"`,
            userName: "Priya Patel",
            userTitle: "Software Engineer, Osaka",
            userImage: "/user2.jpg",
        },
    ];

    return (
        <section className="py-16 px-4 md:px-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;