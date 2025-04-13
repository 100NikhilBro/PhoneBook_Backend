const express = require('express');
const { addUser, exportData } = require('../controllers/userControllers');
const router = express.Router();

router.post("/addUser", addUser);
router.get("/exportData", exportData);

module.exports = router;