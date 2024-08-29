const express = require("express");
const cors = require("cors");
const path = require("path");

const PORT = 3003

const app = express();
app.use(express.json());

// Enabling CORS
app.use(cors());    

// Serve static files
app.use(express.static(path.join(__dirname, "dist")));

// Catch-all route to serve the frontend application
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
  });