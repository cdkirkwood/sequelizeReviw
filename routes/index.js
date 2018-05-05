'use strict'
const express = require('express')
const router = express.Router()
const hosts = require('./hosts')

module.exports = router

router.use('/hosts', hosts)
router.use('/sectors', require('./sectors'))
router.use('/stories', require('./stories'))

