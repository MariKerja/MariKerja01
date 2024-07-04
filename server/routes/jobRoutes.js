import express from "express";
const router = express.Router();
import cors from "cors";
import jobController from "../controllers/jobController";

// CORS middleware setup
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5174", // Replace with your actual frontend URL
  })
);

// Routes
router.get("/jobs", jobController.getAllJobs); // GET all jobs
router.get("/jobs/:id", jobController.getJobById); // GET a single job by ID
router.post("/jobs", jobController.postJob); // POST a new job
router.delete("/jobs/:id", jobController.deleteJobById); // DELETE a job by ID

export default router;
