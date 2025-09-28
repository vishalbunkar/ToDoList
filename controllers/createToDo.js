// Import the model
const Todo = require("../models/Todo");

// Define route handler
exports.createTodo = async (req, res) => {
  try {
    // Extract title and description from request body
    const { title, description } = req.body;

    // Validation (optional but good)
    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required.",
      });
    }

    // Create a new Todo and insert into DB
    const response = await Todo.create({ title, description });

    // Send a JSON response with a success flag
    res.status(201).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
    });
  } catch (err) {
    console.error("Error in createTodo:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};
