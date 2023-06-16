const mongo = require('mongoose');


const userSchema = mongo.Schema(
    {

    }
)

const user = mongo.model("user",userSchema);
module.exports = user;