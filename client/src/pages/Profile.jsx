import { React, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import ProfileJS from "../components/role-based/ProfileJS";
import ProfileE from "../components/role-based/ProfileE";

export default function Profile() {
  const { user } = useContext(UserContext);
  return (
    <div>
      {user.role === "job-seeker" && <ProfileJS />}
      {user.role === "employer" && <ProfileE />}
    </div>
  );
}
