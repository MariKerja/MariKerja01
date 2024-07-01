import TopNavEmpty from "../src/components/TopNavEmpty";
import { Link } from "react-router-dom";
export default function ActivityJS() {
  const jobs = [
    {
      id: 1,
      title: "Job 1",
      location: "Nilai, Negeri Sembilan",
      company: "Lazada",
    },
    // Add more job objects as needed
  ];

  return (
    <div className="flex h-screen bg-white">
      <TopNavEmpty title="Activity" />
      <div className="flex-1 p-8">
        <div className="mt-10">
          <h2 className="flex text-2xl font-bold text-left mb-4">
            Applied Job
          </h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border">No</th>
                <th className="px-4 py-2 border">Title</th>
                <th className="px-4 py-2 border">Place</th>
                <th className="px-4 py-2 border">Company</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((jobItem, index) => (
                <tr key={jobItem.id}>
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">
                    <Link to={`/job/${jobItem.id}`}>{jobItem.title}</Link>
                  </td>
                  <td className="px-4 py-2 border">
                    <Link to={`/job/${jobItem.id}`}>{jobItem.location}</Link>
                  </td>
                  <td className="px-4 py-2 border">
                    <Link to={`/job/${jobItem.id}`}>{jobItem.company}</Link>
                  </td>
                  <td className="px-4 py-2 border">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => {
                        /* your action here */
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
