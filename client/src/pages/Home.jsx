import { React, useContext } from "react";
import { UserContext } from "../../context/userContext";
import HomeJs from "../components/role-based/HomeJS";
import HomeE from "../components/role-based/HomeE";

export default function Home() {
  const { role } = useContext(UserContext);
  return (
    <div>
      {role === "job-seeker" && <HomeJs />}
      {role === "employer" && <HomeE />}
    </div>
  );
}
