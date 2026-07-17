import Users from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import sendEmail from "../utils/sendEmail.js";
const register = async (req, res) => {
  try {
    const { username, email, password, role, confirmPassword, avatar } =
      req.body;
    // 1. Validate required fields
    if (!username || !email || !password) {
      return res.status(400).json({ message: "Required fields missing" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password do not match" });
    }
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Users.create({
      username,
      email,
      password: hashedPassword,
      role: role || "user",
      avatar,
    });

    const registrationToken = jwt.sign(
      { user: newUser._id, type: "EMAIL_VERIFICATION" }, // Prevents misusing this token for normal auth },
      process.env.JWT_SECRET,
      { expiresIn: "15m" },
    );

    // 5. Omit password from response
    const userObj = newUser.toObject();
    delete userObj.password;

    return res
      .status(201)
      .json({ message: "New User Created", user: userObj, registrationToken });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    if (!email || !password) {
      return res.status(400).json({ message: "Name or email field missing" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Password mismatch" });
    }
    // 5. Omit password from response
    const userObj = user.toObject();
    delete userObj.password;

    const token = jwt.sign(
      { user: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );
    return res
      .status(200)
      .json({ message: "Login Successfully", user: userObj, token });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

const logout = async (req, res) => {
  try {
    return res.status(200).json({ message: "Logout Successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  // 1. Check if user exists in DB
  const user = await Users.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  // 2. Generate a secure random token (e.g., crypto / JWT) with an expiration time
  const resetToken = crypto.randomBytes(32).toString("hex");
  user.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  user.resetPasswordExpires = Date.now() + 3600000; // 1 hour expiration
  await user.save();

  // 3. Send email containing the reset link
  const resetUrl = `http://localhost:5173/reset-password?token=${resetToken}`;
  await sendEmail({
    to: user.email,
    subject: "Password Reset Request",
    html: `<p>Click <a href="${resetUrl}">here</a> to reset your password. This link expires in 1 hour.</p>`,
  });

  res.json({ message: "Reset link sent to your email!" });
};

const resetPassword = async (req, res) => {
  try {
    const { password, confirmPassword } = req.body;
    const token = req.query.token || req.params.token || req.body.token;
    if (!password || !confirmPassword) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password do not match" });
    }
    if (!token) {
      return res.status(400).json({ message: "Reset token is missing" });
    }
    // 2. Hash the incoming plain token
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    // 2. Find the user by token and verify token expiration
    const user = await Users.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() }, // Token must not be expired
    });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid or expired reset token" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Update password and invalidate reset token fields
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    // 5. Save the updated user document
    await user.save();

    return res.status(200).json({ message: "Password reset successful" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

const isAdmin = async (req, res, next) => {
  if (req.user?.role?.toLowerCase() !== "admin") {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};

export { register, login, logout, forgotPassword, resetPassword, isAdmin };
