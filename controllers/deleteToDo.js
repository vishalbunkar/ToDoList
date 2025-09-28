// Import the model
const Todo = require("../models/Todo");

// Define route handler
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if Todo exists before deleting
    const todo = await Todo.findByIdAndDelete(id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
    });
  } catch (err) {
    console.error(" Error deleting todo:", err);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};
