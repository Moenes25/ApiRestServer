const express = require('express');
const router= express.Router();

const stuffCtrl = require('../Controllers/stuff');

router.post('/createThing', stuffCtrl.createThing);

module.exports = router
