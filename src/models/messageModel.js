const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const messageSchema = new mongoose.Schema(
  {
    contactId: {
      type: objectId,
      ref: "Contact",
    },
    otp: {
      type: Number,
      required: true,
      trim: true,
    },
    createdAt :{
      type : String
    }
  }
);

module.exports = mongoose.model("Message", messageSchema);
