const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sample projects data
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My personal portfolio"
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "Online shopping system"
  }
];

// API route
app.get("/api/projects", (req, res) => {
  res.json(projects);
});
// Test route
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});