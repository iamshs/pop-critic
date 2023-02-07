import { Rating } from "@mui/material";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { RxResume} from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";

const Movie = ({ movie }) => {
  const { image, name, rating,trailer,_id } = movie;
  const navigate = useNavigate()
  const handleVideo = () =>{
    <Link to={window.open(`${trailer}`)} ></Link>
  }
  const handleReview = id =>{
    navigate(`/review/${id}`)
  }
  return (
    <div className="bg-neutral-800 shadow lg:max-w-xs md:max-w-xs max-w-sm  ">
      <img className="h-[400px] w-full" src={image} alt={name} />
      <div className="flex items-center mt-4  justify-between px-4">
        <Rating size="large" name="read-only" value={rating} readOnly />
        <button onClick={() => handleReview(_id)} className="hover:bg-[#303030] px-2 py-1 ">
          <AiOutlineStar color="#336699" size={30} />
        </button>
      </div>
      <h1 className="text-3xl mt-2 font-semibold text-white px-4 "> {name} </h1>

      <button className=" flex items-center text-[#F5F5F5] text-3xl px-4  mt-8 mb-3  hover:bg-[#303030]  font-bold"
      onClick={handleVideo}
      >
        <RxResume  />
        <span className="">Trailer</span>
      </button>
    </div>
  );
};

export default Movie;
