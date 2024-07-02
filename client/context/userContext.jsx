import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      axios
        .get("/profile")
        .then(({ data }) => {
          setUser(data);
          setRole(data.role);
          // show the user type and email in the console
          console.log("User Type:", data.role, data.email);
          setLoading(false);
        })
        .catch(() => {
          setUser(null);
          setRole("");
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [user]);

  return (
    // pass the role state to the value prop for the role-based access on the routes
    <UserContext.Provider value={{ user, setUser, role, loading }}>
      {children}
    </UserContext.Provider>
  );
}
