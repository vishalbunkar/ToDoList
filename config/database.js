const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose.connect("mongodb://localhost:27017/todo-app")
    .then(() => console.log(" DB Connection Successful"))
    .catch((error) => {
      console.error(" DB Connection Failed:", error.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
