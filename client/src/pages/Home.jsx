import { useState, useEffect } from "react";
import TopNavEmpty from "../components/TopNavEmpty";
import { Sidebar } from '../components/SideBar'; 

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Check screen width and toggle showSidebar accordingly
      if (window.innerWidth <= 718) { // Adjust the breakpoint as needed
        setShowSidebar(false);
      } else {
        setShowSidebar(true);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar showSidebar={showSidebar} />


      {/* Content */}
      <div className={`flex-1 ${showSidebar ? 'pl-64' : ''}`}>
        {/* Sticky Navigation Bar */}
        <TopNavEmpty title="Home" />
        <div className="flex-1 p-8">
          <div className=" mt-10">
            {/* Search and Filter */}
            <h2 className="flex text-2xl font-bold text-left mb-4">
              List of all job
            </h2>
            <div className="flex mb-4">
              <input type="text" placeholder="Search..." className="px-4 py-2 border rounded-lg mr-4" />
              <select className="px-4 py-2 border rounded-lg">
                <option value="place">Place</option>
                <option value="name">Name</option>
              </select>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-4">Search</button>
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
                  <td className="border px-4 py-2">Cashier</td>
                  <td className="border px-4 py-2">Nilai, Negeri Sembilan</td>
                  <td className="border px-4 py-2">Part-Time</td>
                  <td className="border px-4 py-2">Kedai Runcit Ah Leong</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">2</td>
                  <td className="border px-4 py-2">Tukang Masak</td>
                  <td className="border px-4 py-2">Sepang, Selangor</td>
                  <td className="border px-4 py-2">Full-Time</td>
                  <td className="border px-4 py-2">Pasta Kak Gee</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">3</td>
                  <td className="border px-4 py-2">Sales Assistant</td>
                  <td className="border px-4 py-2">Seremban, Negeri Sembilan</td>
                  <td className="border px-4 py-2">Part-Time</td>
                  <td className="border px-4 py-2">ABC Retail</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">4</td>
                  <td className="border px-4 py-2">Waiter/Waitress</td>
                  <td className="border px-4 py-2">Seri Kembangan, Selangor</td>
                  <td className="border px-4 py-2">Full-Time</td>
                  <td className="border px-4 py-2">Bistro 123</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">5</td>
                  <td className="border px-4 py-2">Receptionist</td>
                  <td className="border px-4 py-2">Putrajaya</td>
                  <td className="border px-4 py-2">Part-Time</td>
                  <td className="border px-4 py-2">Hotel Bliss</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">6</td>
                <td className="border px-4 py-2">Barista</td>
                <td className="border px-4 py-2">Cyberjaya, Selangor</td>
                <td className="border px-4 py-2">Full-Time</td>
                <td className="border px-4 py-2">Cafe Mocha</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">7</td>
                <td className="border px-4 py-2">Delivery Driver</td>
                <td className="border px-4 py-2">Bangi, Selangor</td>
                <td className="border px-4 py-2">Part-Time</td>
                <td className="border px-4 py-2">Fast Delivery</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">8</td>
                <td className="border px-4 py-2">Cleaner</td>
                <td className="border px-4 py-2">Port Dickson, Negeri Sembilan</td>
                <td className="border px-4 py-2">Full-Time</td>
                <td className="border px-4 py-2">CleanCo Services</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">9</td>
                <td className="border px-4 py-2">Security Guard</td>
                <td className="border px-4 py-2">Klang, Selangor</td>
                <td className="border px-4 py-2">Part-Time</td>
                <td className="border px-4 py-2">Secure Solutions</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">10</td>
                <td className="border px-4 py-2">Shop Assistant</td>
                <td className="border px-4 py-2">Kajang, Selangor</td>
                <td className="border px-4 py-2">Full-Time</td>
                <td className="border px-4 py-2">Happy Mart</td>
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
