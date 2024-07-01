import { Outlet } from "react-router-dom";
import TopNavEmpty from "../src/components/TopNavEmpty";
import { Link } from "react-router-dom";
import JobDetail from "./JobDetail";

const job = [
  {
    id: 1,
    title: "Software Engineer",
    location: "San Francisco, CA",
    company: "Tech Innovations Inc.",
    salaryRange: "$100,000 - $120,000",
    description: "Develop cutting-edge software solutions for global clients.",
  },
  {
    id: 2,
    title: "Data Scientist",
    location: "New York, NY",
    company: "DataWiz Solutions",
    salaryRange: "$110,000 - $130,000",
    description:
      "Analyze complex datasets to drive innovation and strategic decision-making.",
  },
  {
    id: 3,
    title: "Product Manager",
    location: "Austin, TX",
    company: "Creative Solutions Ltd.",
    salaryRange: "$90,000 - $115,000",
    description:
      "Lead cross-functional teams to launch products that meet customer needs.",
  },
  {
    id: 4,
    title: "UX/UI Designer",
    location: "Remote",
    company: "DesignX Studio",
    salaryRange: "$80,000 - $100,000",
    description: "Design intuitive interfaces that enhance user experience.",
  },
];

export default function HomeE() {
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
                {job.map((jobItem, index) => (
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
