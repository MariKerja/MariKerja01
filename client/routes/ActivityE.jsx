import TopNavEmpty from "../src/components/TopNavEmpty";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

export default function ActivityE() {
  const [jobs, setJobs] = useState([]);
  const { user } = useContext(UserContext); // Use useContext to access the current user

  useEffect(() => {
    console.log("Fetching jobs for user:", user?.id); // Debug: Log the user ID being used for fetching jobs
    fetch("http://localhost:8000/jobs") // Adjust the URL as needed
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched jobs data:", data); // Debug: Log fetched jobs data
        // Filter jobs to only include those that match the current user's ID
        const userJobs = data.filter((job) => job.userId === user?.id);
        console.log("Filtered user jobs:", userJobs); // Debug: Log filtered jobs for the user
        setJobs(userJobs);
      })
      .catch((error) => console.error("There was an error!", error));
  }, [user]); // Add user to the dependency array to refetch when the user changes

  const handleDelete = async (jobId) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      console.log(`Attempting to delete job with ID: ${jobId}`); // Debug: Log the job ID being deleted
      try {
        await axios.delete(`http://localhost:8000/jobs/${jobId}`); // Adjust the URL as needed
        console.log(`Job with ID: ${jobId} deleted successfully`); // Debug: Confirm job deletion
        setJobs(jobs.filter((job) => job._id !== jobId)); // Update the local state
        toast.success("Job deleted successfully!", {
          position: "bottom-right",
        });
      } catch (error) {
        console.error("There was an error deleting the job!", error);
        toast.error("There was an error deleting the job!", {
          position: "bottom-right",
        });
      }
    }
  };

  return (
    <div className="flex h-screen w-screen bg-gray-50">
      <Toaster position="bottom-right" />
      {/* Sticky Navigation Bar */}
      <TopNavEmpty title="Activity" />
      {/* User Information */}
      <div className="flex p-8 w-full">
        <div className="space-y-4">
          {/* Search and Filter */}
          <h2 className="text-2xl font-bold">Posted Jobs</h2>
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Place
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {jobs.map((job, index) => (
                  <tr key={job._id}>
                    <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {job.jobname}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{job.state}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {job.status}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {job.company}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs leading-4 font-medium rounded-md shadow-sm text-white bg-gray-400 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        onClick={() => handleDelete(job._id)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link
            to="/activity/postjob"
            className="inline-flex justify-start items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Post a job
          </Link>
        </div>
      </div>
    </div>
  );
}
