import React from "react";
import { FaArrowRight } from "react-icons/fa";
import FSTButton from "./Button";
import { TypeAnimation } from 'react-type-animation';

const CodeBlocks = ({
  position,
  heading,
  subheading,
  fstButton1,
  fstButton2,
  codeBlock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    // {section1}
    <div className={`flex ${position} my-20 justify-between gap-24`}>
      {/* {section1} */}
      <div className="w-[50%] flex-col gap-8">
        {heading}
        <div className="text-richblack-300 font-bold mt-4">{subheading}</div>

        <div className="flex gap-7 mt-14">
          <FSTButton active={fstButton1.active} linkto={fstButton1.linkto}>
            <div className="flex gap-2 items-center ">
              {fstButton1.text}
              <FaArrowRight />
            </div>
          </FSTButton>

          <FSTButton active={fstButton2.active} linkto={fstButton2.linkto}>
            {fstButton2.text}
          </FSTButton>
        </div>
      </div>

      {/* // { section2 } */}
      <div className="flex h-fit flex-row text-10px w-[100%] lg:w-[500px] py-3 bg-richblack-800">
        {/* {hw - create backgroundGradient } */}

        <div className="text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>

        <div
          className={`w-[90%] flex flex-col gap-2 pr-2 ${codeColor} font-mono font-bold`}
        >
          <TypeAnimation 
          sequence={[codeBlock, 5000, ""]} 
          repeat={Infinity} 
          cursor={true}
          style={
            {
              whiteSpace:"pre-line",
              display:"block"

            }
          }
          omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>

    // (section2)
  );
};

export default CodeBlocks;
