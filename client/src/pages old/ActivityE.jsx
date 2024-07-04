import { useState, useEffect } from "react";
import TopNavEmpty from '../components/TopNavEmpty';
import { Sidebar } from '../components/SideBar'; 

export default function ActivityE() {
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
    //mmm
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
        <TopNavEmpty title="Activity" />
        {/* User Information */}
        <div className="flex-1 p-8">
          <div className=" mt-10">
            {/* Search and Filter */}
            <h2 className="flex text-2xl font-bold text-left mb-4">
              Posted Job
            </h2>
            {/* Table */}
            <table className="table-auto text-left w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">No</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Place</th>
                  <th className="px-4 py-2">Type</th>
                  <th className="px-4 py-2">Applicant(s)</th>
                  <th className="px-4 py-2"> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">Job 1</td>
                  <td className="border px-4 py-2">Nilai, Negeri Sembilan</td>
                  <td className="border px-4 py-2">Part time </td>
                  <td className="border px-4 py-2">2</td>
                  <td className="border px-4 py-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 rounded"
                        onClick={() => { /* your action here */ }}>X
                    </button>
                    </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">2</td>
                  <td className="border px-4 py-2">Job 2</td>
                  <td className="border px-4 py-2">Nilai, Negeri Sembilan</td>
                  <td className="border px-4 py-2">Full time </td>
                  <td className="border px-4 py-2">3</td>
                  <td className="border px-4 py-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 rounded "
                        onClick={() => { /* your action here */ }}>X
                    </button>
                    </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
            <button className="flex justify-start mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => window.location.href='/postjob'}>
              Post a job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
