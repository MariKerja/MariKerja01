import { React, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import ProfileJS from "../components/role-based/ProfileJS";
import ProfileE from "../components/role-based/ProfileE";

export default function Profile() {
  const { role } = useContext(UserContext);
  return (
    <div>
      {role === "job-seeker" && <ProfileJS />}
      {role === "employer" && <ProfileE />}
    </div>
  );
}
