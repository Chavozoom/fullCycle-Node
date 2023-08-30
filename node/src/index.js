const express = require("express");
const router = require("./routes/route");

const app = express();
const port = 3000;
app.use(express.json());
app.use("/people", router);

app.use(express.json());
app.listen(port, console.log(`App Node is running at port: ${port}`));