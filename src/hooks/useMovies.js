import { useQuery } from "@tanstack/react-query"


const useMovies = () =>{
  
    const {  data:movies ,isLoading, error } = useQuery({
        queryKey: ['movieData'],
        queryFn: () =>
          fetch('movies.json').then(
            (res) => res.json(),
          )
      })
   
      return [movies ,isLoading, error]

    
}

export default useMovies ;