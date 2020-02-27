const express = require("express");
const router = express.Router();

import Photo from '../models/photo.model';

// Find all photos
router.route('/').get((req, res) => {
  Photo.find()
    .then(photos => res.json(photos))
    .catch(err => res.status(400).json('Error: ' + err))
});

// Find one photo by id
router.route('/:id').get((req, res) => {
  Photo.find({id: req.params.id})
    .then(photos => res.json(photos))
    .catch(err => res.status(400).json('Error: ' + err))
});

// Add photo
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const newPhoto = new Photo({name, url: req.body.url});
  newPhoto.save()
    .then(() => res.json('Photo added'))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;