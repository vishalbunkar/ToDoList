// Import the model
const Todo = require("../models/Todo");

// Define route handler
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description },
      { new: true, runValidators: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({
        success: false,
        message: " Todo not found with given ID",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedTodo,
      message: " Todo updated successfully",
    });
  } catch (err) {
    console.error("Error in updateTodo:", err);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};
