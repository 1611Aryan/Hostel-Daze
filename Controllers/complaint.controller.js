const path = require("path");
const Complaint = require(path.join(__dirname, "./../Models/complaints.model"));

exports.all = async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.status(200).send(complaints);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.add = async (req, res) => {
  const newComplaint = new Complaint({
    name: req.body.name,
    rollNumber: req.body.rollNumber,
    issue: req.body.issue,
  });
  try {
    await newComplaint.save();
    res.status(202).send("Complaint Sent");
  } catch (err) {
    res.status(500).send(err);
  }
};
