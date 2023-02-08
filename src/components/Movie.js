import { Rating } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { RxResume } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import RateModal from "./RateModal";

const Movie = ({ movie }) => {
  const { image, name, trailer, _id } = movie;
  const [value, setValue] = useState(null);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const navigate = useNavigate();

  const handleVideo = () => {
    <Link to={window.open(`${trailer}`)}></Link>;
  };

  const handleNavigate = () => {
    navigate(`/details/${_id}`);
  };

  return (
    <div className="bg-neutral-800 shadow lg:max-w-xs md:max-w-xs max-w-sm  ">
      <img className="h-[400px] w-full" src={image} alt={name} />
      <div className="flex items-center mt-4  justify-between px-4">
        <Rating readOnly value={value} name="read-only" />
        <button
          onClick={handleOpen}
          className="hover:bg-[#303030] text-blue-500 hover:text-white px-2 py-1 "
        >
          <AiOutlineStar size={30} />
        </button>
      </div>
    
      <div className="grid place-items-center">
      <h1 className="text-3xl mt-2 font-semibold text-amber-400 px-4 "> {name} </h1>
      <button
        onClick={handleNavigate}
        className="text-2xl  py-2 w-[95%] hover:bg-neutral-900  my-6 border border-blue-700 text-blue-600"
      >
        See More
      </button>
      <button
        className=" flex items-center text-[#F5F5F5] text-xl px-4 py-2   mb-3  hover:bg-[#303030]  font-bold"
        onClick={handleVideo}
      >
        <RxResume />
        <span >Trailer</span>
      </button>
      </div>
     
      {movie && (
        <RateModal
          open={open}
          setOpen={setOpen}
          setValue={setValue}
          name={name}
        />
      )}
    </div>
  );
};

export default Movie;
