const express = require("express");
const app = express();
require("./configs/dbConnection.js");
const auth = require("./routes/auth_routes")

app.get("/", (req, res) => {
    console.log("Hello");
})

app.use(express.json());
app.use("/api/v1", auth);

app.listen(1000, () => {
    console.log("🚀💀 Server is started!");
});