const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB configuration

const db = process.env.MONGO_URI;

// connect to MongoDB
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const port = process.env.PORT || 8080;

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB database connection established successfully");
});

// use Members Route
const membersRouter = require("./routes/members");
app.use("/members", membersRouter);

// Serve static assets when in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.listen(port, () => console.log(`Server running on port: ${port}`));
