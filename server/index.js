const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");
const jwt = require('jsonwebtoken');
const { use } = require("./routes/authRoutes");
const app = express();

//database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database not connected", err));

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use("/", require("./routes/authRoutes"));


const Job = mongoose.model('Job', new mongoose.Schema({
  jobname: String,
  address: String,
  description: String,
  requirement: String,
  status: String,
  state: String,
  district: String,
  startSalary: String,
  endSalary: String,
  userId: String
}));
// app.get('/api/getUserIdFromToken', (req, res) => {
//   // Get token from cookies
//   const { token } = req.cookies;
//   if (token) {
//     jwt.verify(token, process.env.JWT_SECRET, {}, (err, decoded) => {
//       if (err) throw err;
//       // Get user's email, role, and user id from the token for role-based access
//       const { _id } = decoded;
//       res.json({ _id, });
//     });
//   } else {
//     res.json(null);
//   }
// });


// Fetch all jobs
app.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.find(); // Fetch all jobs from MongoDB
    res.status(200).json(jobs); // Send JSON response with jobs array
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ message: "Error fetching jobs", error: error.message });
  }
});
app.post('/postjob', async (req, res) => {
  const job = new Job(req.body);
  try {
    await job.save();
    res.status(201).send(job);
  } catch (error) {
    res.status(400).send(error);
  }
});

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
