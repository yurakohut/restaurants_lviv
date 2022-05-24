import asyncHandler from "express-async-handler";
import Marker from "../models/markerModel.js";

// @desc    Create a new marker
// @route   POST /api/markers
// @access  Private
const createMarker = asyncHandler(async (req, res) => {
  const { placeName, latitude, longitude } = req.body;

  const markerExist = await Marker.find({ latitude, longitude });

  if (markerExist.length) {
    res.status(400);
    throw new Error("Marker already exists");
  }

  const marker = await Marker.create({
    user: req.user._id,
    placeName,
    latitude,
    longitude
  });

  await marker.save();

  res.status(201).json({ placeName, latitude, longitude });
});

export { createMarker };
