const express = require("express");
const router = express.Router();
const {
  createContact,
  getAllContact,
  getContactById,
} = require("../controllers/contact");

const { getOtp, 
  sendSMS, 
  getMessages } = require("../controllers/message");

router.post("/createContact", createContact);
router.get("/getAllContact", getAllContact);
router.get("/getContactById/:contactId", getContactById);

router.get("/getOtp", getOtp);
router.post("/sendSMS", sendSMS);
router.get("/getMessages", getMessages);

module.exports = router;
