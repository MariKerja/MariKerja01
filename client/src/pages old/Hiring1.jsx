import { useState, useEffect } from "react";
import TopNav from "../components/TopNav";
import { Sidebar } from '../components/SideBar'; 

export default function Hiring1() {
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
        <div className="flex-1 p-8">
          <div className=" mt-10">
            {/* Search and Filter */}
            <h2 className="flex text-2xl font-bold text-left mb-4">
              Job 1
            </h2>
            {/* Table */}
            <table className="table-auto text-left w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">No</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Place</th>
                  <th className="px-4 py-2">Contact Number</th>
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">adma</td>
                  <td className="border px-4 py-2">Nilai, Negeri Sembilan</td>
                  <td className="border px-4 py-2">012345678</td>
                  <td className="border px-4 py-2"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 rounded"
                        onClick={() => { /* your action here */ }}>Hire
                    </button></td>
                  <td className="border px-4 py-2"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 rounded"
                        onClick={() => { /* your action here */ }}>Reject
                    </button></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">2</td>
                  <td className="border px-4 py-2">Ahmadi</td>
                  <td className="border px-4 py-2">Nilai, Negeri Sembilan</td>
                  <td className="border px-4 py-2">012345677</td>
                  <td className="border px-4 py-2"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 rounded"
                        onClick={() => { /* your action here */ }}>Hire
                    </button></td>
                  <td className="border px-4 py-2"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 rounded"
                        onClick={() => { /* your action here */ }}>Reject
                    </button></td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
