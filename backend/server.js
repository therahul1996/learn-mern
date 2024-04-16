const express = require("express");
const colors = require("colors");
const { errorHanlder } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const connectdb = require("./config/db");
const port = process.env.PORT || 5000;

connectdb();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/get-goals", require("./routes/goalRoutes"));
app.use(errorHanlder);
app.listen(port, () => console.log(`server started on port ${port}`));
