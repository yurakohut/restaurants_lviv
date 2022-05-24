import express from "express";
import { createMarker } from "../controllers/markerController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, createMarker);
// router.route("/:id").get(getProductById);

export default router;
