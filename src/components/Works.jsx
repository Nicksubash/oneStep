import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedButton from "../components/shared/AnimateButton";
function Works() {
  const apps = [
    { icon: 'web2.gif', appName: 'Web Development', navigateTo: '/WebProjects', type: 'Websites' },
    { icon: 'react.gif', appName: 'React Native App', navigateTo: '/projects/react-native', type: 'Cross platform' },
    { icon: 'Android.gif', appName: 'Android App', navigateTo: '/projects/react-native', type: 'Android' },
  ];

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col min-h-screen w-full">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-cyan-600 mb-6 font-outfit">My Works</h1>
          <p className="text-lg text-cyan-700 mb-8 font-outfit">
            A collection of projects I've worked on web design.
          </p>
        </div>

        <div className="text-center">
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow font-outfit"
              >
                <img
                  src={app.icon}
                  alt={app.appName}
                  className="w-24 h-24 object-contain mx-auto"
                />
                <h3 className="mt-4 text-xl font-bold text-cyan-600">{app.appName}</h3>
                <p className="mt-2 text-cyan-700 my-2">{app.type}</p>
                <AnimatedButton to={app.navigateTo}>
                  View Project
                </AnimatedButton>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
