const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    const conn = await mongoose.connect("mongodb+srv://PewPew:pewpew1234@todocluster.emvhpf3.mongodb.net/");
    console.log("💻 DB Synced!");
  } catch (error) {
    console.log("DB CONNECT ERROR: ", error.message);
    process.exit(1);
  }
};

conn();
