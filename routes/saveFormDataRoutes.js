const express = require("express");
const router = express.Router();

// get all routes from saveFormData controller
const {
    saveData,
    getAllDataByFormId
} = require("../controllers/saveFormData");

//reports routes
router.post("/reports", saveData);
router.get("/reports/", getAllDataByFormId);

module.exports = router;