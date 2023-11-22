const express = require("express");
const app = express();
const cors = require("cors");
const { connectToMongo } = require("./Database/db");

const port = process.env.PORT || 5000;

// Connect to MongoDB
connectToMongo();

// Define the frontend URL
const allowedOrigin = "https://mern-college-app.onrender.com";

// CORS setup with specific origin allowed
app.use(
  cors({
    origin: allowedOrigin,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(express.json());

// Import and use your APIs and routes
app.use("/api/student/auth", require("./routes/Student Api/studentCredential"));
app.use("/api/faculty/auth", require("./routes/Faculty Api/facultyCredential"));
// ... (other routes)

// Additional routes
app.use("/api/timetable", require("./routes/timetable"));
app.use("/api/material", require("./routes/material"));
app.use("/api/notice", require("./routes/notice"));
app.use("/api/subject", require("./routes/subject"));
app.use("/api/marks", require("./routes/marks"));
app.use("/api/branch", require("./routes/branch"));

// Define root route handler
app.get('/', (req, res) => {
  res.send('Welcome to the backend server');
  // Or handle the request accordingly
});

app.listen(port, () => {
  console.log(`Server Listening On http://localhost:${port}`);
});
