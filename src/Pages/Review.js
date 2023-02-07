import { Rating } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Review = () => {
  const { id } = useParams();
  const [value, setValue] = useState(2);
  return (
    <section className="grid place-items-center">
      <h2 className="text-4xl font-semibold text-amber-400 mt-6">Rate This</h2>
      <h3 className="text-white text-2xl mb-6">Share your thoughts</h3>
      <div className=" bg-zinc-600 max-w-lg grid place-items-center px-20 py-8 ">
        <Rating
          name="simple-controlled"
          size="large"
          color="dark"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <textarea
          rows={"6"}
          cols="30"
          placeholder="Write Your Comment"
          className="text-xl text-white mt-6 p-2 bg-zinc-600 border border-white  "
        ></textarea>
        <input
          type={"submit"}
          value="Rate us"
          className="bg-zinc-800 shadow-lg rounded hover:bg-zinc-900 text-white mt-3 text-2xl px-8 py-2 "
        />
      </div>
    </section>
  );
};

export default Review;
