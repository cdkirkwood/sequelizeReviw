'use strict'
const express = require('express')
const router = express.Router()
const {Host} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const hosts = await Host.findAll({
      include: [{all: true}]
    })
    res.send(hosts)
  } catch {
    next()
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { firstName, lastName, currentRole, pastRoles } = req.body
    const host = await Host.create(req.body)
    res.send(host)
  } catch {
    next()
  }
})

module.exports = router
