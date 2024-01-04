const router = require("express").Router();
const User = require("../models/user_model");

//SIGNIN
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = new User({
      email,
      username,
      password,
    });
    await user.save().then(() => {
      res.status(200).json({ user: user });
    });
  } catch (error) {
    res.status(400).json({ message: "User Already Exsits" });
  }
});

module.exports = router;
