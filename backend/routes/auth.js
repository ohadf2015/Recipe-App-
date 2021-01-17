const express = require('express');
const { register, login, myAccount, forgotPass, resetPassByToken, logout,updateUserCategory } = require('../controllers/auth');
const { protect } = require('../middleware/auth')
const router = express.Router();
router.post('/register', register);
router.post('/login', login);
router.get('/account', protect, myAccount);
router.post('/forgotpass', forgotPass);
router.post('/resetpass/:restoken', resetPassByToken);
router.get('/logout', logout);
router.post('/updateUserCategory', updateUserCategory);
module.exports = router;