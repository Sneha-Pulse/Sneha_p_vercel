import React from "react";
import { Puff } from "react-loader-spinner"; // Changed to Puff

function Loader() {
  return (
    <div className="flex justify-center py-72 max-[426px]:py-50">
      <Puff // Changed to Puff
        visible={true}
        height="150"
        width="150"
        color="#00B2DF"
        ariaLabel="puff-loading" // Updated ariaLabel
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;