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
import { Toaster } from "react-hot-toast";
import { UserContextProvider, UserContext } from "/context/userContext";
import "./index.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

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
    element: (
      <UserContext.Consumer>
        {({ role }) => (role === "job-seeker" ? <RootJS /> : <RootE />)}
      </UserContext.Consumer>
    ),
    children: [
      {
        path: "/home",
        element: (
          <UserContext.Consumer>
            {({ role }) => (role === "job-seeker" ? <HomeJS /> : <HomeE />)}
          </UserContext.Consumer>
        ),
      },
      {
        path: "/activity",
        element: (
          <UserContext.Consumer>
            {({ role }) =>
              role === "job-seeker" ? <ActivityJS /> : <ActivityE />
            }
          </UserContext.Consumer>
        ),
      },
      {
        path: "/profile",
        element: (
          <UserContext.Consumer>
            {({ role }) =>
              role === "job-seeker" ? <ProfileJS /> : <ProfileE />
            }
          </UserContext.Consumer>
        ),
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
