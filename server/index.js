const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes"); // Assuming you have auth routes defined in ./routes/authRoutes
const jobRoutes = require("./routes/jobRoutes"); // Assuming you have job routes defined in ./routes/jobRoutes
const userRoutes = require("./routes/userRoutes"); // Assuming you have user routes defined in ./routes/userRoutes

dotenv.config(); // Load environment variables from .env file
const app = express();

// Database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));
// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with the URL of your frontend application
    credentials: true, // Allow sending cookies and credentials to the server
  })
); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON payloads
app.use(cookieParser()); // Parse cookies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies

// Routes
app.use("/auth", authRoutes); // Mount authentication routes at '/auth'
app.use("/jobs", jobRoutes); // Mount job routes at '/jobs'
app.use("/users", userRoutes); // Mount user routes at '/users'

const port = process.env.PORT || 8000; // Use defined port or default to 8000
app.listen(port, () => console.log(`Server is running on port ${port}`));
