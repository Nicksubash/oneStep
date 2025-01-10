import React from "react";

const ProjectIcon=({icon,appName, onClick})=>{
    return (
        <div className="flex flex-col items-center p-4 cursor-pointer" onClick={onClick}>
                        <img src={icon} alt={appName} className="w-16 h-16" />
                        <span className="mt-2 text-sm text-center">{appName}</span>
        </div>
    )
}

export default ProjectIcon;
