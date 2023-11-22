const connectToMongo = require("./Database/db");
const express = require("express");
const app = express();
connectToMongo();
const port = 5000 || process.env.PORT;
var cors = require("cors");

app.use(cors());
app.use(express.json()); //to convert request data to json

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

// For custom URL handling
const baseUrl = "https://mern-college-app.onrender.com"; // Replace with your Render URL

app.use((req, res, next) => {
  req.baseUrl = baseUrl;
  next();
});

// Additional middleware or routing logic to handle the custom URL
// For example:
app.use(`${baseUrl}/api/student/auth`, require("./routes/Student Api/studentCredential"));
// Continue with other routes similarly

});



