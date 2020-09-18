import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftGridItem } from "./GiftGridItem";

export const GiftGrid = ({ category }) => {
  const { loading, data:images } = useFetchGifs(category);


  return (
    <>
      <h3 className="text-2xl text-purple-900 font-semibold my-5 text-center animate__animated animate__fadeIn">
        {category}
      </h3>

      {loading && <p className="animate__animated animate__flash">Loading...</p>}

      <div className="card-grid d-flex justify-center sm:justify-between">
        {images.map((img) => (
          <GiftGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
