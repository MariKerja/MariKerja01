const Job = require("../models/job"); // Assuming your job model is defined in a file named 'job.js' in the 'models' directory

// Fetch all jobs
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find(); // Fetch all jobs from MongoDB
    res.status(200).json(jobs); // Send JSON response with jobs array
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res
      .status(500)
      .json({ message: "Error fetching jobs", error: error.message });
  }
};

// Fetch a single job by _id
const getJobById = async (req, res) => {
  const { id } = req.params;
  try {
    const job = await Job.findById(id); // Fetch job from MongoDB using the _id
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job); // Send JSON response with the job object
  } catch (error) {
    console.error("Error fetching job:", error);
    res
      .status(500)
      .json({ message: "Error fetching job", error: error.message });
  }
};

// Create a new job
const postJob = async (req, res) => {
  const job = new Job(req.body);
  try {
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating job", error: error.message });
  }
};

// Delete a job by ID
const deleteJobById = async (req, res) => {
  const jobId = req.params.id;
  try {
    const result = await Job.findByIdAndDelete(jobId);
    if (result) {
      res.status(200).json({ message: "Job deleted successfully" });
    } else {
      res.status(404).json({ message: "Job not found" });
    }
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Test connectivity endpoint
function testConnectivityJob(req, res) {
  res.json({ message: "Job controller is connected" });
}

module.exports = {
  getAllJobs,
  getJobById,
  postJob,
  deleteJobById,
  testConnectivityJob,
};
