import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import TopNav from "../components/TopNav";
import { UserContext } from "../../context/UserContext";
import toast from "react-hot-toast";

export default function Hiring1() {
  const { jobId } = useParams(); // Get jobId from URL parameters
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [applicantProfiles, setApplicantProfiles] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        console.log("fetching job details for job ID:", jobId);
        const response = await axios.get(`http://localhost:8000/jobs/${jobId}`); // Adjust the URL as needed
        setJob(response.data);
      } catch (error) {
        console.error("There was an error!", error);
      }
    };

    fetchJobDetails();
  }, [jobId]); // Re-fetch job data when id changes

  useEffect(() => {
    const fetchApplicantProfiles = async () => {
      if (job && job.applicants) {
        const profiles = await Promise.all(
          job.applicants.map(async (applicant) => {
            try {
              const response = await axios.get(
                `http://localhost:8000/users/${applicant.applicantId}`
              );
              return {
                applicantId: applicant.applicantId,
                profile: response.data,
              };
            } catch (error) {
              console.error(
                `Error fetching profile for applicant ${applicant.applicantId}`,
                error
              );
              return { applicantId: applicant.applicantId, profile: null };
            }
          })
        );

        const profilesMap = profiles.reduce((acc, profile) => {
          acc[profile.applicantId] = profile.profile;
          return acc;
        }, {});

        setApplicantProfiles(profilesMap);
      }
    };

    fetchApplicantProfiles();
  }, [job]);

  const handleApplicantStatus = (applicantName, applicantId, status) => {
    axios
      .patch(`http://localhost:8000/jobs/${jobId}/applicants/${applicantId}`, {
        status,
      })
      .then((response) => {
        setJob(response.data);
        toast.success(`${applicantName} ${status}!`);
      })
      .catch((error) => console.error("There was an error!", error));
  };
  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-white">
      {/* Content */}
      <div>
        {/* Sticky Navigation Bar */}
        <TopNav title="Activity" />
        <div className="flex-1 p-8">
          <div className="mt-10">
            {/* Search and Filter */}
            <h2 className="flex text-2xl font-bold text-left mb-4">
              {job.jobname}
            </h2>
            {/* Table */}
            <table className="table-auto text-left w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">No</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Contact Number</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {job.applicants.map((applicant, index) => {
                  const userProfile = applicantProfiles[applicant.applicantId];

                  if (!userProfile) {
                    return (
                      <tr key={applicant.applicantId}>
                        <td>Loading...</td>
                      </tr>
                    );
                  }

                  return (
                    <tr key={applicant.applicantId}>
                      <td className="border px-4 py-2">{index + 1}</td>
                      <td className="border px-4 py-2">
                        <Link
                          to={`/jobs/${jobId}/applications/${applicant.applicantId}`}
                        >
                          {userProfile?.firstname} {userProfile?.lastname}
                        </Link>
                      </td>
                      <td className="border px-4 py-2">
                        {userProfile?.profile?.resume?.contactNumber}
                      </td>
                      <td className="border px-4 py-2">{applicant.status}</td>
                      <td className="border px-4 py-2">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 rounded"
                          onClick={() =>
                            handleApplicantStatus(
                              userProfile.firstname,
                              applicant.applicantId,
                              "hired"
                            )
                          }
                        >
                          Hire
                        </button>
                      </td>
                      <td className="border px-4 py-2">
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-0.5 px-2 rounded"
                          onClick={() =>
                            handleApplicantStatus(
                              userProfile.firstname,
                              applicant.applicantId,
                              "rejected"
                            )
                          }
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
