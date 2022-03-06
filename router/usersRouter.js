const express = require('express');
const router = express.Router();
const {getUsers,addUser} = require('../controller/usersController');
const decorateHtmlResponse = require('../middleware/common/decorateHtmlResponse');
const avatarUpload = require('../middleware/users/avatarUpload');
const {addUserValidators, addValidatorHandler} = require("../middleware/users/usersValidators");
router.get('/',decorateHtmlResponse('users'),getUsers);
router.post('/',avatarUpload,addUserValidators,addValidatorHandler,addUser);



module.exports = router;