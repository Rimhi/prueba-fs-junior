import React from "react";
import { useForm } from "react-hook-form";
import useMovie from "../controller/useMovie";


const MovieForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {createMovie} = useMovie()
  const onSubmit = async (data)=>{
    console.log(data)
    const cast = data.cast.split(",")
    console.log(cast)
    await createMovie({
        ...data,
        cast
    })
  }
  return (
    <div className="max-w-2xl mx-auto bg-gray-800 text-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Create a New Movie</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            {...register("title", { required: "Title is required" })}
            className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-red-600"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Year */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="year">
            Year
          </label>
          <input
            id="year"
            type="number"
            {...register("year", {
              required: "Year is required",
              min: { value: 1900, message: "Year must be after 1900" },
              max: { value: new Date().getFullYear(), message: "Invalid year" },
            })}
            className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-red-600"
          />
          {errors.year && (
            <p className="text-red-500 text-sm mt-1">{errors.year.message}</p>
          )}
        </div>

        {/* Genre */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="genre">
            Genre
          </label>
          <input
            id="genre"
            type="text"
            {...register("genre", { required: "Genre is required" })}
            className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-red-600"
          />
          {errors.genre && (
            <p className="text-red-500 text-sm mt-1">{errors.genre.message}</p>
          )}
        </div>

        {/* Synopsis */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="synopsis">
            Synopsis
          </label>
          <textarea
            id="synopsis"
            {...register("synopsis", { required: "Synopsis is required" })}
            className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-red-600"
            rows="4"
          ></textarea>
          {errors.synopsis && (
            <p className="text-red-500 text-sm mt-1">{errors.synopsis.message}</p>
          )}
        </div>

        {/* Cast */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="cast">
            Cast (comma-separated)
          </label>
          <input
            id="cast"
            type="text"
            {...register("cast", { required: "Cast is required" })}
            className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-red-600"
          />
          {errors.cast && (
            <p className="text-red-500 text-sm mt-1">{errors.cast.message}</p>
          )}
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="image">
            Image URL
          </label>
          <input
            id="image"
            type="url"
            {...register("image", { required: "Image URL is required" })}
            className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-red-600"
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold"
          >
            Create Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieForm;
