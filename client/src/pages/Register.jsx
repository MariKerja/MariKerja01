import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Registerco() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    day: "1",
    month: "1",
    year: "2002",
    gender: "Male",
    role: "job-seeker",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const {
      firstname,
      lastname,
      email,
      password,
      day,
      month,
      year,
      gender,
      role,
    } = data;
    try {
      const { data } = await axios.post("/register", {
        firstname,
        lastname,
        email,
        password,
        dateOfBirth: { day, month, year },
        gender,
        role,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({
          firstname: "",
          lastname: "",
          day: "1",
          year: "2002",
          month: "1",
          gender: "Male",
          role: "job-seeker",
          email: "",
          password: "",
        });
        toast.success("Register Successful. Welcome!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={registerUser}>
        <div className="flex flex-col">
          <Header />
        </div>
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <input
              type="text"
              className="w-full bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Firstname"
              value={data.firstname}
              onChange={(e) => setData({ ...data, firstname: e.target.value })}
            />
          </div>
          <div className="w-1/2">
            <input
              type="text"
              className="w-full bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Lastname"
              value={data.lastname}
              onChange={(e) => setData({ ...data, lastname: e.target.value })}
            />
          </div>
        </div>
        <div className="relative mb-4">
          <input
            type="text"
            className="w-full bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Email address"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="relative mb-4">
          <input
            type="text"
            className="w-full bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="New password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="birthday"
            className="flex justify-start block text-black font-medium mb-0"
          >
            Date of birth
          </label>
          <div className="flex gap-4">
            <select
              name="birthday_day"
              id="day"
              required
              value={data.day}
              onChange={(e) => setData({ ...data, day: e.target.value })}
              className="w-1/3 px-3 py-2 border border-gray-700 bg-white text-black rounded-md"
            >
              {[...Array(31).keys()].map((day) => (
                <option key={day + 1} value={day + 1}>
                  {day + 1}
                </option>
              ))}
            </select>
            <select
              name="birthday_month"
              id="month"
              required
              value={data.month}
              onChange={(e) => setData({ ...data, month: e.target.value })}
              className="w-1/3 px-3 py-2 border border-gray-700 bg-white text-black rounded-md"
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                <option key={month} value={month}>
                  {new Date(0, month).toLocaleString("en", { month: "short" })}
                </option>
              ))}
            </select>
            <select
              name="birthday_year"
              id="year"
              required
              value={data.year}
              onChange={(e) => setData({ ...data, year: e.target.value })}
              className="w-1/3 px-3 py-2 border border-gray-700 bg-white text-black rounded-md"
            >
              {Array.from(
                { length: 100 },
                (_, i) => new Date().getFullYear() - i
              ).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label
              htmlFor="gender"
              className="flex justify-start block text-black font-medium mb-0"
            >
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              required
              value={data.gender}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
              className="w-full px-3 py-2 border border-gray-700 bg-white text-black rounded-md"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="w-1/2">
            <label
              htmlFor="role"
              className="flex justify-start block text-gray-700 block font-medium mb-0"
            >
              Sign up as
            </label>
            <select
              name="role"
              id="role"
              required
              value={data.role}
              onChange={(e) => setData({ ...data, role: e.target.value })}
              className="w-full px-3 py-2 border border-gray-700 bg-white text-black rounded-md"
            >
              <option value="job-seeker">Job Seeker</option>
              <option value="employer">Employer</option>
            </select>
          </div>
        </div>
        <div className="relative mb-4">
          <button
            type="submit"
            className="font-inter w-full text-white bg-black border-0 py-2 px-6 rounded text-lg"
          >
            Submit
          </button>
        </div>
        <div className="text-center">
          <a href="/login" className="text-blue-500 hover:underline">
            Already have an account?
          </a>
        </div>
      </form>
    </div>
  );
}
