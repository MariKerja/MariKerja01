import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null); // Initialize the user state to null, userState is used to modify the user state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      axios
        // Get user profile by sending a GET request to the /auth/profile endpoint
        // using the token stored in the browser's local storage as the authorization
        // header
        .get("/auth/profile")
        .then(({ data }) => {
          const user = data; // Rename the response data to user for readability
          setUser(user); // Set the user state to the user data
          console.log("User Type:", user.role, user.email, user.id);
          setLoading(false); //
        })
        // If user is not found
        .catch(() => {
          console.log("catch block user not found");
          setUser(null); // Set the user state to null
          setLoading(false); // Set the loading state to false
        });
      // If the user state is not null (i.e., the user is already logged in)
    } else {
      console.log("else block user not null");
      setLoading(false);
    }
  }, [user]);

  return (
    // pass the role state to the value prop for the role-based access on the routes
    <UserContext.Provider value={{ user, loading, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
