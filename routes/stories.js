'use strict'
const express = require('express')
const router = express.Router()
const {Story} = require('../db/models')
module.exports = router

router.get('/', async(req, res, next) => {
  const stories = await Story.findAll()
  res.json(stories)
})

router.post('/', async(req, res, next) => {
  const newStory = await Story.create(req.body)
  res.json(newStory)
})

router.put('/:id', async(req, res, next) => {
  const updated = await Story.update(req.body, {where: {id: req.params.id}})
  res.json(updated)
})


