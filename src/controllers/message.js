const {
  isValidRequest,
  isValidPhone,
  isValidId,
} = require("../validators/validator");
const Twilio = require("twilio");
const messageModel = require("../models/messageModel");
const contactModel = require("../models/contactModel");

const { TWILIO_Account_SID, TWILIO_Auth_Token, TWILIO_PHONE_NUMBER } =
  process.env;

//========================== Get All Messages ===================================
async function getMessages(req, res) {
  try {
    const data = await messageModel
      .find()
      .sort({ _id: -1 })
      .populate("contactId");
    const messagesList = data.map((i) => ({
      _id: i._id,
      name: `${i.contactId.fname} ${i.contactId.lname}`,
      otp: i.otp,
      date: new Date(i.createdAt).toLocaleDateString('en-US', { timeZone: 'Asia/Kolkata' }),
      time: new Date(i.createdAt).toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })
    }));
    return res.status(200).send({ status: true, data: messagesList });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: err.message,
    });
  }
}

//======================== Generate OTP =============================================
function getOtp(req, res) {
  const a = Math.random();
  const otp = Math.round(a * 900000 + 100000);
  return res.status(200).send({ status: true, data: otp });
}

//=========================== Send SMS Help of Twilio =========================================
async function sendSMS(req, res) {
  try {
    const client = new Twilio(TWILIO_Account_SID, TWILIO_Auth_Token);

    //Request Body (Input) Validation
    if (!isValidRequest(req.body)) {
      return res
        .status(400)
        .send({ status: false, message: `Please give details` });
    }

    const { phone, otp, contactId } = req.body;

    // All Validations of Phone Number
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
    if (!matchPhone) {
      return res
        .status(400)
        .send({ status: false, message: `This Phone Number is not added yet` });
    }

    // All Validations of OTP
    if (!otp) {
      return res
        .status(400)
        .send({ status: false, message: `Otp is required` });
    }
    if (otp.toString().length != 6) {
      return res
        .status(400)
        .send({ status: false, message: `Otp must be 6 digits` });
    }

    // Contact Id validations
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

    // Send SMS
    await client.messages.create({
      body: `Hi. Your otp is: ${parseInt(otp)} `,
      from: TWILIO_PHONE_NUMBER,
      to: `+91${phone}`,
    });

    // Message Details Store In Data Base
    await messageModel.create({ otp, contactId, createdAt: new Date() });

    return res
      .status(200)
      .send({ status: true, message: `SMS Successfully send` });

  } catch (err) {
    return res.status(500).send({
      status: false,
      message: err.message,
    });
  }
}

module.exports = { getMessages, getOtp, sendSMS };
