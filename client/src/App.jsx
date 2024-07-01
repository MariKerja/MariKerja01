import "./App.css";
import { Routes, Route } from "react-router-dom";
//component
import Navbar from "./components/Navbar";
import TopNav from "./components/TopNav";
//pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProfileE from "./pages/ProfileE";
import ProfileJS from "./pages/ProfileJS";
import ActivityJS from "./pages/ActivityJS";
import ActivityE from "./pages/ActivityE";
import PostJob from "./pages/PostJob";
import EditProfile from "./pages/EditProfile";
import JobDescription from "./pages/JobDescription";
import Hiring1 from "./pages/Hiring1";
import Hiring2 from "./pages/Hiring2";
import EditResume from "./pages/EditResume";
import EditCompanyInfo from "./pages/EditCompanyInfo";
import CompanyInfo from "./pages/CompanyInfo";
//unfinished
// import Dashboard from "./pages/Dashboard";
// import Dashboard from "./pages/Dashboard";

import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";



axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      {/* <Navbar /> */}
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profilee" element={<ProfileE />} />
        <Route path="/profilejs" element={<ProfileJS />} />
        <Route path="/activityjs" element={<ActivityJS />} />
        <Route path="/activitye" element={<ActivityE />} />
        <Route path="/postjob" element={<PostJob />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/jobdescription" element={<JobDescription />} />
        <Route path="/hiring1" element={<Hiring1 />} />
        <Route path="/hiring2" element={<Hiring2 />} />
        <Route path="/editresume" element={<EditResume />} />
        <Route path="/editcompanyinfo" element={<EditCompanyInfo />} />
        <Route path="/companyinfo" element={<CompanyInfo />} />
      </Routes>
    </UserContextProvider>

  );
}

export default App;
