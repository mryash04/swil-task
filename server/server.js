const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const PORT = 8000;

connectDB();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send("This is from home side");
});

app.use("/auth", require("./routes/auth"));
app.use("/user", require("./routes/user"));

app.listen(PORT, () => console.log(`server is listening on port`, PORT));