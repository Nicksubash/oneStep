import React from 'react'
export default function AppIcon({icon, appName}){
    return (
        <div className='flex flex-col items-center justify-center bg-white rounded-xl shadow-xl w-20 h-20 mx-4 my-2'>
            <img src={icon} alt={appName} className="w-12 h-12"/>
            <p className='text-xs text-gray-800 mt-2'>{appName}</p>
        </div>
    )
}