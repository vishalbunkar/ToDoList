const express = require("express");
const router = express.Router();

// Import controllers
const { createTodo } = require("../controllers/createTodo");
const { getTodos, getTodoById } = require("../controllers/getToDo");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");

// Define API routes
router.post("/createTodo", createTodo);         // Create
router.get("/getTodos", getTodos);              // Read all
router.get("/getTodos/:id", getTodoById);       // Read one
router.put("/updateTodo/:id", updateTodo);      // Update
router.delete("/deleteTodo/:id", deleteTodo);   // Delete

module.exports = router;
