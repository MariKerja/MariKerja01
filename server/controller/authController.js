const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

// Register endpoint, called by Register.jsx to create a new user
const registerUser = async (req, res) => {
  try {
    // Destructure user data from request body sent from Register.jsx
    // so that it can be referred to directly by variable name
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
    // Check if first name and last name are provided
    if (!firstname || !lastname) {
      return res
        .status(400)
        .json({ error: "First name and last name are required" });
    }
    // Check if password is provided and is at least 6 characters long
    if (!password || password.length < 6) {
      return res.status(400).json({
        error: "Password is required and must be at least 6 characters",
      });
    }
    // Check if email is provided
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

// Login endpoint, called by Login.jsx to authenticate user, set token in cookie, and respond with user data
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
        // httpOnly: true makes sure that the cookie is only accessible by the server
        res.cookie("token", token, { httpOnly: true }).json(user);
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get Profile endpoint, called by UserContext.jsx to get user information
const getProfile = (req, res) => {
  const token = req.cookies.token; // Retrieve token from cookie using req.cookies.token
  if (!token) {
    return res.json(null); // If token is not found, respond with null, indicating that user is not logged in
  }

  // Verify token and extract user information
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error(err);
      return res.status(401).json({ error: "Unauthorized" });
    }
    const { email, role, id } = decoded;
    // respond with user information: email, role, and id
    res.json({ email, role, id });
  });
};

// Test connectivity endpoint
function testConnectivityAuth(req, res) {
  res.json({ message: "Auth controller is connected" });
}

const logoutUser = (req, res) => {
  // Clear the token cookie
  res.clearCookie("token", { httpOnly: true });
  // Respond to the client that logout was successful
  res.json({ message: "Logged out successfully" });
};

// Export functions
module.exports = {
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
  testConnectivityAuth,
};
