import { useState, useEffect } from "react";
import TopNav from '../components/TopNav';
import { Sidebar } from '../components/SideBar'; 

export default function Hiring2() {
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
    <TopNav title="Activity" />
    {/* User Information */}
    <div className="flex-1 p-8 text-left  ">
        {/* Resume Information */}
        <div className="mb-10 mt-10">
        <h2 className="text-2xl font-bold text-left mb-4">FirstName LastName</h2>
        <div className="w-full flex flex-col mb-4">
            <label htmlFor="FullName" className="w-full justify-start block text-black font-medium mb-0">
            Full Name
            </label>
            <a className="w-2/3 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
            FullName
            </a>
        </div>
        <div className="w-full flex flex-col mb-4">
            <label htmlFor="ContactNumber" className="w-full justify-start block text-black font-medium mb-0">
            Contact Number
            </label>
            <a className="w-2/3 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
            ContactNum
            </a>
        </div>
        <div className="w-full flex flex-col mb-4">
            <label htmlFor="Address" className="w-full justify-start block text-black font-medium mb-0">
            Address
            </label>
            <a className="w-2/3 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                AddressName
            </a>
        </div>
        <div className="w-full flex flex-col mb-4">
            <label htmlFor="AboutMe" className="w-full justify-start block text-black font-medium mb-0">
            About Me
            </label>
            <a className="w-2/3 h-40 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                AboutMe
            </a>
        </div>
        <div className="w-full flex flex-col mb-4">
            <label htmlFor="Education" className="w-full justify-start block text-black font-medium mb-0">
            Education
            </label>
            <a className="w-2/3 h-40 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                Education
            </a>
        </div>
        <div className="w-full flex flex-col mb-4">
            <label htmlFor="website" className="w-full justify-start block text-black font-medium mb-0">
            Personal Skill
            </label>
            <a className="w-2/3 h-40 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                PersonalSkill
            </a>
        </div>
        <div className="flex gap-2 ">
            <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Hire</button>
            <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Reject</button>
        </div>        
        </div>
    </div>
    </div>
</div>
);
}
