import TopNavEmpty from "../src/components/TopNavEmpty";

export default function ActivityE() {
  return (
    <div className="flex h-screen bg-white">
      {/* Sticky Navigation Bar */}
      <TopNavEmpty title="Activity" />
      {/* User Information */}
      <div className="flex-1 p-8">
        <div className=" mt-10">
          {/* Search and Filter */}
          <h2 className="flex text-2xl font-bold text-left mb-4">Posted Job</h2>
          {/* Table */}
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
          <button
            className="flex justify-start mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => (window.location.href = "/postjob")}
          >
            Post a job
          </button>
        </div>
      </div>
    </div>
  );
}
