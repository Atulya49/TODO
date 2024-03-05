const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
//SIGN UP
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashpassword = bcrypt.hashSync(password, 10);

    const user = new User({ email, username, password: hashpassword });
    await user
      .save()
      .then(() =>
        res.status(200).json({ message: "user signedup successfully" })
      );
  } catch (error) {
    res.status(200).json({ message: "user already exist" });
  }
});

//SIGN IN
router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(200).json({ message: "Please Sign Up First" });
    }
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return res.status(200).json({ message: "Wrong Password!" });
    }
    // give all thing apart from password
    const { password, ...others } = user._doc;
    res.status(200).json({ user: others });
  } catch (error) {
    res.status(200).json({ message: "user doesnt exist" });
  }
});

module.exports = router;
