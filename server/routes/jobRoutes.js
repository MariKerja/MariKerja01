const express = require("express");
const router = express.Router();
const jobController = require("../controller/jobController");

// Routes (full path is /jobs/...) -- defined in index.js
router.get("/", jobController.getAllJobs); // GET all jobs, full path is /jobs
router.get("/:id", jobController.getJobByJobId); // GET a single job by ID, full path is /jobs/:id
router.post("/", jobController.postJob); // POST a new job, full path is /jobs
router.delete("/:id", jobController.deleteJobById); // DELETE a job by ID, full path is /jobs/:id
router.get("/test", jobController.testConnectivityJob); // Test connectivity, full path is /jobs/test
router.post("/:id/apply", jobController.applyJob); // Apply for a job, full path is /jobs/apply/:jobId
router.patch(
  "/:jobId/applicants/:applicantId",
  jobController.updateApplicantStatus
); // Update applicant status, full path is /jobs/:jobId/applicants/:applicantId

// Export router
module.exports = router;
