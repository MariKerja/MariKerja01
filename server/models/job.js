// Initialize Mongoose
const mongoose = require("mongoose");

// Define the schema
const jobSchema = new mongoose.Schema({
  jobname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirement: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["open", "closed", "pending"],
  },
  state: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  startSalary: {
    type: String,
    required: true,
  },
  endSalary: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

// Create the model
const Job = mongoose.model("Job", jobSchema);

// Export the model
module.exports = Job;
