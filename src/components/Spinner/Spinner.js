import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spinner = () => {
  return (
    <div className="centered">
      <Loader type="TailSpin" color="#ff4140" height={80} width={80} />
    </div>
  );
};

export default Spinner;
