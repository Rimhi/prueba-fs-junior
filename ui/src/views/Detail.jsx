import React, { useEffect, useState } from "react";
import useMovie from "../controller/useMovie";
import { Link, useParams } from "react-router";

const MovieView = () => {
    const { id } = useParams();
    const [movie, setMovie]= useState({})
    const {getMovie} = useMovie()
    useEffect(()=>{
        getMovie(id,setMovie)
    },[])
    if (!movie.id) {
        return (
          <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
            <p className="text-xl">Movie not found</p>
          </div>
        );
    }
  return (
    <div className="relative h-screen w-full bg-black text-white">
    
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${movie.image})` }}
      ></div>

      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90"></div>

   
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between h-full p-8">
        
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold">{movie.title}</h1>
          <p className="mt-2 text-lg text-gray-400">
            {movie.year} • {movie.genre}
          </p>
          <p className="mt-4 text-gray-300">{movie.synopsis}</p>
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Cast</h3>
            <ul className="flex gap-4 mt-2">
              {movie.cast.map((actor, index) => (
                <li
                  key={index}
                  className="bg-gray-800 py-1 px-3 rounded-full text-sm"
                >
                  {actor}
                </li>
              ))}
            </ul>
          </div>

          
          <div className="mt-8 flex gap-4">
            <Link to="/" className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold text-lg">
              Back
            </Link>
          
          </div>
        </div>

       
        <div className="hidden md:block w-64">
          <img
            src={movie.image}
            alt={movie.title}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieView;