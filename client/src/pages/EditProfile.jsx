import { React, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import EditProfileE from "../components/role-based/EditProfileE";
import EditProfileJS from "../components/role-based/EditProfileJS";

export default function EditProfile() {
  const { user } = useContext(UserContext);
  return (
    <div>
      {user.role === "job-seeker" && <EditProfileJS />}
      {user.role === "employer" && <EditProfileE />}
    </div>
  );
}
