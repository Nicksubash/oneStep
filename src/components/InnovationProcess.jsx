import React from 'react';

const InnovationProcess = () => {
  const steps = [
    {
      title: 'STEP 1',
      description: 'Understand the problem',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 5.982l1.31 1.312a10 10 0 003.454 2.651M19 11.75v-.75a2 2 0 00-2-2h-2m-2-1.5v2m-4.5-2h2m-2-1.5v2m-2.5-2h2" />
        </svg>
      ),
    },
    {
      title: 'STEP 2',
      description: 'Ideate',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75-3.75h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
        </svg>
      ),
    },
    {
      title: 'STEP 3',
      description: 'Prototype',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m-3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 10-3 0M3.75 18H7.5m0-10.5a1.5 1.5 0 013 0m-3 0a1.5 1.5 0 103 0" />
        </svg>
      ),
    },
    {
      title: 'STEP 4',
      description: 'Evaluate and refine',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center font-sans p-6">
      <div className="relative w-full max-w-2xl">
        {/* Connecting Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gray-200"></div>

        {/* Steps */}
        <div className="space-y-12 flex flex-row">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center w-full">
              {/* Step Content */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-cyan-500">{step.title}</h3>
                <p className="text-sm text-cyan-600">{step.description}</p>
              </div>

              {/* Icon Circle */}
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mt-auto">
                {step.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InnovationProcess;
