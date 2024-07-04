import React, { useContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SidebarJS from "/src/components/SidebarJS.jsx";
import SidebarE from "/src/components/SidebarE.jsx";
import HomeJS from "/src/pages/HomeJS.jsx";
import HomeE from "/src/pages/HomeE.jsx";
import ProfileJS from "/src/pages/ProfileJS.jsx";
import ProfileE from "/src/pages/ProfileE.jsx";
import ActivityJS from "/src/pages/ActivityJS.jsx";
import ActivityE from "/src/pages/ActivityE.jsx";
import PostJob from "/src/pages/PostJob.jsx";
import Login from "/src/pages/Login.jsx";
import Register from "/src/pages/Register.jsx";
import { UserContextProvider, UserContext } from "/context/userContext";

// Custom component to determine the Sidebar element based on the user role
const SidebarElement = () => {
  const { role } = useContext(UserContext);
  return role === "job-seeker" ? <SidebarJS /> : <SidebarE />;
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
    element: <SidebarElement />,
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
        path: "activity/postjob",
        element: <PostJob />,
      },
    ],
  },
]);

export default router;
