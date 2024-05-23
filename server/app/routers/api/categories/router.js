const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
const { browse, read } = require("../../../controllers/categoryActions");

// Route to get a list of categories
router.get("/", browse);

router.get("/:id", read); // Complete path is: /api/categories/:id

/* ************************************************************************* */

module.exports = router;