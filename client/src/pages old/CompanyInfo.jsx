import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import TopNav from '../components/TopNav';
import { Sidebar } from '../components/SideBar'; 

export default function CaompanyInfo() {
const [showSidebar, setShowSidebar] = useState(true);
useEffect(() => {
const handleResize = () => {
    // Check screen width and toggle showSidebar accordingly
    if (window.innerWidth <= 718) { // Adjust the breakpoint as needed
    setShowSidebar(false);
    } else {
    setShowSidebar(true);
    }
};

// Add event listener for window resize
window.addEventListener("resize", handleResize);

// Cleanup function
return () => window.removeEventListener("resize", handleResize);
}, []); // Empty dependency array to run only once on component mount


return (
<div className="flex h-screen bg-white">
    {/* Sidebar */}
    <Sidebar showSidebar={showSidebar} />

    {/* Content */}
    <div className={`flex-1 ${showSidebar ? 'pl-64' : ''}`}>
    {/* Sticky Navigation Bar */}
    <TopNav title="Company Information" />
    {/* User Information */}
    <div className="flex-1 p-8 text-left  ">
    


        {/* Company Information */}
        <div className="mb-10 mt-10">
        <h2 className="text-2xl font-bold text-left mb-4">Madisson Sdn Bhd</h2>

        <div className="w-full flex flex-col mb-4">
            <label htmlFor="ContactNumber" className="w-full justify-start block text-black font-medium mb-0">
            Contact Number
            </label>
            <a className="w-2/3 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
            01234567890
            </a>
        </div>
        <div className="w-full flex flex-col mb-4">
            <label htmlFor="website" className="w-full justify-start block text-black font-medium mb-0">
            Company Website
            </label>
            <a className="w-2/3 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
            https://istudent2.usim.edu.my
            </a>
        </div>
        <div className="w-full flex flex-col mb-4">
            <label htmlFor="Address" className="w-full justify-start block text-black font-medium mb-0">
            Address
            </label>
            <a className="w-2/3 h-40 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
            1234 Elm Street
            Apt. 56B 
            Springfield, IL 62704 
            United States
            </a>
        </div>
        <div className="w-full flex flex-col mb-4">
            <label htmlFor="website" className="w-full justify-start block text-black font-medium mb-0">
            About Company
            </label>
            <a className="w-2/3 h-40 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
            Employment status typically refers to whether a position is full-time or part-time. Full-time employees generally work between 35-40 hours per week and often receive benefits like health insurance, retirement plans, and paid time off.
            </a>
        </div>
                <div className="flex gap-2 ">
        <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Cancel changes</button>
        <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Save changes</button>
    </div>
        <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Edit Information</button>
        </div>
    </div>
    </div>
</div>
);
}
