const express = require("express");
const router = express.Router();

// get all function from generateForm controller
const {
    saveForm,
    getForm,
    getAllForm
} = require("../controllers/generateForm");

//forms routes
router.post("/forms", saveForm);
router.get("/forms/:id", getForm);
router.get("/forms/", getAllForm);

module.exports = router;