import { useState, useEffect } from "react";
import TopNavEmpty from "../components/TopNavEmpty";
import { Link } from "react-router-dom";

export default function HomeE() {
  const [jobs, setJobs] = useState([]); // State to hold fetched jobs

  // Fetch jobs from backend
  useEffect(() => {
    fetch("http://localhost:8000/jobs") // Adjust the URL as needed
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("There was an error!", error));
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div className="flex h-screen bg-white">
      <div>
        <TopNavEmpty title="Home" />
        <div className="flex-1 p-8">
          <div className="mt-10">
            <h2 className="flex text-2xl font-bold text-left mb-4">
              List of all jobs
            </h2>
            {/* Display Jobs Here */}
            <table className="table-auto text-left w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">No</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Place</th>
                  <th className="px-4 py-2">Type</th>
                  <th className="px-4 py-2">Company</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">
                      <Link to={`/job/${job._id}`}>{job.jobname}</Link>
                    </td>
                    <td className="border px-4 py-2">{job.state}</td>
                    <td className="border px-4 py-2">{job.status}</td>
                    <td className="border px-4 py-2">{job.company}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
