const photoRouter = require("./routes/photoRoutes");
const express = require("express");
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

//app listen
app.listen(port, () => {
  console.log(`
    The app is running,
    Listening on PORT: ${port}`);
});

app.use("/api/photos", photoRouter);
