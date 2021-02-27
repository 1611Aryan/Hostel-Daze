const Hosteller = require("./../Models/hosteller.model");

exports.add = async (req, res) => {
  const name = req.body.name;
  const rollNumber = req.body.rollNumber;
  const year = req.body.year;
  const hostel = req.body.hostel;
  const password = req.body.password;

  const newHosteller = new Hosteller({
    name,
    rollNumber,
    year,
    hostel,
    password,
  });

  try {
    await newHosteller.save();
    res.send("Added");
  } catch (err) {
    res.status(500);
    console.log(err);
  }
};

exports.login = async (req, res) => {
  const rollNumber = req.body.rollNumber;
  const password = req.body.password;
  try {
    const student = await Hosteller.findOne({ rollNumber });
    student
      ? student.password === password
        ? res
            .send({ success: true, message: "Login Successful", student })
            .status(200)
        : res.send({ success: false, message: "Incorrect Password" })
      : res
          .send({ success: false, message: "Incorrect Roll Number" })
          .status(404);
  } catch (err) {
    res.status(500);
    console.log(err);
  }
};
