import { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Header from "../components/Header";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useContext(UserContext);
  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    console.log("Attempting to log in with:", email, password); // Log the email and password being used to attempt login

    try {
      const { data: responseData } = await axios.post("/auth/login", {
        email,
        password,
      });
      console.log("Login response data:", responseData); // Log the response data from the login attempt

      if (responseData.error) {
        console.log("enter the if dataerror"); // Log any login error
        console.error("Login error:", responseData.error); // Log any login error
        toast.error(responseData.error);
      } else {
        console.log("entering the else block"); // Log the user data
        setUser(responseData);
        console.log("User data is set:", responseData); // Log the user data
        setData({});
        console.log("navigating"); // Log the user data
        navigate("/");
      }
    } catch (error) {
      // Handle errors that occur during the Axios request
      if (error.response && error.response.data && error.response.data.error) {
        // Displaying the error message sent from the server
        toast.error(error.response.data.error);
      } else {
        // Generic error message if the error format is unexpected
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form onSubmit={loginUser}>
        <div className="flex flex-col">
          <Header />
        </div>
        <div className="relative mb-4">
          <input
            type="email"
            className="w-full bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        <div className="relative mb-4">
          <input
            type="password"
            className="w-full bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>

        <div className="relative mb-4">
          <button
            type="submit"
            className="font-inter w-full text-white bg-black border-0 py-2 px-6 rounded text-lg"
          >
            Login
          </button>
        </div>
        <div className="relative mb-4">
          <a
            href="/auth/register"
            className="w-full inline-flex justify-center text-white bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 hover:text-white rounded text-lg"
          >
            Create a new account
          </a>
        </div>
      </form>
    </div>
  );
}
