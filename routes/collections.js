import express from 'express';
const router = express.Router();

import Collection from '../models/collection.model.js';

// Find all collections
router.route('/').get((req, res) => {
  Collection.find()
    .then((collections) => res.json(collections))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Find one collection by id
router.route('/:id').get((req, res) => {
  Collection.find({ id: req.params.id })
    .then((collection) => res.json(collection))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Add collection
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const newCollection = new Collection({ name });
  newCollection
    .save()
    .then(() => res.json('Collection added'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

export default router;
