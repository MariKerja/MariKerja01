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
    enum: ["part-time", "full-time"],
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
  applicants: [
    {
      applicantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
      },
      status: {
        type: String,
        enum: ["applied", "rejected", "hired"],
        default: "applied",
      },
    },
  ],
});

// Create the model
const Job = mongoose.model("jobs", jobSchema);

// Export the model
module.exports = Job;
