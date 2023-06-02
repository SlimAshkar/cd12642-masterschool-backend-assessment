const express = require("express");
const photoRouter = express.Router();
const {
  getAllPhotos,
  getPhotosByID,
} = require("../controllers/photoController");
photoRouter.get("/", getAllPhotos);
photoRouter.get("/:id", getPhotosByID);
module.exports = photoRouter;
