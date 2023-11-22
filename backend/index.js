const connectToMongo = require("./Database/db");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

connectToMongo();

var cors = require("cors");

// Define the frontend URL
const allowedOrigin = "https://mern-college-app.onrender.com";

// CORS setup with specific origin allowed
app.use(
  cors({
    origin: allowedOrigin,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Enable credentials such as cookies, authorization headers, etc.
  })
);

app.use(express.json());

// Credential Apis
app.use("/api/student/auth", require("./routes/Student Api/studentCredential"));
app.use("/api/faculty/auth", require("./routes/Faculty Api/facultyCredential"));
app.use("/api/admin/auth", require("./routes/Admin Api/adminCredential"));
// Details Apis
app.use("/api/student/details", require("./routes/Student Api/studentDetails"));
app.use("/api/faculty/details", require("./routes/Faculty Api/facultyDetails"));
app.use("/api/admin/details", require("./routes/Admin Api/adminDetails"));
// Other Apis
app.use("/api/timetable", require("./routes/timetable"));
app.use("/api/material", require("./routes/material"));
app.use("/api/notice", require("./routes/notice"));
app.use("/api/subject", require("./routes/subject"));
app.use("/api/marks", require("./routes/marks"));
app.use("/api/branch", require("./routes/branch"));

app.listen(port, () => {
  console.log(`Server Listening On http://localhost:${port}`);
});
