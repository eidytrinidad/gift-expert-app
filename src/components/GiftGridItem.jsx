import React from "react";

export const GiftGridItem = ({ title, url }) => {

  return (
    <div className="card mt-10 animate__animated animate__fadeIn">
      <img className="w-full" src={url} alt={title} />
      <p className="text-blue-800 font-semibold">{title}</p>
    </div>
  );
};
