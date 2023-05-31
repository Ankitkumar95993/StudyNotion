import React from "react";

const HighlightText = ({text})=>{
    return(
        <span className="bg-gradient-to-r from-blue-300 via-green-200 to-blue-400 inline-block text-transparent bg-clip-text text-bold">
              {text}
        </span>
    )
}

export default HighlightText;