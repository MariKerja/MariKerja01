import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import { Sidebar } from "./components/SideBar";

function App() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
