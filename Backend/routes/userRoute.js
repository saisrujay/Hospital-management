const exp =  require('express');
const router = exp.Router();
const { registerUser, loginUser } = require("../controllers/userController");

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;