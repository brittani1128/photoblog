import express from 'express';
const router = express.Router();

import Photo from '../models/photo.model.js';

// Find all photos
router.get('/', (req, res) => {
  Photo.find()
    .then((photos) => res.json(photos))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Find one photo by id
router.get('/:id', (req, res) => {
  Photo.find({ id: req.params.id })
    .then((photos) => res.json(photos))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Add photo
router.post('/add', (req, res) => {
  const name = req.body.name;
  const newPhoto = new Photo({ name, url: req.body.url });
  newPhoto
    .save()
    .then(() => res.json('Photo added'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

export default router;
