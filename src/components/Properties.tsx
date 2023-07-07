import React from "react";
import yes from "../assets/checkmark.png";
import no from "../assets/close.png";

const Properties = (props) => {
    const {istr, des} = props;
    const setcolor = istr ? "text-black " : "text-gray-400 "

  return (
    <div className="my-2 flex items-center">
        <div>
            {istr ? <img src={yes} alt="yes" className="h-3 w-3 mr-2" /> : <img src={no} alt="no" className="h-3 w-3 mr-2 " />}
        </div>

        <div className={setcolor}>
            {des}
        </div>
    </div>
  )
}

export default Properties;