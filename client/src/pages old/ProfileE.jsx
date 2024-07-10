import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopNavEmpty from "../components/TopNavEmpty";
import { Sidebar } from "../components/SideBar";

export default function ProfileE() {
  const [showSidebar, setShowSidebar] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      // Check screen width and toggle showSidebar accordingly
      if (window.innerWidth <= 718) {
        // Adjust the breakpoint as needed
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
      <div className={`flex-1 ${showSidebar ? "pl-64" : ""}`}>
        {/* Sticky Navigation Bar */}
        <TopNavEmpty title="Profile" />
        {/* User Information */}
        <div className="flex-1 p-8 text-left  ">
          <div className="mb-10 mt-10">
            <div className="w-full flex flex-col mb-4">
              <h2 className="text-2xl font-bold text-left mb-4">
                Personal Information
              </h2>
              <label
                htmlFor="Name"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Name
              </label>
              <a className="w-1/2 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                Muniir Ahmadi
              </a>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="Email"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Email Address
              </label>
              <a className="w-1/2 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                email@domain.com
              </a>
            </div>
            <div className="w-full flex gap-2 justify-start mb-4">
              <label
                htmlFor="Date of birth"
                className="w-1/4 justify-start block text-black font-medium mb-0"
              >
                Date of Birth
              </label>
              <a className="w-20 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                25
              </a>
              <a className="w-20 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                May
              </a>
              <a className="w-20 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                2024
              </a>
            </div>
            <div className="w-full flex gap-2 justify-start mb-4">
              <label
                htmlFor="Gender"
                className="w-1/4 justify-start block text-black font-medium mb-0"
              >
                Gender
              </label>
              <a className="w-20 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                Male
              </a>
            </div>
            <Link to="/editprofile">
              <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
                Edit Profile
              </button>
            </Link>
          </div>

          {/* Company Information */}
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-left mb-4">
              Company Information
            </h2>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="CompanyName"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Company Name
              </label>
              <a className="w-2/3 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                Madisson Sdn Bhd
              </a>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="ContactNumber"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Contact Number
              </label>
              <a className="w-2/3 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                01234567890
              </a>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="website"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Company Website
              </label>
              <a className="w-2/3 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                https://istudent2.usim.edu.my
              </a>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="Address"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Address
              </label>
              <a className="w-2/3 h-40 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                1234 Elm Street Apt. 56B Springfield, IL 62704 United States
              </a>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="website"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                About Company
              </label>
              <a className="w-2/3 h-40 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                Employment status typically refers to whether a position is
                full-time or part-time. Full-time employees generally work
                between 35-40 hours per week and often receive benefits like
                health insurance, retirement plans, and paid time off.
              </a>
            </div>
            <Link to="profile/edit">
              <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
                Edit Information
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
