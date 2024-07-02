const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

// Test endpoint
const test = (req, res) => {
  res.json("test is working");
};

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
    // Check if name was entered
    if (!firstname || !lastname) {
      return res.json({
        error: "First name and last name are required",
      });
    }
    // Check if password is valid
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and it must be at least 6 characters",
      });
    }

    // Check if email is valid
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email already exists",
      });
    }

    if (!email) {
      return res.status(400).json({ msg: "Email is required" });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user in database
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      dateOfBirth: { day, month, year },
      gender,
      role,
    });

    // Initialize the profile based on the user's role
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

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

// Login endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "Email and Password does not match",
      });
    }

    // Check if passwords match
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        // use the user's email, id, name, and role to create a token
        { email: user.email, id: user._id, name: user.name, role: user.role },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    }
    if (!match) {
      res.json({
        error: "User and Password does not match",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getProfile = (req, res) => {
  // Get token from cookies
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, decoded) => {
      if (err) {
        throw err;
      }
      // Get user's email and role from the token for role-based access
      const { email, role, id } = decoded;
      res.json({ email, role, id });
    });
  } else {
    res.json(null);
  }
};

// Export functions
module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
};
