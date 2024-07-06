import TopNavEmpty from "../TopNavEmpty";

export default function ActivityJS() {
  return (
    <div className="flex h-screen bg-white">
      <TopNavEmpty title="Activity" />
      <div>
        {/* Sticky Navigation Bar */}
        {/* User Information */}
        <div className="flex-1 p-8">
          <div className=" mt-10">
            {/* Search and Filter */}
            <h2 className="flex text-2xl font-bold text-left mb-4">
              Applied Job
            </h2>

            {/* Table */}
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
                <tr>
                  <td className="border px-6 py-2">1</td>
                  <td className="border px-6 py-2">Job 1</td>
                  <td className="border px-6 py-2">Nilai, Negeri Sembilan</td>
                  <td className="border px-6 py-2">Lazada </td>
                  <td className="border px-6 py-2">Accepted</td>
                  <td className="border px-6 py-2">
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
                <tr>
                  <td className="border px-6 py-2">2</td>
                  <td className="border px-6 py-2">Job 2</td>
                  <td className="border px-6 py-2">Nilai, Negeri Sembilan</td>
                  <td className="border px-6 py-2">Lazada </td>
                  <td className="border px-6 py-2">Pending</td>
                  <td className="border px-6 py-2">
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
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
