const express = require('express');
const { addContact, seacrhContact, deleteContact } = require('../controllers/contactControllers');
const router = express.Router();

router.post("/addContact", addContact);
router.get("/searchContact", seacrhContact);
router.delete("/deleteContact/:id", deleteContact);

module.exports = router;