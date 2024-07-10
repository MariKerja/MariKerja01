import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import TopNav from "../components/TopNav";

export default function Hiring2() {
  const { applicantId, jobId } = useParams();
  const [applicantProfile, setApplicantProfile] = useState(null);

  useEffect(() => {
    const fetchApplicantProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/users/${applicantId}`
        );
        setApplicantProfile(response.data);
      } catch (error) {
        console.error("There was an error!", error);
      }
    };

    fetchApplicantProfile();
  }, [applicantId]);

  const handleApplicantStatus = (applicantName, applicantId, status) => {
    axios
      .patch(`http://localhost:8000/jobs/${jobId}/applicants/${applicantId}`, {
        status,
      })
      .then((response) => {
        toast.success(`${applicantName} ${status}!`);
      })
      .catch((error) => console.error("There was an error!", error));
  };

  if (!applicantProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-white">
      <div>
        <TopNav title="Jobseeker Details" />
        {/* User Information */}
        <div className="flex-1 p-8 text-left">
          {/* Resume Information */}
          <div className="mb-10 mt-10">
            <h2 className="text-2xl font-bold text-left mb-4">
              {applicantProfile.firstname} {applicantProfile.lastname}
            </h2>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="FullName"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Full Name
              </label>
              <a className="w-2/3 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                {applicantProfile.firstname} {applicantProfile.lastname}
              </a>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="ContactNumber"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Contact Number
              </label>
              <a className="w-2/3 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                {applicantProfile.profile?.resume?.contactNumber}
              </a>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="Address"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Address
              </label>
              <a className="w-2/3 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                {applicantProfile.profile?.resume?.address}
              </a>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="AboutMe"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                About Me
              </label>
              <a className="w-2/3 h-40 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                {applicantProfile.profile?.resume?.about}
              </a>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="Education"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Education
              </label>
              <a className="w-2/3 h-40 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                {applicantProfile.profile?.resume?.education}
              </a>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="website"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Personal Skills
              </label>
              <a className="w-2/3 h-40 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
                {applicantProfile.profile?.resume?.skills}
              </a>
            </div>
            <div className="flex gap-2">
              <button
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() =>
                  handleApplicantStatus(
                    applicantProfile.firstname,
                    applicantId,
                    "hired"
                  )
                }
              >
                Hire
              </button>
              <button
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() =>
                  handleApplicantStatus(
                    applicantProfile.firstname,
                    applicantId,
                    "rejected"
                  )
                }
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
