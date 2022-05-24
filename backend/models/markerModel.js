import mongoose from "mongoose";

const markerSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    placeName: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    },
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Marker = mongoose.model("Marker", markerSchema);

export default Marker;
