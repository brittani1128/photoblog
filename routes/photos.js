const express = require("express");
const router = express.Router();

import Photo from '../models/photo.model';

// Find all photos
router.route('/').get((req, res) => {
  Photo.find()
    .then(photos => res.json(photos))
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;