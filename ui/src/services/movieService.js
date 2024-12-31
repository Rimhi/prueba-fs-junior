const baseUrl = "http://localhost:3000/api/"
const endpoint = "movies"

export const createMovieService = async({data :{title,year,genre,synopsis, cast,image}, onSuccess, onError})=>{
    try {
        const response = await fetch(baseUrl+endpoint,{
            method:"POST",
            headers: {
                "Content-Type": "application/json", 
            },            
            body:JSON.stringify({title,
                year,
                genre,
                synopsis, 
                cast,
                image})
         })
         if (!response.ok) {
            onError && onError()
            throw new Error(`Response status: ${response.status}`);
          }
          const json = await response.json();
          console.log(json);
          onSuccess && onSuccess(json)
    } catch (error) {
        console.error(error.message);
        onError && onError()
    }
 
}
export const getAllMoviesService = async({onSuccess, onError})=>{
    try {
        const response = await fetch(baseUrl+endpoint)
         if (!response.ok) {
            onError && onError()
            throw new Error(`Response status: ${response.status}`);
          }
          const json = await response.json();
          console.log(json);
          onSuccess && onSuccess(json)
    } catch (error) {
        console.error(error.message);
        onError && onError()
    }
 
}
export const getMovieService = async({id,onSuccess, onError})=>{
    try {
        const response = await fetch(baseUrl+endpoint+"/"+id)
         if (!response.ok) {
            onError && onError()
            throw new Error(`Response status: ${response.status}`);
          }
          const json = await response.json();
          console.log(json);
          onSuccess && onSuccess(json)
    } catch (error) {
        console.error(error.message);
        onError && onError()
    }
 
}

export const updateMovieService = async({data :{title,year,genre,synopsis, cast,image}, onSuccess, onError})=>{
    try {
        const response = await fetch(baseUrl+endpoint,{
            method:"PUT",
            headers: {
                "Content-Type": "application/json", 
            }, 
            body:JSON.stringify({title,
                year,
                genre,
                synopsis, 
                cast,
                image})
         })
         if (!response.ok) {
            onError && onError()
            throw new Error(`Response status: ${response.status}`);
          }
          const json = await response.json();
          console.log(json);
          onSuccess && onSuccess(json)
    } catch (error) {
        console.error(error.message);
        onError && onError()
    }
 
}

export const deleteMovieService = async({id,onSuccess, onError})=>{
    try {
        const response = await fetch(baseUrl+endpoint+"/"+id,{method:"DELETE"})
         if (!response.ok) {
            onError && onError()
            throw new Error(`Response status: ${response.status}`);
          }
          const json = await response.json();
          console.log(json);
          onSuccess && onSuccess(json)
    } catch (error) {
        console.error(error.message);
        onError && onError()
    }
 
}