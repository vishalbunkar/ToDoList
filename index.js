const express = require("express");
const dbConnect = require("./config/database");
const todoRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = 3000; 

// Connect to MongoDB
dbConnect();

// Middleware to parse JSON request body
app.use(express.json());

// Routes
app.use("/api/v1", todoRoutes);

// Default route
app.get("/", (req, res) => {
  res.send(`<h1>This is HOMEPAGE.... </h1>`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started successfully at http://localhost:${PORT}`);
});
