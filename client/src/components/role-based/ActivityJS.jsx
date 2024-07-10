// import TopNavEmpty from "../TopNavEmpty";

// export default function ActivityJS() {
//   return (
//     <div className="flex h-screen bg-white">
//       <TopNavEmpty title="Activity" />
//       <div>
//         {/* Sticky Navigation Bar */}
//         {/* User Information */}
//         <div className="flex-1 p-8">
//           <div className=" mt-10">
//             {/* Search and Filter */}
//             <h2 className="flex text-2xl font-bold text-left mb-4">
//               Applied Job
//             </h2>

//             {/* Table */}
//             <table className="table-auto text-left w-full">
//               <thead>
//                 <tr>
//                   <th className="px-6 py-2">No</th>
//                   <th className="px-6 py-2">Title</th>
//                   <th className="px-6 py-2">Place</th>
//                   <th className="px-6 py-2">Company Name</th>
//                   <th className="px-6 py-2">Status</th>
//                   <th className="px-6 py-2"> </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="border px-6 py-2">1</td>
//                   <td className="border px-6 py-2">Job 1</td>
//                   <td className="border px-6 py-2">Nilai, Negeri Sembilan</td>
//                   <td className="border px-6 py-2">Lazada </td>
//                   <td className="border px-6 py-2">Accepted</td>
//                   <td className="border px-6 py-2">
//                     <button
//                       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                       onClick={() => {
//                         /* your action here */
//                       }}
//                     >
//                       X
//                     </button>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="border px-6 py-2">2</td>
//                   <td className="border px-6 py-2">Job 2</td>
//                   <td className="border px-6 py-2">Nilai, Negeri Sembilan</td>
//                   <td className="border px-6 py-2">Lazada </td>
//                   <td className="border px-6 py-2">Pending</td>
//                   <td className="border px-6 py-2">
//                     <button
//                       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                       onClick={() => {
//                         /* your action here */
//                       }}
//                     >
//                       X
//                     </button>
//                   </td>
//                 </tr>
//                 {/* Add more rows as needed */}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect, useContext } from "react";
import TopNavEmpty from "../TopNavEmpty";
import { UserContext } from "../../../context/UserContext";
import { Link } from "react-router-dom";

export default function ActivityJS() {
  const [jobs, setJobs] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:8000/jobs")
      .then((response) => response.json())
      .then((data) => {
        // Assuming userId is available in the component (you need to fetch this from your authentication context or props)
        const userId = user.id; // Replace with actual user ID

        // Filter jobs where userId is in the applicants array
        const filteredJobs = data.filter((job) =>
          job.applicants.some((applicant) => applicant.applicantId === userId)
        );

        setJobs(filteredJobs);
      })
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <div className="flex h-screen bg-white">
      <TopNavEmpty title="Activity" />
      <div className="flex-1 p-8">
        <div className="mt-10">
          <h2 className="flex text-2xl font-bold text-left mb-4">
            Applied Jobs
          </h2>
          <table className="table-auto text-left w-full">
            <thead>
              <tr>
                <th className="px-6 py-2">No</th>
                <th className="px-6 py-2">Title</th>
                <th className="px-6 py-2">Place</th>
                <th className="px-6 py-2">Company Name</th>
                <th className="px-6 py-2">Status</th>
                <th className="px-6 py-2"> </th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={job._id}>
                  <td className="border px-6 py-2">{index + 1}</td>
                  <td className="border px-6 py-2">
                    <Link to={`/jobs/${job._id}`}>{job.jobname}</Link>
                  </td>
                  <td className="border px-6 py-2">{job.address}</td>
                  <td className="border px-6 py-2">{job.companyName}</td>
                  <td className="border px-6 py-2">
                    {job.applicants.map((applicant) => (
                      <div key={applicant._id}>
                        {applicant.applicantId === user.id && (
                          <span>{applicant.status}</span>
                        )}
                      </div>
                    ))}
                  </td>
                  <td className="border px-6 py-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => {
                        // Handle button click action (e.g., delete job application)
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
