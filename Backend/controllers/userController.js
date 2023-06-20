const asyncHandler = require('express-async-handler');
const User = require("../models/users");

const registerUser = asyncHandler(async (req, res) => {
  const { name, age, gender } = req.body;
  if (!name || !age || !gender) {
    res.status(400);
    throw new Error("Fill in all the required fields");
  }

  // Get the last uhid and opid from the existing documents
  User
    .findOne({}, {}, { sort: { uhid: -1, opid: -1 } })
    .then((lastUser) => {
      let uhidCounter = lastUser ? parseInt(lastUser.uhid.substring(2), 10) + 1 : 1;
      let opidCounter = lastUser ? parseInt(lastUser.opid.substring(8), 10) + 1 : 1;

      // Function to generate the uhid
      function generateUHID() {
        const year = new Date().getFullYear().toString().substring(2);
        const sequence = uhidCounter.toString().padStart(3, '0');
        uhidCounter++;
        return `${year}${sequence}`;
      }

      // Function to generate the opid
      function generateOPID(uhid) {
        const sequence = opidCounter.toString().padStart(3, '0');
        opidCounter++;
        return `${uhid}_OP${sequence}`;
      }

      const uhid1 = generateUHID();
      const opid1 = generateOPID(uhid1);

      const user1 = new User({
        name: name,
        age: age,
        gender: gender,
        uhid: uhid1,
        opid: opid1
      });

      user1
        .save()
        .then(() => {
          console.log("Saved");
          res.status(201).json({
            name: name,
            age: age,
            gender: gender,
            uhid: uhid1,
            opid: opid1
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: "Failed to save user" });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to find last user" });
    });
});

const loginUser = asyncHandler(
    async (req,res) => {
        const {name,uhid} = req.body;
        if(!name ||!uhid) {
            res.status(400);
            throw new Error("Please add name and uhid");
        }
        // Check if user exists
        const user = await User.findOne({uhid});
        //If the user doesn't exist, throw an error
        if(!user) {
            res.status(400);
            throw new Error("User not found, please signup");
        }
        // Compare entered uhid with the one in MongoDB
        if (user.uhid !== uhid) {
            res.status(400);
            throw new Error("Invalid uhid");
        }
        const { age, gender, opid } = user;
            res.status(200).json({
                name,
                age,
                gender,
                uhid,
                opid,
            });
    });
    
    


module.exports = {
  registerUser,
  loginUser,
};
