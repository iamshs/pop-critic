import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Movies = () => {
    const {  data:movies ,isLoading, error } = useQuery({
        queryKey: ['movieData'],
        queryFn: () =>
          fetch('http://localhost:5000/movies').then(
            (res) => res.json(),
          ),
      })
      console.log(movies)
    return (
        <div>
            
        </div>
    );
};

export default Movies;