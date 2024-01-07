const router = require("express").Router();
const User = require("../models/user_model");
const List = require("../models/list_model");

//Create a new task
router.post("/addTask", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const exsistingUser = await User.findOne({ email });
    if (exsistingUser) {
      const list = new List({ title, body, user: exsistingUser });
      await list.save().then(() => res.status(200).json({ list }));
      exsistingUser.list.push(list);
      exsistingUser.save();
    }
  } catch (error) {
    console.log(error);
  }
});

//Update the task
router.put("/updateTask/:id", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const exsistingUser = await User.findOne({ email });
    if (exsistingUser) {
      const list = await List.findByIdAndUpdate(req.params.id, { title, body });
      list.save().then(() => res.status(200).json({ message: "Task Updated" }));
    }
  } catch (error) {
    console.log(error);
  }
});

//Delete the task
router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const { email } = req.body;
    const exsistingUser = await User.findOneAndUpdate(
      { email },
      { $pull: { list: req.params.id } }
    );
    if (exsistingUser) {
      await List.findByIdAndDelete(req.params.id).then(() =>
        res.status(200).json({ message: "Task Deleted" })
      );
    }
  } catch (error) {
    console.log(error);
  }
});

//Get all tasks
router.get("/getTask/:id", async (req, res) => {
  const list = await List.find({ user: req.params.id }).sort({ createdAt: -1 });
  if (list.length !== 0) {
    res.status(200).json({ list: list });
  } else {
    res.status(200).json({ message: "No Tasks" });
  }
});

module.exports = router;
