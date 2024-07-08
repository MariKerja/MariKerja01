import React, { useContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/UserContext"; // Update the import path as necessary

export default function SideBar() {
  const { setUser, loading } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Send a GET request to the /auth/logout endpoint to log out the user
      // It will clear the token stored in the browser's local storage
      const response = await axios.get("/auth/logout");
      // Set the user state to null and redirect to the login page
      setUser(null);
      console.log(response.data.message);
      navigate("/auth/login");
    } catch (error) {
      console.error("Logout failed:", error.response.data.error);
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-full">
      <div className="h-full relative w-64 flex-shrink-0 border-r-2 border-black-950">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-center">MariKerja</h1>
          <ul className="mt-4">
            <li className="py-2 flex items-center">
              <Link
                to="/"
                className="container max-width flex items-center gap-3 px-4 py-2 hover:bg-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-home"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Home
              </Link>
            </li>
            <li className="py-2 flex items-center">
              <Link
                to="/profile"
                className="container max-width flex items-center gap-3 px-4 py-2 hover:bg-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-user"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Profile
              </Link>
            </li>
            <li className="py-2 flex items-center">
              <Link
                to="/activity"
                className="container max-width flex items-center gap-3 px-4 py-2 hover:bg-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-activity"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
                Activity
              </Link>
            </li>
            <li className="py-2 flex items-center">
              <button
                onClick={handleLogout}
                className="container max-width flex items-center gap-3 px-4 py-2 hover:bg-gray-400 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-log-out"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-grow">
        {/* This is where the child routes will be rendered */}
        <Outlet />
      </div>
    </div>
  );
}
