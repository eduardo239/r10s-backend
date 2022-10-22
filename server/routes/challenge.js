const express = require('express');
const router = express.Router();
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');
const Challenge = require('../models/Challenge.js');

/* GET ALL Challenge */

// router.get('/', function (req, res, next) {
//   Challenge.find(function (err, products) {
//     if (err) return next(err);
//     res.json(products);
//   });
// });

/* GET SINGLE Challenge BY ID */
router.get('/:id', function (req, res, next) {
  Challenge.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Challenge */
router.post('/', function (req, res, next) {
  Challenge.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Challenge */
router.put('/:id', function (req, res, next) {
  Challenge.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Challenge */
router.delete('/:id', function (req, res, next) {
  Challenge.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET Challenge BY ID and PAGINATION */
// eslint-disable-next-line no-unused-vars
router.get('/', async (req, res, next) => {
  // eslint-disable-next-line no-unused-vars
  const { page = 1, limit = 2 } = req.query;

  try {
    const challenges = await Challenge.find()
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Challenge.count();
    res.json({ challenges, totalPages: Math.ceil(count / limit), page });
  } catch (err) {
    if (err) return next(err);
  }
});

module.exports = router;
