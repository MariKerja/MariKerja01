import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import TopNav from '../components/TopNav';
import { Sidebar } from '../components/SideBar'; 

export default function EditCompanyInfo() {
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
    <TopNav title="Edit Company Information" />
    {/* User Information */}
    <div className="flex-1 p-8 text-left  ">

        {/* Company Information */}
        <div className="mb-10 mt-10">
        <h2 className="text-2xl font-bold text-left mb-4">Company Information</h2>
        <div className="w-full flex flex-col mb-4">
            <label htmlFor="CompanyName" className="w-full justify-start block text-black font-medium mb-0">
            Company Name
            </label>
            <input
            type="text"
            className="w-2/3 block bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Madisson Sdn Bhd"
        />
        </div>
        <div className="w-full flex flex-col mb-4">
            <label htmlFor="ContactNumber" className="w-full justify-start block text-black font-medium mb-0">
            Contact Number
            </label>
            <input
            type="text"
            className="w-2/3 block bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="01234567890"
        />
        </div>
        <div className="w-full flex flex-col mb-4">
        <label htmlFor="website" className="w-full justify-start block text-black font-medium mb-0">
            Company Website
        </label>
        <input
            type="text"
            className="w-2/3 block bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="https://istudent2.usim.edu.my"
        />
        </div>
        <div className="w-full flex flex-col mb-4">
        <label htmlFor="Address" className="w-full justify-start block text-black font-medium mb-0">
            Address
        </label>
        <input
            type="text"
            className="w-2/3 h-40 block bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="1234 Elm Street Apt. 56B Springfield, IL 62704 United States"
        />
        </div>
        <div className="w-full flex flex-col mb-4">
            <label htmlFor="website" className="w-full justify-start block text-black font-medium mb-0">
            About Company
            </label>
            <input
            type="text"
            className="w-2/3 h-40 block bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Employment status typically refers to whether a position is full-time or part-time. Full-time employees generally work between 35-40 hours per week and often receive benefits like health insurance, retirement plans, and paid time off."
        />
        </div>
        <div className="flex gap-2 ">
        <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Cancel changes</button>
        <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Save changes</button>
    </div>
        </div>
    </div>
    </div>
</div>
);
}
