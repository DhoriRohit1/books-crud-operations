let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Book Model
let bookSchema = require("../Models/Book");

// CREATE Book
router.route("/create-book").post(async (req, res, next) => {
  await bookSchema
    .create(req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully added!",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

// READ Book
router.route("/").get(async (req, res, next) => {
  await bookSchema
    .find()
    .then((result) => {
      res.json({
        data: result,
        message: "All items successfully fetched.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

// Get Single Book
router.route("/get-book/:id").get(async (req, res, next) => {
  await bookSchema
    .findById(req.params.id)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully fetched.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

// Update Book
router.route("/update-book/:id").put(async (req, res, next) => {
  await bookSchema
    .findByIdAndUpdate(req.params.id, {
      $set: req.body,
    })
    .then((result) => {
      console.log(result);
      res.json({
        data: result,
        msg: "Data successfully updated.",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Delete Book
router.route("/delete-book/:id").delete(async (req, res, next) => {
  await bookSchema
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        msg: "Data successfully updated.",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
