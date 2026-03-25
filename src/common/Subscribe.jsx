import React from "react";

const Subscribe = ({title, subTitle, buttonText, className}) => {
  return (
    <div className="">
      <div className={`${className}`}>
        <div >
          <h1 className="text-2xl">{title} </h1>
          <p>{subTitle}</p>
          <div className=" my-4">
            <input type="email" placeholder="Enter your email" className="px-4 py-1 border outline-none "/>
            <button className="border px-4 py-1 bg-amber-500">{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
