import { useState, useEffect } from "react";
import TopNavEmpty from '../components/TopNavEmpty';
import { Sidebar } from '../components/SideBar'; 

export default function ActivityE() {
  const [showSidebar, setShowSidebar] = useState(true);
    const [jobs, setJobs] = useState([]);
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
  useEffect(() => {
    fetch('http://localhost:8000/jobs') // Adjust the URL as needed
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.error("There was an error!", error));
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
              {jobs.map((job, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{job.jobname}</td>
                    <td className="border px-4 py-2">{job.state}</td>
                    <td className="border px-4 py-2">{job.status}</td> {/* Assuming you have a 'type' field */}
                    <td className="border px-4 py-2">{job.company}</td> {/* Assuming you have a 'company' field */}
                  </tr>
                ))}
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
