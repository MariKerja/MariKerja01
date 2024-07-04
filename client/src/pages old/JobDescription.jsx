import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from '../components/TopNav';
import { Sidebar } from '../components/SideBar'; 

export default function JobDescription() {
    const [showSidebar, setShowSidebar] = useState(true);
    const navigate = useNavigate();
    const [data, setData] = useState({
        jobname: "",
        address: "",
        description: "",
        requirment: "",
        status: "",
        state: "",
        district: "",
        startSalary: "",
        endSalary: "",
    });

    useEffect(() => {
        const handleResize = () => {
            // Check screen width and toggle showSidebar accordingly
            if (window.innerWidth <= 718) { // Adjust the breakpoint as needed
                setShowSidebar(false);
            } else {
                setShowSidebar(true);
            }
        };

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Initial check
        handleResize();

        // Cleanup function
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty dependency array to run only once on component mount


    return (
        <div className="flex h-screen bg-white">
            {/* Sidebar */}
            <Sidebar showSidebar={showSidebar} />

            <div className={`flex-1 ${showSidebar ? 'pl-64' : ''}`}>
                {/* Sticky Navigation Bar */}
                <TopNav title="Job 1" href="/activitye" />
                {/* User Information */}
                {/* User Information */}
                <div className="flex-1 p-8 text-left">
                    <div className="mt-10">
                        <div className="w-full flex flex-col mb-4">
                            <label htmlFor="Name" className="w-full justify-start block text-black font-medium mb-0">
                                Company Name
                            </label>
                            <a className="w-1/2 block  bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3">
               pencari berkat
               {/* {job?.company?.name} */}
              </a>
                        </div>
                        <div className="w-full flex flex-col mb-4">
                            <label htmlFor="Address" className="w-full justify-start block text-black font-medium mb-0">
                                Job Description
                            </label>
                             <a className="w-2/3 h-40 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3 duration-200 ease-in-out content-start text-left">
                                Muniir Ahmadi
                 {/* <div className='my-6'>
            {selected === "0" ? (
              <>
                <p className='text-xl font-semibold'>Job Decsription</p>

                <span className='text-base'>{job?.detail[0]?.desc}</span>

                {job?.detail[0]?.requirement && (
                  <>
                    <p className='text-xl font-semibold mt-8'>Requirement</p>
                    <span className='text-base'>
                      {job?.detail[0]?.requirement}
                    </span>
                  </>
                )}
              </>
            ) : (
              <>
                <div className='mb-6 flex flex-col'>
                  <p className='text-xl text-blue-600 font-semibold'>
                    {job?.company?.name}
                  </p>
                  <span className='text-base'>{job?.company?.location}</span>
                  <span className='text-sm'>{job?.company?.email}</span>
                </div>

                <p className='text-xl font-semibold'>About Company</p>
                <span>{job?.company?.about}</span>
              </>
            )}
          </div> */}
                            </a>
                        </div>
                        <div className="w-full flex flex-col mb-4">
                            <label htmlFor="requirement" className="w-full justify-start block text-black font-medium mb-0">
                                Requirement
                            </label>
                            <a className="w-2/3 h-40 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3 duration-200 ease-in-out content-start text-left">
                                Semangat jiwa dan raga
                {/* <div className='my-6'>
            {selected === "0" ? (
              <>
                <p className='text-xl font-semibold'>Job Decsription</p>

                <span className='text-base'>{job?.detail[0]?.desc}</span>

                {job?.detail[0]?.requirement && (
                  <>
                    <p className='text-xl font-semibold mt-8'>Requirement</p>
                    <span className='text-base'>
                      {job?.detail[0]?.requirement}
                    </span>
                  </>
                )}
              </>
            ) : (
              <>
                <div className='mb-6 flex flex-col'>
                  <p className='text-xl text-blue-600 font-semibold'>
                    {job?.company?.name}
                  </p>
                  <span className='text-base'>{job?.company?.location}</span>
                  <span className='text-sm'>{job?.company?.email}</span>
                </div>

                <p className='text-xl font-semibold'>About Company</p>
                <span>{job?.company?.about}</span>
              </>
            )}
          </div> */}
                            </a>
                        </div>
                        <div className="w-full flex flex-col mb-4">
                            <label htmlFor="Address" className="w-full justify-start block text-black font-medium mb-0">
                                Employment Status
                            </label>

                             <a className="w-1/3  block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3 duration-200 ease-in-out content-start text-left">
                                Part
                {/* {job?.jobType} */}
                            </a>
                        </div>
                        <div className="flex gap-2">
                            <div className="mb-4 w-1/4">
                                <label htmlFor="Address" className="flex justify-start text-black font-medium mb-0">
                                    State
                                </label>
                                <a className="w-2/3  block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3 duration-200 ease-in-out content-start text-left">
                                Negeri Sembilan    
                                </a>                          
                            </div>
                            <div className="mb-4 w-1/4">
                                <label htmlFor="Address" className="flex justify-start text-black font-medium mb-0">
                                    District
                                </label>
                                <a className="w-2/3  block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3 duration-200 ease-in-out content-start text-left">
                                Nilai    
                                </a>   
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Address" className="justify-start block text-black font-medium mb-0">
                                Salary
                    {/* {job?.salary} */}
                            </label>
                            <div className="flex gap-2">
                                <div className="mb-4 w-1/4">
                                <a className="w-2/3  block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3 duration-200 ease-in-out content-start text-left">
                                RM 1000 
                                </a>
                                </div>
                                <div className="mb-4 w-1/4">
                                <a className="w-2/3  block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3 duration-200 ease-in-out content-start text-left">
                                RM 5000  
                                </a>
                                </div>
                            </div>
                            <div className="w-full flex flex-col mb-4">
                            <label htmlFor="requirement" className="w-full justify-start block text-black font-medium mb-0">
                                Address
                            </label>
                            <a className="w-2/3 h-40 block bg-white rounded border border-0.25 border-gray-400 text-black py-1 px-3 duration-200 ease-in-out content-start text-left">
                                Semangat jiwa dan raga
                            </a>
                        </div>
                        </div>
                        <div className="flex justify-start gap-4">
                            <button
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                            >
                                Apply
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
