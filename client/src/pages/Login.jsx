import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({ email: "", password: "" });
        navigate("/home");
      }
    } catch (error) {}
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
            value={data.name}
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
            href="/register"
            className="w-full inline-flex justify-center text-white bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 hover:text-white rounded text-lg"
          >
            Create new account
          </a>
        </div>
      </form>
    </div>
  );
}
