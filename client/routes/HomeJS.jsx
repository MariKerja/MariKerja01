import { Outlet } from "react-router-dom";
import TopNavEmpty from "../src/components/TopNavEmpty";

export default function HomeJS() {
  return (
    <div className="flex h-screen bg-white">
      <TopNavEmpty title="Home" />{" "}
      <div>
        {/* Sticky Navigation Bar */}
        <div className="flex-1 p-8">
          <div className=" mt-10">
            {/* Search and Filter */}
            <h2 className="flex text-2xl font-bold text-left mb-4">
              Available Jobs{" "}
            </h2>
            <div className="flex mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 border rounded-lg mr-4"
              />
              <select className="px-4 py-2 border rounded-lg">
                <option value="place">Place</option>
                <option value="name">Name</option>
              </select>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-4">
                Search
              </button>
            </div>
            {/* Table */}
            <table className="table-auto text-left w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">No</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Place</th>
                  <th className="px-4 py-2">Type</th>
                  <th className="px-4 py-2">Company</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">Job 1</td>
                  <td className="border px-4 py-2">Nilai, Negeri Sembilan</td>
                  <td className="border px-4 py-2">Part-Time</td>
                  <td className="border px-4 py-2">Company 1</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">2</td>
                  <td className="border px-4 py-2">Job 2</td>
                  <td className="border px-4 py-2">Nilai, Negeri Sembilan</td>
                  <td className="border px-4 py-2">Full-Time</td>
                  <td className="border px-4 py-2">Company 2</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
