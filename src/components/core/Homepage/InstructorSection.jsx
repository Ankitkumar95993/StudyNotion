import React from "react";
import InstructorImage from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import FSTButton from "./Button";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
  return (
    <div>
      <div className="flex flex-row">
        <div className="w-[60%]">
          <img src={InstructorImage} alt="instructorImage" className="border-t-8 border-l-8 border-white shadow-2xl shadow-blue-500" />
        </div>

        <div className="flex flex-col w-[35%] justify-center gap-10  max-w-maxContent">
          <p className="text-4xl text-bold w-[50%]">
            Become an
            <HighlightText text={"instructor"} />
          </p>
          <p className="text-[16px] text-richblack-300 ">
            {" "}
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>
          
          <div className="w-fit">
          <FSTButton active={true} linkto={"/signup"}>
               <div className="flex flex-row gap-2 items-center">
                Start Teaching Today
                <FaArrowRight/>
                </div> 
          </FSTButton>

          </div>
          
         
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
