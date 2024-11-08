import React from "react";

const Heading = () => {
  return (
    <div className="mb-12">
      <h1 className="text-4xl text-main">
        Hello,{" "}
        <span className="font-bold bg-gradient-to-br from-custom-blue via-custom-aqua to-custom-green bg-clip-text text-transparent">
          Digital Fortress
        </span>
      </h1>
      <p className="text-lg mt-6 text-secondary-grey-dark">
        Login to platform to start creating magic
      </p>
    </div>
  );
};

export default Heading;
