const exp = require('express');
const dotenv = require('dotenv').config();
const mongo = require('mongoose').set('strictQuery', false);
const user = require("../Backend/models/users");

const app = exp();

app.get("/", (req,res) => {
    res.send("Home page");
});

// Connect to MongoDB
mongo.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
      console.log("Connected to MongoDB");

      // Get the last uhid and opid from the existing documents
      user.findOne({}, {}, { sort: { 'uhid': -1, 'opid': -1 } })
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
              console.log(uhid1 + "\n" + opid1);

              const user1 = new user({
                  name: "sreeja",
                  age: "21",
                  gender: "male",
                  uhid: uhid1,
                  opid: opid1
              });

              user1.save()
                  .then(() => {
                      console.log("Saved");
                  })
                  .catch((err) => {
                      console.log(err);
                  });
          })
          .catch((err) => {
              console.log(err);
          });
  })
  .catch((err) => {
      console.log(err);
  });

app.listen(process.env.PORT, () => {
    console.log("Server started at port 3000");
});
