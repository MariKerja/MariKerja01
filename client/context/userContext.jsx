import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");
  const [id, setId] = useState(""); // Add this line to store the user's id [1/2
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (!user) {
  //     axios
  //       .get("/profile")
  //       .then(({ data }) => {
  //         setUser(data);
  //         setRole(data.role);
  //         setId(data.id); // Add this line to store the user's id [2/2]
  //         // show the user type and email in the console
  //         console.log("User Type:", data.role, data.email, data.id);
  //         setLoading(false);
  //       })
  //       .catch(() => {
  //         setUser(null);
  //         setRole("");
  //         setLoading(false);
  //       });
  //   } else {
  //     setLoading(false);
  //   }
  // }, [user]);

  useEffect(() => {
    console.log("useEffect triggered, user:", user); // Log when useEffect is triggered and the current user state
    if (!user) {
      console.log("No user found, fetching profile..."); // Log when no user is found and before fetching profile
      axios
        .get("/profile")
        .then(({ data }) => {
          console.log("Profile fetched, data:", data); // Log the fetched profile data
          setUser(data);
          console.log("User set:", data); // Log after setting user
          setRole(data.role);
          console.log("Role set:", data.role); // Log after setting role
          setId(data.id); // Add this line to store the user's id [2/2]
          console.log("ID set:", data.id); // Log after setting ID
          // show the user type and email in the console
          console.log("User Type:", data.role, data.email, data.id);
          setLoading(false);
          console.log("Loading set to false"); // Log after setting loading to false
        })
        .catch((error) => {
          console.error("Error fetching profile:", error); // Log any error during profile fetch
          setUser(null);
          console.log("User set to null due to error"); // Log after setting user to null due to error
          setRole("");
          console.log("Role set to empty string due to error"); // Log after setting role to empty string due to error
          setLoading(false);
          console.log("Loading set to false due to error"); // Log after setting loading to false due to error
        });
    } else {
      setLoading(false);
      console.log("User already exists, just setting loading to false"); // Log when user already exists and just setting loading to false
    }
  }, [user]);

  return (
    // pass the role state to the value prop for the role-based access on the routes
    <UserContext.Provider value={{ user, setUser, role, loading, id }}>
      {children}
    </UserContext.Provider>
  );
}
