const express = require("express");
const app = express();
require("./configs/dbConnection.js");
const auth = require("./routes/auth_routes.js");
const list = require("./routes/list_routs.js");

app.get("/", (req, res) => {
  console.log("Hello");
});

app.use(express.json());
app.use("/api/v1", auth);
app.use("/api/v2", list);

app.listen(1000, () => {
  console.log("🚀💀 Server is started!");
});
