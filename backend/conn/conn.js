const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://atulyagupta49:atulya@cluster0.uuzjm9q.mongodb.net/"
      )
      .then(() => {
        console.log("connected");
      });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
conn();
module.exports = conn;
