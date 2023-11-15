
const express = require('express');
const router  = express.Router();

const controller = require('../controller/controller')

router.get('/phones', controller.getPhones)
router.post('/phones', controller.addPhone)
router.delete('/phones', controller.removePhone)

module.exports = router