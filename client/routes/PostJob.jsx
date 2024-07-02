import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext"; // Assuming the correct path to userContext
import axios from "axios";
import { toast } from "react-hot-toast"; // Import toast from react-toastify

export default function PostJob() {
  const navigate = useNavigate();
  const { id } = useContext(UserContext);
  const [data, setData] = useState({
    jobname: "",
    address: "",
    description: "",
    requirement: "",
    status: "Part time",
    state: "",
    district: "",
    startSalary: "",
    endSalary: "",
    userId: id,
  });

  const handleSubmit = async () => {
    try {
      await axios.post("/postjob", data);
      toast.success("Job posted successfully!"); // Display success toast notification
      navigate("/activity");
    } catch (error) {
      console.error("Error posting job:", error);
      toast.error("Failed to post the job."); // Display error toast notification
    }
  };

  return (
    <div className="flex h-screen bg-white">
      <div>
        <div className="flex-1 p-8 text-left">
          <div className="mt-10">
            {/* Form fields... */}
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="Name"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Job Name
              </label>
              <input
                type="text"
                className="w-2/3 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3 duration-200 ease-in-out content-start text-left"
                placeholder="Example"
                value={data.jobname}
                onChange={(e) => setData({ ...data, jobname: e.target.value })}
                style={{ textAlign: "start" }}
              />
            </div>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="Address"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Address
              </label>
              <input
                type="text"
                className="w-2/3 h-40 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3 duration-200 ease-in-out content-start text-left"
                placeholder="Address"
                value={data.address}
                onChange={(e) => setData({ ...data, address: e.target.value })}
                style={{ textAlign: "start" }}
              />
            </div>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="Address"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Job Description
              </label>
              <input
                type="text"
                className="w-2/3 h-40 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3 duration-200 ease-in-out content-start text-left"
                placeholder="Description"
                value={data.description}
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
                style={{ textAlign: "start" }}
              />
            </div>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="requirement"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Requirement
              </label>
              <input
                type="text"
                className="w-2/3 h-40 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3 duration-200 ease-in-out content-start text-left"
                placeholder="Requirement"
                value={data.requirement}
                onChange={(e) =>
                  setData({ ...data, requirement: e.target.value })
                }
                style={{ textAlign: "start" }}
              />
            </div>
            <div className="w-full flex flex-col mb-4">
              <label
                htmlFor="Address"
                className="w-full justify-start block text-black font-medium mb-0"
              >
                Employment Status
              </label>
              <select
                name="status"
                id="status"
                required
                value={data.status}
                onChange={(e) => setData({ ...data, status: e.target.value })}
                className="w-1/4 px-3 py-2 border border-gray-700 bg-white text-black rounded-md"
              >
                <option value="Part time">Part time</option>
                <option value="Full time">Full time</option>
              </select>
            </div>
            <div className="flex gap-2">
              <div className="mb-4 w-1/4">
                <label
                  htmlFor="Address"
                  className="flex justify-start text-black font-medium mb-0"
                >
                  State
                </label>
                <input
                  type="text"
                  className="w-2/3 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3 duration-200 ease-in-out content-start text-left"
                  placeholder="District"
                  value={data.state}
                  onChange={(e) => setData({ ...data, state: e.target.value })}
                  style={{ textAlign: "start" }}
                />
              </div>
              <div className="mb-4 w-1/4">
                <label
                  htmlFor="Address"
                  className="flex justify-start text-black font-medium mb-0"
                >
                  District
                </label>
                <input
                  type="text"
                  className="w-2/3 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3 duration-200 ease-in-out content-start text-left"
                  placeholder="District"
                  value={data.district}
                  onChange={(e) =>
                    setData({ ...data, district: e.target.value })
                  }
                  style={{ textAlign: "start" }}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="Address"
                className="justify-start block text-black font-medium mb-0"
              >
                Salary
              </label>
              <div className="flex gap-2">
                <div className="mb-4 w-1/4">
                  <input
                    type="text"
                    className="w-2/3 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3 duration-200 ease-in-out content-start text-left"
                    placeholder="Start"
                    value={data.startSalary}
                    onChange={(e) =>
                      setData({ ...data, startSalary: e.target.value })
                    }
                    style={{ textAlign: "start" }}
                  />
                </div>
                <div className="mb-4 w-1/4">
                  <input
                    type="text"
                    className="w-2/3 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3 duration-200 ease-in-out content-start text-left"
                    placeholder="End"
                    value={data.endSalary}
                    onChange={(e) =>
                      setData({ ...data, endSalary: e.target.value })
                    }
                    style={{ textAlign: "start" }}
                  />
                </div>
              </div>
            </div>
            {/* Other form fields... */}
            <div className="flex justify-start gap-4">
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleSubmit}
              >
                Post the job
              </button>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => navigate("/activity")}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
