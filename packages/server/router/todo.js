const router = require('express').Router()
const { create, remove, modify, list } = require('../controller/todo')
const timer = require('../middleware/timer')
const verify = require('../middleware/verify')

router.get('/', list)

router.post('/', verify, timer, create)

router.delete('/:id', remove)

router.put('/:id', timer, modify)

module.exports = router
