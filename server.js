const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection failed:", error.message);
    });

// Routes
const contactRoutes = require("./routes/contactRoutes");

app.use("/contacts", contactRoutes);

// Home route
app.get("/", (req, res) => {
    res.send("Contact Management System API is running");
});

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});