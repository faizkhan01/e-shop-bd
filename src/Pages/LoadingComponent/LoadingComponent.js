import React from "react";
import loadingGif from "../../assets/loading.gif";
const LoadingComponent = () => {
  return (
    <div className="loading-coontainer">
      <img src={loadingGif} alt="" />
    </div>
  );
};

export default LoadingComponent;
