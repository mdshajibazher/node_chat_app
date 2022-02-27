const express = require('express');
const router = express.Router();
const {getUsers} = require('../controller/usersController');
const decorateHtmlResponse = require('../middleware/common/decorateHtmlResponse');
router.get('/',decorateHtmlResponse('users'),getUsers);

module.exports = router;