const express = require("express");
const app = express();
require("./configs/dbConnection.js");
const auth = require("./routes/auth_routes")


app.use("/api/v1", auth);

app.get("/", (req, res) => {
    console.log("Hello");
})

app.listen(1000, () => {
    console.log("🚀💀 Server is started!");
});