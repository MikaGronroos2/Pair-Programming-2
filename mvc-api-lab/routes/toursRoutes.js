// routers/tourssRouter.js

const express = require("express");
const toursController = require("../controllers/toursController");
const router = express.Router();

// Get All tours
router.get("/", toursController.getAlltours);

// Get Single tour by ID
router.get("/:id", toursController.gettourById);

// Create a New tour
router.post("/", toursController.createtour);

// Update tour by ID
router.put("/:id", toursController.updatetour);

// Delete tour by ID
router.delete("/:id", toursController.deletetour);

module.exports = router;
