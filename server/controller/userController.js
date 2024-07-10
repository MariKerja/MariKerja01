const User = require("../models/user");

// Fetch user by id
const fetchUserProfile = async ({ params: { id } }, res) => {
  try {
    const user = await User.findById(id); // Fetch job from MongoDB using the _id
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user); // Send JSON response with the job object
  } catch (error) {
    console.error("Error fetching user:", error);
    res
      .status(500)
      .json({ message: "Error fetching user", error: error.message });
  }
};

// Update user by id
const updateUserProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstname, lastname, gender, dateOfBirth, role, email, profile } =
      req.body;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.firstname = firstname || user.firstname;
    user.lastname = lastname || user.lastname;
    user.gender = gender || user.gender;
    user.dateOfBirth = {
      day: dateOfBirth?.day || user.dateOfBirth.day,
      month: dateOfBirth?.month || user.dateOfBirth.month,
      year: dateOfBirth?.year || user.dateOfBirth.year,
    };
    user.role = role || user.role;
    user.email = email || user.email;

    // Update profile based on role, means it must be defined in the request body, otherwise it will be ignored
    if (role === "job-seeker" && profile?.resume) {
      user.profile.resume = {
        skills: profile.resume.skills || user.profile.resume.skills, // Or statement to keep existing value if not provided
        contactNumber:
          profile.resume.contactNumber || user.profile.resume.contactNumber,
        address: profile.resume.address || user.profile.resume.address,
        about: profile.resume.about || user.profile.resume.about,
        education: profile.resume.education || user.profile.resume.education,
      };
    } else if (role === "employer" && profile?.company) {
      user.profile.company = {
        name: profile.company.name || user.profile.company.name,
        contactNumber:
          profile.company.contactNumber || user.profile.company.contactNumber,
        website: profile.company.website || user.profile.company.website,
        address: profile.company.address || user.profile.company.address,
        about: profile.company.about || user.profile.company.about,
      };
      console.log("Debugging user profile update for employer:", {
        incomingProfile: profile.company,
        existingProfile: user.profile.company,
      });
    }
    console.log("Sent data:", req.body);
    await user.save();
    console.log("user:", user);

    res.status(200).json(user);
  } catch (error) {
    console.error("Error updating user:", error);
    res
      .status(500)
      .json({ message: "Error updating user", error: error.message });
  }
};

module.exports = { fetchUserProfile, updateUserProfile };
