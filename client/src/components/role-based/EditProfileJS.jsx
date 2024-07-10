import TopNav from "../TopNav";
import { UserContext } from "../../../context/UserContext";
import useFetchUserProfile from "../../hooks/useFetchUserProfile";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function EditProfileJS() {
  const { user } = useContext(UserContext); // Use useContext to access the current user
  const { userProfile, isLoading, error } = useFetchUserProfile(user?.id); // Use custom hook to fetch user profile
  const userId = user?.id; // Get the user ID from the current user object
  const userRole = user?.role; // Get the user role from the current user object
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    dateOfBirth: {
      day: 1,
      month: 1,
      year: 2000,
    },
    gender: "Male",
    role: userRole,
    profile: {
      resume: {
        contactNumber: "",
        address: "",
        about: "",
        skills: "",
      },
    },
  });

  const handleSubmit = async () => {
    try {
      console.log("entering try block");
      console.log("Sending data:", formData);
      const response = await axios.put(`users/${userId}`, formData); // Corrected to capture the whole response
      console.log("Submitted data: ", formData);

      if (response.data.error) {
        // Corrected to access error from response.data
        console.log("Information update error:", response.data.error);
        toast.error(response.data.error);
      } else {
        console.log("Information updated:", response.data); // Accessing data directly
        toast.success("Information updated successfully!");
        navigate("/profile");
      }
    } catch (error) {
      console.log("entering catch block");
      console.log("catch error Axios error:", error);

      if (error.response && error.response.data && error.response.data.error) {
        console.log("entering if error.response.data.error");
        toast.error(error.response.data.error);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  if (isLoading) {
    console.log("Rendering loading state..."); // Debug: Check when loading state is rendered
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }
  if (!userProfile) {
    return <div>User not found</div>;
  }

  return (
    <div className="flex bg-white">
      <div>
        <TopNav title="Edit Profile" />
        {/* User Information */}
        <div className="flex-1 p-8 text-left  ">
          <div className="mb-10 mt-10">
            <div className="w-full flex flex-col mb-4">
              <h2 className="text-2xl font-bold text-left mb-4">
                Personal Information
              </h2>
              <div className="flex justify-between">
                <div className="flex-1 mr-2">
                  <label
                    htmlFor="firstName"
                    className="w-full justify-start block text-black font-medium mb-0"
                  >
                    First name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="w-full block bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder={`${userProfile.firstname}`}
                    value={formData.firstname}
                    onChange={(e) =>
                      setFormData({ ...formData, firstname: e.target.value })
                    }
                  />
                </div>
                <div className="flex-1 ml-2">
                  <label
                    htmlFor="lastName"
                    className="w-full justify-start block text-black font-medium mb-0"
                  >
                    Last name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="w-full block bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder={`${userProfile.lastname}`}
                    // Assuming you have a corresponding state for the last name
                    value={formData.lastname}
                    onChange={(e) =>
                      setFormData({ ...formData, lastname: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="Email"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Email Address
              </label>
              <input
                type="email"
                className="w-1/2 block bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder={`${userProfile.email}`}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="w-full flex gap-2 justify-start mb-4">
              <label
                htmlFor="Date of birth"
                className="w-1/4 justify-start block text-black font-medium mb-0"
              >
                Date of Birth
              </label>
              <div className="flex gap-4">
                <select
                  name="birthday_day"
                  id="day"
                  required
                  className="w-1/3 px-3 py-2 border border-gray-700 bg-white text-black rounded-md"
                  value={formData.dateOfBirth.day}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dateOfBirth: {
                        ...formData.dateOfBirth,
                        day: e.target.value,
                      },
                    })
                  }
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
                  className="w-1/2 px-3 py-2 border border-gray-700 bg-white text-black rounded-md"
                  value={formData.dateOfBirth.month}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dateOfBirth: {
                        ...formData.dateOfBirth,
                        month: e.target.value,
                      },
                    })
                  }
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                    <option key={month} value={month}>
                      {new Date(0, month).toLocaleString("en", {
                        month: "short",
                      })}
                    </option>
                  ))}
                </select>
                <select
                  name="birthday_year"
                  id="year"
                  required
                  className="w-1/2 px-3 py-2 border border-gray-700 bg-white text-black rounded-md"
                  value={formData.dateOfBirth.year}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dateOfBirth: {
                        ...formData.dateOfBirth,
                        year: e.target.value,
                      },
                    })
                  }
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
            <div className="w-full flex gap-2 justify-start mb-4">
              <label
                htmlFor="Gender"
                className="w-1/4 justify-start block text-black font-medium mb-0"
              >
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                required
                className="w-1/7 px-3 py-2 border border-gray-700 bg-white text-black rounded-md"
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            {/* Render company information if user.role is employer */}
            <div>
              <h2 className="text-2xl font-bold text-left mb-4">Resume</h2>
              <div className="w-full flex flex-col mb-4">
                <label
                  htmlFor="CompanyName"
                  className="w-full justify-start block text-black font-medium mb-0"
                >
                  Contact Number
                </label>
                <input
                  type="text"
                  className="w-2/3 block bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder={`${userProfile.profile.resume.contactNumber}`}
                  value={formData.profile.resume.contactNumber}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      profile: {
                        ...formData.profile,
                        resume: {
                          ...formData.profile.resume,
                          contactNumber: e.target.value,
                        },
                      },
                    })
                  }
                />
              </div>
              <div className="w-full flex flex-col mb-4">
                <label
                  htmlFor="ContactNumber"
                  className="w-full justify-start block text-black font-medium mb-0"
                >
                  Address
                </label>
                <input
                  type="text"
                  className="w-2/3 block bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder={`${userProfile.profile.resume.address}`}
                  value={formData.profile.resume.address}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      profile: {
                        ...formData.profile,
                        resume: {
                          ...formData.profile.resume,
                          address: e.target.value,
                        },
                      },
                    })
                  }
                />
              </div>
              <div className="w-full flex flex-col mb-4">
                <label
                  htmlFor="website"
                  className="w-full justify-start block text-black font-medium mb-0"
                >
                  About
                </label>
                <input
                  type="text"
                  className="w-2/3 h-40 block bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder={`${userProfile.profile.resume.about}`}
                  value={formData.profile.resume.about}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      profile: {
                        ...formData.profile,
                        resume: {
                          ...formData.profile.resume,
                          about: e.target.value,
                        },
                      },
                    })
                  }
                />
              </div>
              <div className="w-full flex flex-col mb-4">
                <label
                  htmlFor="Address"
                  className="w-full justify-start block text-black font-medium mb-0"
                >
                  Education
                </label>
                <input
                  type="text"
                  className="w-2/3 h-40 block bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder={`${userProfile.profile.resume.education}`}
                  value={formData.profile.resume.education}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      profile: {
                        ...formData.profile,
                        resume: {
                          ...formData.profile.resume,
                          education: e.target.value,
                        },
                      },
                    })
                  }
                />
              </div>
              <div className="w-full flex flex-col mb-4">
                <label
                  htmlFor="Address"
                  className="w-full justify-start block text-black font-medium mb-0"
                >
                  Personal Skills
                </label>
                <input
                  type="text"
                  className="w-2/3 h-40 block bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder={`${userProfile.profile.resume.skills}`}
                  value={formData.profile.resume.skills}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      profile: {
                        ...formData.profile,
                        resume: {
                          ...formData.profile.resume,
                          skills: e.target.value,
                        },
                      },
                    })
                  }
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Link
                to="/profile"
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Cancel changes
              </Link>
              <button
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleSubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
