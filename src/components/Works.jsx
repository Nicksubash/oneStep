import React from 'react';
import { Link } from 'react-router-dom';
import ReactIcon from "../components/ReactIcon"

function Works() {
  const apps = [
    { icon: 'web2.gif', appName: 'Web Development', navigateTo: '/projects', type: 'Project' },
    { icon: 'react.gif', appName: 'React Native App', navigateTo: '/projects/react-native', type: 'Project' },
    { icon: 'Android.gif', appName: 'Android App', navigateTo: '/projects/react-native', type: 'Project' },
  ];

  return (
    <div className="flex flex-col w-full">
      <div className='flex flex-col min-h-screen w-full'>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-cyan-600 mb-6">My Works</h1>
        <p className="text-lg text-cyan-700 mb-8">A collection of projects I've worked on web design.</p>
      </div>

      <div className="text-center">
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={app.icon} 
                alt={app.appName} 
                className="w-24 h-24 object-contain mx-auto"
              />
              <h3 className="mt-4 text-xl font-bold text-cyan-600">{app.appName}</h3>
              <p className="mt-2 text-cyan-700">{app.type}</p>
              <Link to={app.navigateTo} className="text-indigo-500 hover:text-indigo-700 mt-2 inline-block">View Project</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="text-center mt-10">
        <h1 className="text-5xl font-bold text-cyan-600 mb-6">Technologies & Tools</h1>
        <div className="mt-4 flex justify-center gap-8 flex-wrap">
          <img src="js.png" alt="Firebase Logo" className="w-16 h-16" />
          <img src="css.png" alt="Firebase Logo" className="w-16 h-16" />
          <img src="kotlin.svg" alt="Kotlin Logo" className="w-16 h-16" />
          <img src="react.svg" alt="React Logo" className="w-16 h-16" />
          <img src="firebase.svg" alt="Firebase Logo" className="w-16 h-16" />
        </div>
      </div>
      </div>
      
      
    </div>
  );
}

export default Works;



