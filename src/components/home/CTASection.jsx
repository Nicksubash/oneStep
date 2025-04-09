import React from 'react';
import AnimatedButton from "../shared/AnimateButton";

const CTASection = () => {
    return (
        <section className="py-20 bg-blue-600 text-center text-white px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-6">Start Your Japan Journey Today</h2>
                <p className="text-xl mb-8">Join 10,000+ successful students and professionals</p>
                <div className="flex justify-center gap-4">
                    <AnimatedButton className="bg-white text-blue-600 px-8 py-3">
                        Free Trial
                    </AnimatedButton>
                    <AnimatedButton className="bg-yellow-400 text-blue-900 px-8 py-3">
                        View Plans
                    </AnimatedButton>
                </div>
            </div>
        </section>
    );
};

export default CTASection;