// src/hooks/useFetchUserProfile.js
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchUserProfile = (userId) => {
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useEffect triggered with userId:", userId); // Debug: Check when useEffect is triggered and with what userId
    if (userId) {
      console.log("Fetching data for userId:", userId); // Debug: Confirm fetching data
      setIsLoading(true); // Set loading to true before fetching data
      axios
        .get(`users/${userId}`)
        .then((response) => {
          console.log(
            "Data fetched successfully for userId:",
            userId,
            "Response data:",
            response.data
          ); // Debug: Check fetched data
          setUserProfile(response.data);
          setIsLoading(false); // Set loading to false after fetching data
        })
        .catch((error) => {
          console.error(
            "There was an error fetching data for userId:",
            userId,
            error
          ); // Debug: Check error details
          setError(error);
          setIsLoading(false); // Ensure loading is set to false even if there's an error
        });
    } else {
      console.log("No userId provided, skipping data fetch."); // Debug: Check condition when no userId is provided
      setIsLoading(false); // If no userId, ensure loading is set to false
    }
  }, [userId]); // Depend on userId to re-fetch data when it changes

  return { userProfile, isLoading, error };
};

export default useFetchUserProfile;
