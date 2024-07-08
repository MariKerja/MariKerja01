import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import ActivityJS from "../components/role-based/ActivityJS";
import ActivityE from "../components/role-based/ActivityE";

export default function Activity() {
  const { user } = useContext(UserContext);
  return (
    <div>
      {user.role === "job-seeker" && <ActivityJS />}
      {user.role === "employer" && <ActivityE />}
    </div>
  );
}
