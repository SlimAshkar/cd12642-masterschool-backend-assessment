const express = require("express");
const photoRouter = express.Router();
const {
  getPhotos,
  getPhotosByID,
  fetchUserPhotos,
} = require("../controllers/photoController");
photoRouter.get("/", getPhotos);
photoRouter.get("/:id", getPhotosByID);
photoRouter.get("/users/:username", fetchUserPhotos);
module.exports = photoRouter;
