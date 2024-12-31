
const { validationResult } = require('express-validator');
const Movie = require('../models/movie');



 const createMovie = async (req, res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
      } catch (error) {
        res.status(500).json({ error: 'Error creating movie' });
      }
}

 const getAllMovies = async (req, res) => {
    try {
      const movies = await Movie.findAll({
        attributes: ['id', 'title', 'year', 'genre', 'image','cast']
      });
      res.json(movies);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching movies' });
    }
  }


 const getMovieById = async (req, res) => {
    try {
      const movie = await Movie.findByPk(req.params.id);
      if (!movie) {
        return res.status(404).json({ error: 'Movie not found' });
      }
      res.json(movie);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching movie' });
    }
  }

 const UpdateMovie = async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const movie = await Movie.findByPk(req.params.id);
      if (!movie) {
        return res.status(404).json({ error: 'Movie not found' });
      }
  
      await movie.update(req.body);
      res.json(movie);
    } catch (error) {
      res.status(500).json({ error: 'Error updating movie' });
    }
  }

 const deleteMovie = async (req, res) => {
    try {
      const movie = await Movie.findByPk(req.params.id);
      if (!movie) {
        return res.status(404).json({ error: 'Movie not found' });
      }
  
      await movie.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Error deleting movie' });
    }
  }


module.exports = {
    createMovie,
    UpdateMovie,
    getAllMovies,
    getMovieById,
    deleteMovie
}
