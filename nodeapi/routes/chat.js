"use strict";

var express = require('express');
var router = express.Router();

// chuleta: http://stackoverflow.com/questions/10058226/send-response-to-all-clients-except-sender-socket-io

router.get('/', function(req, res, next) {
    res.render('chat');
});

module.exports = router;
