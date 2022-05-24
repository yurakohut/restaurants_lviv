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

// @desc    Get markers by user
// @route   GET /api/markers
// @access  Private
const getMarkersByUser = asyncHandler(async (req, res) => {
  const markers = await Marker.find({ user: req.user._id }).select(
    "placeName latitude longitude"
  );
  res.json(markers);
});

export { createMarker, getMarkersByUser };
