import { React, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import HomeJs from "../components/role-based/HomeJS";
import HomeE from "../components/role-based/HomeE";

export default function Home() {
  const { user } = useContext(UserContext);
  return (
    <div>
      {user.role === "job-seeker" && <HomeJs />}
      {user.role === "employer" && <HomeE />}
    </div>
  );
}
