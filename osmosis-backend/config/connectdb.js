const mongoose = require("mongoose");

const connectDb = async (MONGO_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "portfolio",
    };

    await mongoose.connect(MONGO_URL, DB_OPTIONS);
    console.log("Database connected successfully..");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
