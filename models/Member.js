const mongoose = require("mongoose");
const { Schema } = mongoose;

const MemberSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  middlename: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  batch: {
    type: Number,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  isHonorary: {
    type: Boolean,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
});

const Member = mongoose.model("Member", MemberSchema);
module.exports = {
  Member,
};
