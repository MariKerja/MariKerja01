import React, { useContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "/src/pages/Login.jsx";
import Register from "/src/pages/Register.jsx";
import Profile from "../src/pages/Profile";
import Home from "../src/pages/Home";
import PostJob from "../src/pages/PostJob.jsx";
import Activity from "../src/pages/Activity";
import JobDetail from "../src/pages/JobDetail.jsx";
import SideBar from "../src/components/SideBar.jsx";
import EditProfile from "../src/pages/EditProfile.jsx";
import ErrorPage from "../src/pages/ErrorPage.jsx";
import Hiring1 from "../src/pages/Hiring1.jsx";
import Hiring2 from "../src/pages/Hiring2.jsx";
import ProtectedRoute from "../src/ProtectedRoute/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "auth",
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/",
    element: <SideBar />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            {" "}
            <Home />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "/activity",
        element: (
          <ProtectedRoute>
            <Activity />
          </ProtectedRoute>
        ),
      },
      {
        path: "activity/postjob",
        element: (
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile/edit",
        element: (
          <ProtectedRoute>
            <EditProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "jobs/:id",
        element: (
          <ProtectedRoute>
            <JobDetail />
          </ProtectedRoute>
        ),
      },
      {
        path: "jobs/:jobId/applications",
        element: (
          <ProtectedRoute>
            <Hiring1 />
          </ProtectedRoute>
        ),
      },
      {
        path: "jobs/:jobId/applications/:applicantId",
        element: (
          <ProtectedRoute>
            <Hiring2 />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
