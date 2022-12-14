'use strict';
// global imports
const _ = require('underscore');
const Filter = require('bad-words');
const { check, validationResult } = require('express-validator');
// local imports
const {
    lblInvalidRoleid,
    lblInvalidEmail,
    lblInvalidPassword,
    lblInvalidFirstname,
    lblInvalidLastname,
    lblInvalidCreatedby,
    lblInvalidUpdatedby,
    lblInvalidUserId,
} = require("../../languages/user");

const filter = new Filter();

// Validate sign in fields
exports.validateSignIn = [
  check('email', lblInvalidEmail).trim().isEmail(),
  check('password', lblInvalidPassword).trim().not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let errMsg = _.pluck(errors.array(), 'msg');
      return res.status(422).json({ message: errMsg.join(", ") });
    }
    next();
  }
];

// Validate view user fields
exports.validateViewUser = [
  check('user_id', lblInvalidUserId).trim().not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let errMsg = _.pluck(errors.array(), 'msg');
      return res.status(422).json({ message: errMsg.join(", ") });
    }
    next();
  }
];

// Validate create user fields
exports.validateCreateUser = [
  check('role_id', lblInvalidRoleid).trim().isInt(),
  check('email', lblInvalidEmail).trim().isEmail(),
  check('password', lblInvalidPassword).trim().not().isEmpty(),
  check('first_name', lblInvalidFirstname).trim().not().isEmpty().isLength({ max: 255 }).matches(/^[A-Za-z ]+$/).withMessage("Only Alphabets are allowed").custom((value) => {
    if (filter.isProfane(value)) {
      throw new Error("Invalid Entry")
    } else {
      return true;
    }
  }),
  check('last_name', lblInvalidLastname).trim().not().isEmpty().isLength({ max: 255 }).matches(/^[A-Za-z ]+$/).withMessage("Only Alphabets are allowed").custom((value) => {
    if (filter.isProfane(value)) {
      throw new Error("Invalid Entry")
    } else {
      return true;
    }
  }),
  check('created_by', lblInvalidCreatedby).trim().isInt(),
  check('updated_by', lblInvalidUpdatedby).trim().isInt(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let errMsg = _.pluck(errors.array(), 'msg');
      return res.status(422).json({ message: errMsg.join(", ") });
    }
    next();
  }
];

// Validate update user fields
exports.validateUpdateUser = [
  check('id', lblInvalidUserId).trim().isInt(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let errMsg = _.pluck(errors.array(), 'msg');
      return res.status(422).json({ message: errMsg.join(", ") });
    }
    next();
  }
];

// Validate delete user fields
exports.validateDeleteUser = [
  check('id', lblInvalidUserId).trim().isInt(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let errMsg = _.pluck(errors.array(), 'msg');
      return res.status(422).json({ message: errMsg.join(", ") });
    }
    next();
  }
];

// Validate check email fields
exports.validateCheckEmail = [
  check('email', lblInvalidEmail).trim().isEmail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let errMsg = _.pluck(errors.array(), 'msg');
      return res.status(422).json({ message: errMsg.join(", ") });
    }
    next();
  }
];
