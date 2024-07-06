import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      axios
        .get("/auth/profile")
        .then(({ data }) => {
          setUser(data);
          setRole(data.role);
          setId(data.id);
          // show the user type and email in the console
          console.log("User Type:", data.role, data.email, data.id);
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

  // Define isSignedIn function, which returns true if the user is signed in, or false if the user is not signed in
  const isSignedIn = () => user !== null;

  return (
    // pass the role state to the value prop for the role-based access on the routes
    <UserContext.Provider
      value={{ user, setUser, role, loading, id, isSignedIn }}
    >
      {children}
    </UserContext.Provider>
  );
}
