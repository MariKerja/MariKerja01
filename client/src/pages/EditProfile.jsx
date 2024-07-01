import { useState, useEffect } from "react";
import TopNav from '../components/TopNav';
import { Sidebar } from '../components/SideBar'; 
import { Link } from 'react-router-dom';


export default function ProfileE() {
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
    <div className="flex bg-white">
      {/* Sidebar */}
      <Sidebar showSidebar={showSidebar} />


        {/* Content */}
        <div className={`flex-1 ${showSidebar ? 'pl-64' : ''}`}>
          {/* Sticky Navigation Bar */}
          <TopNav title="Edit Profile" href="/profilee" />
          {/* User Information */}
          <div className="flex-1 p-8 text-left  ">
            <div className="mb-10 mt-10">
              <div className="w-full flex flex-col mb-4">
                <label htmlFor="Name" className="w-full justify-start block text-black font-medium mb-0">
                  Name
                </label>
                <input
                  type="text"
                  className="w-1/2 block bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Muniir Ahmadi"
                />
              </div>
              <div className="w-full flex flex-col mb-4">
                <label htmlFor="Email" className="w-full justify-start block text-black font-medium mb-0">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-1/2 block bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="user@domain.com"
                />
              </div>
              <div className="w-full flex gap-2 justify-start mb-4">
                <label htmlFor="Date of birth" className="w-1/4 justify-start block text-black font-medium mb-0">
                  Date of Birth
                </label>
                <div className="flex gap-4">
                  <select
                    name="birthday_day"
                    id="day"
                    required
                    className="w-1/3 px-3 py-2 border border-gray-700 bg-white text-black rounded-md"
                  >
                    {[...Array(31).keys()].map((day) => (
                      <option key={day + 1} value={day + 1}>
                        {day + 1}
                      </option>
                    ))}
                  </select>
                  <select
                    name="birthday_month"
                    id="month"
                    required
                    className="w-1/2 px-3 py-2 border border-gray-700 bg-white text-black rounded-md"
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                      <option key={month} value={month}>
                        {new Date(0, month).toLocaleString("en", { month: "short" })}
                      </option>
                    ))}
                  </select>
                  <select
                    name="birthday_year"
                    id="year"
                    required
                    className="w-1/2 px-3 py-2 border border-gray-700 bg-white text-black rounded-md"
                  >
                    {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-full flex gap-2 justify-start mb-4">
                <label htmlFor="Gender" className="w-1/4 justify-start block text-black font-medium mb-0">
                  Gender
                </label>
                <select
                  name="gender"
                  id="gender"
                  required
                  className="w-1/7 px-3 py-2 border border-gray-700 bg-white text-black rounded-md"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="flex gap-2">
                <Link to="/profilee" className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Cancel changes</Link>
                <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Save changes</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}


