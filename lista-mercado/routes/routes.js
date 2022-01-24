const express = require('express')
const router = express.Router()
const controller = require('../controller/controller.js')

router.post('/', controller.create)
router.put('/', controller.update)
router.get('/', controller.readAll)
router.get('/:id', controller.readOne)
router.delete('/', controller.delete)

module.exports = router