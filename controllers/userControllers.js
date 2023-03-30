const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const registration = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill up all the field ");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("Please give unique Email");
  }
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  }else{
    res.status(401)
    throw new Error("Failed to create user")
  }
});
module.exports = { registration };
