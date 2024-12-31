import { useEffect, useState } from "react"
import { useNavigate } from "react-router";
import { createMovieService, getAllMoviesService, getMovieService, deleteMovieService, updateMovieService } from "../services/movieService"
const movieData = {
    title: 'Deadpool & Wolverine',
    year: '2024',
    image: 'https://i.pinimg.com/736x/6f/4a/b8/6f4ab823d4a61e08724d647c14daa888.jpg',
    genre: 'Acción',
    synopsis:
      'Deadpool viaja en el tiempo con la intención de reclutar a Wolverine en la batalla contra un enemigo común: Paradox.',
  }
const useMovie = (home=false)=>{
    const [movies, setMovies]= useState([])
    const navigate = useNavigate()
    
    useEffect(()=>{
        if(home){
            getAllMovies()
        }
        
        
    },[])
    const deleteMovie = async (id)=>{
        await deleteMovieService({id,onSuccess:()=>{
            setMovies(movies.filter((movie)=>movie.id!=id))
        }})
    }
    const getMovie = async (id, callback)=>{
        await getMovieService({id,onSuccess:(response)=>{
            callback(response)
        }})
    }
    const getAllMovies = async ()=>{
        await getAllMoviesService({onSuccess:(response)=>{
            setMovies(response)
        }})
    }
    const createMovie = async (data)=>{
        console.log(data)
        await createMovieService({data, onSuccess:(response)=>{
            console.log(response)
            alert("Guardado Con exito")
          
                navigate('/')
            
        }})

    }
    const updateMovie = async ()=>{
       
        await updateMovieService({data:movieData, onSuccess:(response)=>{
            console.log(response)
            alert("Actualizado Con exito")
        }})

    }
    return {
        movies,
        createMovie,
        getMovie, 
        deleteMovie, 
        updateMovie
    }
}
export default useMovie