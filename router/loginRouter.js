const express = require('express');
const router = express.Router();
const {getLogin} = require('../controller/loginController');
const decorateHtmlResponse = require('../middleware/common/decorateHtmlResponse');
router.get('/',decorateHtmlResponse("login"),getLogin);

module.exports = router;