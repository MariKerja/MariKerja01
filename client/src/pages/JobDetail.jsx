import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";

export default function JobDetail() {
  const { id } = useParams(); // Get jobId from URL parameters
  const navigate = useNavigate();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/job/${id}`) // Adjust the URL as needed
      .then((response) => response.json())
      .then((data) => setJob(data))
      .catch((error) => console.error("There was an error!", error));
  }, [id]); // Re-fetch job data when id changes

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-white">
      <div className="flex-1">
        {/* Sticky Navigation Bar */}
        <TopNav title={job.jobname} href="/activitye" />
        <div className="p-4">
          {" "}
          {/* Adjusted padding here */}
          <div className="mt-10">
            <div className="mb-4">
              <label className="block text-black font-medium mb-2">
                Company Name
              </label>
              <p className="bg-white rounded border border-gray-400 text-black py-2 px-4">
                {job.company}
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-black font-medium mb-2">
                Job Description
              </label>
              <p className="bg-white rounded border border-gray-400 text-black py-2 px-4 h-40 overflow-y-auto">
                {job.description}
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-black font-medium mb-2">
                Requirement
              </label>
              <p className="bg-white rounded border border-gray-400 text-black py-2 px-4 h-40 overflow-y-auto">
                {job.requirement}
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-black font-medium mb-2">
                Employment Status
              </label>
              <p className="bg-white rounded border border-gray-400 text-black py-2 px-4">
                {job.status}
              </p>
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 mr-4">
                <label className="block text-black font-medium mb-2">
                  State
                </label>
                <p className="bg-white rounded border border-gray-400 text-black py-2 px-4">
                  {job.state}
                </p>
              </div>
              <div className="w-1/2">
                <label className="block text-black font-medium mb-2">
                  District
                </label>
                <p className="bg-white rounded border border-gray-400 text-black py-2 px-4">
                  {job.district}
                </p>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-black font-medium mb-2">
                Salary Range
              </label>
              <div className="flex">
                <p className="bg-white rounded border border-gray-400 text-black py-2 px-4 mr-4">
                  RM {job.startSalary}
                </p>
                <p className="bg-white rounded border border-gray-400 text-black py-2 px-4">
                  RM {job.endSalary}
                </p>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-black font-medium mb-2">
                Address
              </label>
              <p className="bg-white rounded border border-gray-400 text-black py-2 px-4">
                {job.address}
              </p>
            </div>
            <div className="flex justify-end gap-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => navigate("/listingjob")}
              >
                Back
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => navigate("/activitye")}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
