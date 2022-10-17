const express = require('express');
const router = express.Router();
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');
const UserChallenge = require('../models/UserChallenge');

/* GET ALL UserChallenge */

router.get('/', function (req, res, next) {
  UserChallenge.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE UserChallenge BY ID */
router.get('/:id', function (req, res, next) {
  UserChallenge.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET UserChallenges BY UID */
router.get('/uid/:uid', function (req, res, next) {
  UserChallenge.find({ uid: req.params.uid }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET UserChallenges BY UID and CID */
router.get('/uid/:uid/cid/:cid', function (req, res, next) {
  UserChallenge.find(
    { uid: req.params.uid, cid: req.params.cid },
    function (err, post) {
      if (err) return next(err);
      res.json(post);
    }
  );
});

/* SAVE UserChallenge */
router.post('/', function (req, res, next) {
  UserChallenge.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE UserChallenge */
router.put('/:id', function (req, res, next) {
  UserChallenge.findByIdAndUpdate(
    req.params.id,
    req.body,
    function (err, post) {
      if (err) return next(err);
      res.json(post);
    }
  );
});

/* DELETE UserChallenge */
router.delete('/:id', function (req, res, next) {
  UserChallenge.findByIdAndRemove(
    req.params.id,
    req.body,
    function (err, post) {
      if (err) return next(err);
      res.json(post);
    }
  );
});

module.exports = router;
