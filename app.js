const photoRouter = require("./routes/photoRoutes");
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
mongoose.set("strictQuery", true);

//PART 1
const app = express();
const port = 3000;
app.use(express.json());
//welcome page for api
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Unsplash API!",
  });
});

//connect to my mongo DB
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Connected to my Mongo DB");
  } catch (error) {
    console.log("error", error);
  }
};
connectToMongoDB();

//app listen
app.listen(port, () => {
  console.log(`
    The app is running,
    Listening on PORT: ${port}`);
});

app.use("/api/photos", photoRouter);
