const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

// Register endpoint
const registerUser = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      password,
      dateOfBirth: { day, month, year },
      gender,
      role,
    } = req.body;

    // Validation
    if (!firstname || !lastname) {
      return res
        .status(400)
        .json({ error: "First name and last name are required" });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({
        error: "Password is required and must be at least 6 characters",
      });
    }

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Check if email already exists
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      dateOfBirth: { day, month, year },
      gender,
      role,
    });

    // Initialize profile based on role
    if (role === "job-seeker") {
      user.profile = {
        resume: {
          skills: [],
          contactNumber: "",
          address: "",
        },
      };
    } else if (role === "employer") {
      user.profile = {
        company: {
          name: "",
          description: "",
          address: "",
          requirements: [],
          aboutCompany: "",
        },
      };
    }

    // Return user data
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Login endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Email and Password do not match" });
    }

    // Compare passwords
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(400).json({ error: "Email and Password do not match" });
    }

    // Generate JWT token
    jwt.sign(
      { email: user.email, id: user._id, name: user.name, role: user.role },
      process.env.JWT_SECRET,
      {},
      (err, token) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: "Failed to create token" });
        }
        // Set token in cookie and respond with user data
        res.cookie("token", token, { httpOnly: true }).json(user);
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get Profile endpoint
const getProfile = (req, res) => {
  // Get token from cookies
  const token = req.cookies.token;
  if (!token) {
    return res.json(null);
  }

  // Verify token and extract user information
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error(err);
      return res.status(401).json({ error: "Unauthorized" });
    }
    const { email, role, id } = decoded;
    res.json({ email, role, id });
  });
};

// Test connectivity endpoint
function testConnectivityAuth(req, res) {
  res.json({ message: "Auth controller is connected" });
}

// Export functions
module.exports = {
  registerUser,
  loginUser,
  getProfile,
  testConnectivityAuth,
};
