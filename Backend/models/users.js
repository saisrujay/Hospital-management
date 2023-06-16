const mongo = require('mongoose');


const userSchema = mongo.Schema(
    {
        name: {
            type: String,
            required: true
          },
          age: {
            type: String,
            required: true
          },
          gender: {
            type: String,
            required: true
          },
          uhid: {
            type: String,
            required: true,
            unique: true
          },
          upid: {
            type: String,
            required: true,
            unique: true
          }
    }
)

const user = mongo.model("user",userSchema);
module.exports = user;