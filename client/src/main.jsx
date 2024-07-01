import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootJS from "/routes/RootJS.jsx";
import RootE from "/routes/RootE.jsx";
import HomeJS from "/routes/HomeJS.jsx";
import HomeE from "/routes/HomeE.jsx";
import ProfileJS from "/routes/ProfileJS.jsx";
import ProfileE from "/routes/ProfileE.jsx";
import ActivityJS from "/routes/ActivityJS.jsx";
import ActivityE from "/routes/ActivityE.jsx";
import Login from "/routes/Login.jsx";
import Register from "/routes/Register.jsx";
import JobDetail from "/routes/JobDetail.jsx";
import PostJob from "/routes/PostJob.jsx";
import { Toaster } from "react-hot-toast";
import { UserContextProvider, UserContext } from "/context/userContext";
import "./index.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

// Custom component to determine the root element based on the user role
const RootElement = () => {
  const { role } = useContext(UserContext);
  return role === "job-seeker" ? <RootJS /> : <RootE />;
};

// Custom component to determine the home element based on the user role
const HomeElement = () => {
  const { role } = useContext(UserContext);
  return role === "job-seeker" ? <HomeJS /> : <HomeE />;
};

// Custom component to determine the profile element based on the user role
const ProfileElement = () => {
  const { role } = useContext(UserContext);
  return role === "job-seeker" ? <ProfileJS /> : <ProfileE />;
};

// Custom component to determine the activity element based on the user role
const ActivityElement = () => {
  const { role } = useContext(UserContext);
  return role === "job-seeker" ? <ActivityJS /> : <ActivityE />;
};

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
    element: <RootElement />,
    children: [
      {
        path: "/home",
        element: <HomeElement />,
      },
      {
        path: "/activity",
        element: <ActivityElement />,
      },
      {
        path: "/profile",
        element: <ProfileElement />,
      },
      {
        path: "/job/:id",
        element: <JobDetail />,
      },
      {
        path: "/activity/postjob",
        element: <PostJob />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
