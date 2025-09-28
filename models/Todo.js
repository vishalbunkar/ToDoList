const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 50,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 200,  // Increased for better usability
      trim: true,
    },
  },
  {
    timestamps: true // Automatically handles createdAt & updatedAt
  }
);

module.exports = mongoose.model("Todo", todoSchema);
