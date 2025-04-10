// components/shared/IconInput.jsx
import React from 'react';

const IconInput = ({ icon: Icon, type = 'text', ...props }) => (
  <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg">
    <Icon className="text-gray-500 flex-shrink-0" />
    <input
      {...props}
      type={type}
      className="bg-transparent w-full focus:outline-none placeholder-gray-500"
    />
  </div>
);

export default IconInput;