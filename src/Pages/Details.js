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
      fetch(`https://pop-server.vercel.app/movie/${id}`).then((res) => res.json()),
  });
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 p-10 gap-10 ">
      <div className="">
        <img className="lg:w-[80%] lg:h-[40rem] " src={movie.image} alt="" />
      </div>
      <div className="">
        <div>
        <ReactPlayer controls={true}  width="100%"   url={movie.trailer} />
        </div>
        <div className="text-white">
          <h1 className="lg:text-5xl text-3xl font-bold my-10"> {movie.name} </h1>
          <h2 className="lg:text-3xl text-2xl font-semibold">
            Director : {movie.director}
          </h2>
          <h2 className="text-2xl font-semibold">
            Starrer : <span className="lg:text-xl text-lg text-amber-400 text-normal">
              {movie.actor}
            </span>
          </h2>
          <h2 className="text-2xl font-semibold">
            Produced By :<span className="lg:text-xl text-lg text-amber-400 text-normal">{movie.producer}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Details;
