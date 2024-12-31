const router = require('express').Router();
const { createMovie, getAllMovies, getMovieById, UpdateMovie, deleteMovie } = require('../controller/movie');
const movieValidator = require('../validator/movie');
// Create movie
router.post('/', movieValidator, createMovie);
// Get all movies
router.get('/', getAllMovies);
// Get movie by ID
router.get('/:id', getMovieById);
// Update movie
router.put('/:id', movieValidator, UpdateMovie );
// Delete movie
router.delete('/:id', deleteMovie);


module.exports = router;