import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import ReactPlayer from 'react-player/youtube'

const Details = () => {
  const { id } = useParams();
  const {
    data: movie,
    isLoading,
  
  } = useQuery({
    queryKey: ["moviesData"],
    queryFn: () =>
      fetch(`http://localhost:5000/movie/${id}`).then((res) => res.json()),
  });
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex justify-around ">
      <div className="max-w-md">
        <img className="" src={movie.image} alt="" />
      </div>
      <div className="max-w-md">
        <div>
          
        </div>
        <div className="text-white">
          <h1 className="text-5xl font-bold my-10"> {movie.name} </h1>
          <h2 className="text-3xl font-semibold">
            Director : {movie.director}{" "}
          </h2>
          <h2 className="text-2xl font-semibold">
            {" "}
            Starrer : <span className="text-xl text-normal">
              {movie.actor}
            </span>{" "}
          </h2>
          <h2 className="text-2xl font-semibold">
            Produced By :{" "}
            <span className="text-xl text-normal">{movie.producer}</span>{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Details;
