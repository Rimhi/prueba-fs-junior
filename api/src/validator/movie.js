const { body } = require('express-validator');

const movieValidator = [
  body('title').notEmpty().withMessage('Title is required'),
  body('year').isInt({ min: 1888 }).withMessage('Valid year is required'),
  body('genre').notEmpty().withMessage('Genre is required'),
  body('synopsis').notEmpty().withMessage('Synopsis is required'),
  body('cast').isArray().withMessage('Cast must be an array'),
  body('image').isURL().withMessage('Valid image URL is required')
];

module.exports = movieValidator;