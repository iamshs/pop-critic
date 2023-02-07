import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Movie from './Movie';
import Spinner from './Spinner';

const Movies = () => {
    const {  data:movies ,isLoading, error } = useQuery({
        queryKey: ['movieData'],
        queryFn: () =>
          fetch('http://localhost:5000/movies').then(
            (res) => res.json(),
          ),
      })

      if(isLoading){
        return <Spinner />
      }
      
    return (
        <section className=''>
           <div className='flex items-center lg:pl-6 pl-2 md:pl-4  py-20 lg:w-[16%] w-[28%] md:w-[24%] justify-between '>
            <div className='lg:h-12 md:h-10 h-6 lg:w-2 md:w-1.5 w-1 bg-white'></div>
           <h1 className='lg:text-5xl md:text-4xl text-xl font-semibold text-amber-400  '>WatchList</h1>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-5 md:px-4 px-3 gap-10'>
            {
                movies.map(movie => <Movie key={movie._id} movie={movie} />)
            }
           </div>
        </section>
    );
};

export default Movies;