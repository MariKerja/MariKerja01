import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import ActivityJS from "../components/role-based/ActivityJS";
import ActivityE from "../components/role-based/ActivityE";

export default function Activity() {
  const { role } = useContext(UserContext);
  return (
    <div>
      {role === "job-seeker" && <ActivityJS />}
      {role === "employer" && <ActivityE />}
    </div>
  );
}
