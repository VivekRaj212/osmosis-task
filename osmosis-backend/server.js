const express = require("express");
require("dotenv").config();
const app = express();
const connectDb= require("./config/connectdb")
const userRouter= require("./routes/userRoutes")
const cors = require("cors");
const port = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017";

//Cors Policy
app.use(cors());

// JSON
app.use(express.json());

app.use("/api/user",userRouter);


app.listen(port, () => {
      //Database Connection
    connectDb(MONGO_URL)
  console.log(`Server running at http://localhost:${port}/ `);
});
          