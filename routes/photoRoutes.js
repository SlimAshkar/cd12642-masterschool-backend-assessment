const express = require("express");
const photoRouter = express.Router();
const {
  getAllPhotos,
  getPhotosByID,
  fetchUserPhotos,
} = require("../controllers/photoController");
photoRouter.get("/", getAllPhotos);
photoRouter.get("/:id", getPhotosByID);
photoRouter.get("/users/:username", fetchUserPhotos);
module.exports = photoRouter;
