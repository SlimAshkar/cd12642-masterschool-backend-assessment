//Require axios to make API calls
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

//api URL for unsplash
const PhotoUrl = "https://api.unsplash.com/photos/";
const apiKey = process.env.ACCESS_KEY;
const options = {
  headers: {
    Authorization: `Client-ID ${apiKey}`,
  },
};

//get all of the photos
const getAllPhotos = async (req, res) => {
  try {
    const response = await axios.get(PhotoUrl, options);

    return res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Server error. Please try again later.",
    });
  }
};
//get photo by ids
const getPhotosByID = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(`PhotoUrl${id}`, options);
    return res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Server error. Please try again later.",
    });
  }
};

// fetch photos from Unsplash user
const fetchUserPhotos = async (req, res) => {
  const { user } = req.params;
  try {
    const response = await axios.get(
      `https://api.unsplash.com/users/${user}/photos`,
      options
    );
    if (response) {
      const userPhotos = response.data.map((photo) => ({
        id: photo.id,
        username: photo.user.username,
        description: photo.description || "No description provided",
        url: photo.urls.raw,
      }));
      return res.json(userPhotos);
    }
  } catch (error) {
    res.status(error.response.status).json({
      message: error.message,
    });
  }
};

module.exports = { getAllPhotos, getPhotosByID, fetchUserPhotos };
