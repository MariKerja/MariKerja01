import TopNavEmpty from "../TopNavEmpty";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

export default function ActivityE() {
  const [jobs, setJobs] = useState([]);
  const { user } = useContext(UserContext); // Use useContext to access the current user

  useEffect(() => {
    fetch("http://localhost:8000/jobs") // Adjust the URL as needed
      .then((response) => response.json())
      .then((data) => {
        // Filter jobs to only include those that match the current user's ID
        const userJobs = data.filter((job) => job.userId === user?.id);
        setJobs(userJobs);
      })
      .catch((error) => console.error("There was an error!", error));
  }, [user]); // Add user to the dependency array to refetch when the user changes

  return (
    <div className="flex h-screen w-screen bg-gray-50">
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
                    Applicant(s)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {jobs.map((job, index) => {
                  console.log(job.id); // Assuming each job has an 'id' property
                  return (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {job.jobname}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {job.state}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {job.status}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {job.company}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs leading-4 font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          X
                        </button>
                      </td>
                    </tr>
                  );
                })}
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
