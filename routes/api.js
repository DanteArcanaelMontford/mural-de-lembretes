const express = require("express");
const bodyParser = require("body-parser");
const posts = require('../models/posts');

const router = express.Router()

router.get('/all', (req, res) => {
  res.json(JSON.stringify(posts.getAll()));
})

router.post('/new', bodyParser.json(), (req, res) => {
  posts.newPost(req.body.title, req.body.description)
  console.log('[+] New post', {
    "title": req.body.title,
    "description": req.body.description,
  });
})


module.exports = router;