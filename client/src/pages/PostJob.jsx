import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TopNav from '../components/TopNav';
import { Sidebar } from '../components/SideBar'; 

export default function PostJob() {
    const [showSidebar, setShowSidebar] = useState(true);
    const navigate = useNavigate();
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
        userId: ""
    });
    // const getProfile = (req, res) => {
    //     // Get token from cookies
    //     const { token } = req.cookies;
    //     if (token) {
    //       jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
    //         if (err) throw err;
    //         res.json(user._id);
    //       });
    //     } else {
    //       res.json(null);
    //     }
    //   };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 718) {
                setShowSidebar(false);
            } else {
                setShowSidebar(true);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const getUserIdFromToken = (token) => {
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                return decoded.id; // Assuming the user ID is stored in the 'id' field of the JWT payload
            } catch (error) {
                console.error('Error decoding token:', error);
                return null;
            }
        };

        getUserIdFromToken();
    }, []);

    const handleSubmit = async () => {
        try {
            await axios.post('/postjob', data);
            navigate('/activitye');
        } catch (error) {
            console.error('Error posting job:', error);
        }
    };

    return (
        <div className="flex h-screen bg-white">
            <Sidebar showSidebar={showSidebar} />
            <div className={`flex-1 ${showSidebar ? 'pl-64' : ''}`}>
                <TopNav title="Post a job" href="/activitye" />
                <div className="flex-1 p-8 text-left">
                    <div className="mt-10">
                        {/* Form fields... */}
                        <div className="w-full flex flex-col mb-4">
                            <label htmlFor="Name" className="w-full justify-start block text-black font-medium mb-0">
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
                            <label htmlFor="Address" className="w-full justify-start block text-black font-medium mb-0">
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
                            <label htmlFor="Address" className="w-full justify-start block text-black font-medium mb-0">
                                Job Description
                            </label>
                            <input
                                type="text"
                                className="w-2/3 h-40 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3 duration-200 ease-in-out content-start text-left"
                                placeholder="Description"
                                value={data.description}
                                onChange={(e) => setData({ ...data, description: e.target.value })}
                                style={{ textAlign: "start" }}
                            />
                        </div>
                        <div className="w-full flex flex-col mb-4">
                            <label htmlFor="requirement" className="w-full justify-start block text-black font-medium mb-0">
                                Requirement
                            </label>
                            <input
                                type="text"
                                className="w-2/3 h-40 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3 duration-200 ease-in-out content-start text-left"
                                placeholder="Requirement"
                                value={data.requirement}
                                onChange={(e) => setData({ ...data, requirement: e.target.value })}
                                style={{ textAlign: "start" }}
                            />
                        </div>
                        <div className="w-full flex flex-col mb-4">
                            <label htmlFor="Address" className="w-full justify-start block text-black font-medium mb-0">
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
                                <label htmlFor="Address" className="flex justify-start text-black font-medium mb-0">
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
                                {/* <select
                                    name="state"
                                    id="state"
                                    required
                                    value={data.state}
                                    onChange={(e) => setData({ ...data, state: e.target.value })}
                                    className=" w-2/3 px-3 py-2 border border-gray-700 bg-white text-black rounded-md"
                                >
                                    <option value="Part time">Negeri Sembilan</option>
                                    <option value="Full time">Melaka</option>
                                </select> */}
                            </div>
                            <div className="mb-4 w-1/4">
                                <label htmlFor="Address" className="flex justify-start text-black font-medium mb-0">
                                    District
                                </label>
                                <input
                                        type="text"
                                        className="w-2/3 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3 duration-200 ease-in-out content-start text-left"
                                        placeholder="District"
                                        value={data.district}
                                        onChange={(e) => setData({ ...data, district: e.target.value })}
                                        style={{ textAlign: "start" }}
                                />
                                {/* <select
                                    name="district"
                                    id="district"
                                    required
                                    value={data.district}
                                    onChange={(e) => setData({ ...data, district: e.target.value })}
                                    className=" w-2/3 px-3 py-2 border border-gray-700 bg-white text-black rounded-md"
                                >
                                    <option value="N9">Nilai</option>
                                    <option value="Melaka">Seremban</option>
                                </select> */}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Address" className="justify-start block text-black font-medium mb-0">
                                Salary
                            </label>
                            <div className="flex gap-2">
                                <div className="mb-4 w-1/4">
                                    <input
                                        type="text"
                                        className="w-2/3 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3 duration-200 ease-in-out content-start text-left"
                                        placeholder="Start"
                                        value={data.startSalary}
                                        onChange={(e) => setData({ ...data, startSalary: e.target.value })}
                                        style={{ textAlign: "start" }}
                                    />
                                </div>
                                <div className="mb-4 w-1/4">
                                    <input
                                        type="text"
                                        className="w-2/3 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3 duration-200 ease-in-out content-start text-left"
                                        placeholder="End"
                                        value={data.endSalary}
                                        onChange={(e) => setData({ ...data, endSalary: e.target.value })}
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
                                onClick={() => navigate('/activitye')}
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
