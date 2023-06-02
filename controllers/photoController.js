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

console.log(apiKey);

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

module.exports = { getAllPhotos, getPhotosByID };
