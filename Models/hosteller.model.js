const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hostellerSchema = new Schema(
  {
    name: { type: String, required: true },
    rollNumber: { type: String, required: true },
    year: { type: String, required: true },
    hostel: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Hosteller = mongoose.model("Hostellers", hostellerSchema);

module.exports = Hosteller;
