const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");
// want both data to do CRUD operation based on which user is removing

router.post("/addTask", async (req, res) => {
  try {
    const { title, body, id } = req.body;
    const existingUser = await User.findById(id); // find the user by their ID
    if (existingUser) {
      const list = new List({ title, body, user: existingUser });
      await list.save().then(() => res.status(200).json({ list }));
      existingUser.list.push(list);
      existingUser.save();
    }
  } catch (error) {
    console.log(error);
  }
});

//UPDATE
router.put("/updateTask/:id", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const list = await List.findByIdAndUpdate(req.params.id, { title, body });
      list.save().then(() => res.status(201).send("Updated Successfully"));
    }
  } catch (error) {
    console.log(error);
  }
});

//DELETE
router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOneAndUpdate(
      { email },
      { $pull: { list: req.params.id } }
    );
    if (existingUser) {
      const list = await List.findByIdAndDelete(req.params.id, {}).then(() =>
        res.status(201).send("Deleted Successfully")
      );
    }
  } catch (error) {
    console.log(error);
  }
});

//GETTASK
router.get("/getTask/:id", async (req, res) => {
  const list = await List.find({ user: req.params.id }).sort({
    createdAt: "desc",
  });
  // to get what we created latest at the top
  if (list.length !== 0) {
    res.status(200).json({ list });
  } else {
    res.status(200).json({ message: "no task created" });
  }
});
module.exports = router;
