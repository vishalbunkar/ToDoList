// Import the model
const Todo = require("../models/Todo");

// GET: Fetch all todos
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({
      success: true,
      data: todos,
      message: "All Todos fetched successfully",
    });
  } catch (err) {
    console.error("Error fetching todos:", err);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};

// GET: Fetch a single todo by ID
exports.getTodoById = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: " No Todo found with the given ID",
      });
    }

    res.status(200).json({
      success: true,
      data: todo,
      message: " Todo fetched successfully",
    });
  } catch (err) {
    console.error(" Error fetching todo by ID:", err);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};
