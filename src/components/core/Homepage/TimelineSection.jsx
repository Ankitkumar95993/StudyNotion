import React from "react";

import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";

const timeline = [
  {
    Logo: Logo1,
    heading: "Leadership",
    Description: "Fully committed to the success company",
  },
  {
    Logo: Logo2,
    heading: "Responsibility",
    Description: "Students will always be our top priority",
  },
  {
    Logo: Logo3,
    heading: "Flexibility",
    Description: "The ability to switch is an important skills",
  },
  {
    Logo: Logo4,
    heading: "Solve the problem",
    Description: "Code your way to a solution",
  },
];

const TimelineSection = () => {
  return (
    <div>
      <div className="flex flex-row gap-[60px] items-center justify-space-between max-w-maxContent">
        <div className="flex flex-col w-[40%] gap-[60px] divide-x divide-dotted">
          {timeline.map((element, index) => {
            return (
              <div className="flex flex-row gap-6 " key={index}>
                <div className="w-[50px] h-[50px] bg-white rounded-full flex
                items-center justify-center">
                  <img src={element.Logo} alt="logo" />
                </div>
                <div>
                  <h2 className="font-semibold text-[18px]">
                    {element.heading}
                  </h2>
                  <p className="text-base">{element.Description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="realtive shadow-2xl shadow-blue-200 border-8 border-t-white border-l-white">
            <img src={timelineImage} alt="timeline" className="h-fit object-cover"/> 

           <div className="absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-10
            translate-x-[55px] translate-y-[-50px]">

            <div className="flex flex-row gap-5 px-7 items-center border-r border-caribbeangreen-300">
                <p className="text-3xl font-bold ">10</p>
                <p className="text-sm text-caribbeangreen-300 ">Years Of Experience</p>

            </div>

            <div className="flex  gap-5 px-7 items-center">
                <p className="text-3xl font-bold ">250</p>
                <p className="text-sm text-caribbeangreen-300 ">Types Of Courses</p>

            </div>

            
           </div>
       
        </div>
    
      </div>
    </div>
  );
};

export default TimelineSection;
