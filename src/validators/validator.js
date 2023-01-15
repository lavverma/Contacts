const mongoose = require("mongoose");

//validation for empty request body
const isValidRequest = function (data) {
  if (Object.keys(data).length == 0) {
    return false;
  }
  return true;
};

//function for verifying name
const isValidName = function (name) {
  return /^[a-zA-Z]+$/.test(name);
};

//function for verifying mobile number
const isValidPhone = function (phone) {
  return /^((\+91(-| )+)|0)?[6-9][0-9]{9}$/.test(phone);
};

const isValidId = function (id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return false;
  }
  return true;
};

module.exports = { isValidRequest, isValidName, isValidPhone, isValidId };
