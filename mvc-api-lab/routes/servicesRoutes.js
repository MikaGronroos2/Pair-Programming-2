// routers/servicessRouter.js

const express = require("express");
const servicesController = require("../controllers/servicesController");
const router = express.Router();

// Get All services
router.get("/", servicesController.getservices);

// Get Single service by ID
router.get("/:id", servicesController.getserviceById);

// Create a New service
router.post("/", servicesController.createservice);

// Update service by ID
router.put("/:id", servicesController.updateservice);

// Delete service by ID
router.delete("/:id", servicesController.deleteservice);

module.exports = router;
