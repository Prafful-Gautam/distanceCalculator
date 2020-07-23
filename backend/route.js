const express = require('express');
const router = express.Router();
const postController = require('./controller/postController');

router.post("", postController.calculate);
router.get("", postController.get);

module.exports = router;
