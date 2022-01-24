const express = require('express')
const router = express.Router()
const controller = require('../controller/controller.js')

router.get('/', controller.readAll)
router.get('/:id', controller.readOne)
router.post('/', controller.create)
router.delete('/', controller.delete)


module.exports = router