const {
  isValidRequest,
  isValidName,
  isValidPhone,
  isValidId,
} = require("../validators/validator");
const contactModel = require("../models/contactModel");

//======================= Create A New Contact =======================================
const createContact = async function (req, res) {
  try {
    const data = req.body;
    //Request Body Validation
    if (!isValidRequest(data)) {
      return res
        .status(400)
        .send({ status: false, message: `Please give details` });
    }

    const { fname, lname, phone } = data;

    //All Validations of First Name
    if (!fname) {
      return res
        .status(400)
        .send({ status: false, message: `first name is required` });
    }
    if (!isValidName(fname)) {
      return res
        .status(400)
        .send({ status: false, message: `Enter first name in proper format` });
    }

    //All Validations of Last Name
    if (!lname) {
      return res
        .status(400)
        .send({ status: false, message: `Last name is required` });
    }
    if (!isValidName(lname)) {
      return res
        .status(400)
        .send({ status: false, message: `Enter last name in proper format` });
    }

    //All Validations of Phone Number
    if (!phone) {
      return res
        .status(400)
        .send({ status: false, message: `Phone Number is required` });
    }
    if (!isValidPhone(phone)) {
      return res.status(400).send({
        status: false,
        message: `Enter Phone Number in proper format`,
      });
    }
    const matchPhone = await contactModel.findOne({ phone: phone });
    if (matchPhone) {
      return res
        .status(400)
        .send({ status: false, message: `This Phone Number is already Added` });
    }

    //Create New Contact In Data Base
    const contact = await contactModel.create(data);

    return res.status(201).send({ status: true, data: contact });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: err.message,
    });
  }
};

//================================ Get All Contacts ==========================================
const getAllContact = async function (req, res) {
  try {
    const contactList = await contactModel.find();
    return res.status(200).send({ status: true, data: contactList });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: err.message,
    });
  }
};

//============================ Get Contact By Id From Data Base ==================================
const getContactById = async function (req, res) {
  try {
    const contactId = req.params.contactId;

    //All Validations of Contact Id
    if (!contactId) {
      return res
        .status(400)
        .send({ status: false, message: `ContactId is Required` });
    }
    if (!isValidId(contactId)) {
      return res
        .status(400)
        .send({ status: false, message: `Please give the valid contact Id` });
    }
    const contactDetail = await contactModel.findById(contactId);
    return res.status(200).send({ status: true, data: contactDetail });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: err.message,
    });
  }
};

module.exports = { createContact, getAllContact, getContactById };
