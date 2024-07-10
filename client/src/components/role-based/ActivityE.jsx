import TopNavEmpty from "../TopNavEmpty";
import { useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import axios from "axios";
export default function ActivityE() {
  const [jobs, setJobs] = useState([]);
  const [refresh, setRefresh] = useState(false); // Add a state variable to trigger a re-fetch
  const { user } = useContext(UserContext); // Use useContext to access the current user

  useEffect(() => {
    axios
      .get("/jobs") // Adjust the URL as needed
      .then((response) => {
        console.log("Server response:", response); // Log the response from the server
        // Filter jobs to only include those that match the current user's ID
        const userJobs = response.data.filter((job) => job.userId === user?.id);
        setJobs(userJobs);
      })
      .catch((error) => console.error("There was an error!", error));
  }, [user, refresh]); // Add user to the dependency array to refetch when the user changes

  const handleDelete = async (jobId) => {
    // Confirmation dialog
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this job?"
    );
    if (!isConfirmed) {
      return; // Stop if the user cancels the operation
    }
    try {
      const response = await axios.delete(`jobs/${jobId}`);
      console.log("Job deleted successfully", response.data);
      toast.success("Job deleted successfully");
      setRefresh(!refresh); // Trigger a re-fetch of the jobs
      // Add any post-delete actions here, e.g., redirecting or updating the UI
    } catch (error) {
      console.error("Error deleting job", error);
      // Handle error, e.g., show an error message to the user
    }
  };
  return (
    <div className="flex h-screen w-screen bg-gray-50">
      {/* Sticky Navigation Bar */}
      <TopNavEmpty title="Activity" />
      {/* User Information */}
      <div className="flex p-8 w-full" style={{ paddingTop: "4rem" }}>
        {" "}
        {/* Adjust the paddingTop value based on the actual height of your top navigation bar */}
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
                  console.log(job._id); // Assuming each job has an 'id' property
                  return (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="border px-4 py-2">
                        <Link to={`/jobs/${job._id}/applications`}>
                          {job.jobname}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {job.state}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {job.status}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {job.applicants?.length || 0}{" "}
                        {/* Display the number of applicants */}{" "}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleDelete(job._id)}
                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs leading-4 font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
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
