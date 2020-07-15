const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const memberSchema = new Schema({
  membername: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 1,
  },
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
