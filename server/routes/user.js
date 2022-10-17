const express = require('express');
const router = express.Router();
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');
const User = require('../models/User.js');

/* GET ALL USERS */
router.get('/', function (req, res, next) {
  User.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE USER BY ID */
router.get('/:id', function (req, res, next) {
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET USER BY UID */
router.get('/uid/:uid', function (req, res, next) {
  console.log(req.params);
  User.findOne({ uid: req.params.uid }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE PRODUCT */
router.post('/', function (req, res, next) {
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE USER */
router.put('/:id', function (req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE USER */
router.delete('/:id', function (req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
