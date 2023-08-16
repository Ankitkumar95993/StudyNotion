import React from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HighlightText from "./HighlightText";
import { useState } from "react";
import CourseCard from "./CourseCard";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <>
      <div className="text-4xl font-semibold text-center">
        Unlock the <HighlightText text={"Power Of Code"} />
      </div>
      <p className="text-richblack-300 text-center mt-3">
        Learn To Build Anything You Can Imagine
      </p>

      <div
        className="flex flex-row rounded-full bg-richblack-800 mb-10 border border-richblack-300 mt-4 gap-2 
            px-1 py-1"
      >
        {tabsName.map((element, index) => {
          return (
            <div
              className={`text-[16px] flex flex-row item-center gap-2
                        ${
                          currentTab === element
                            ? "bg-richblack-900 text-richblack-5 font-medium"
                            : " text-richblack-200"
                        } rounded-full transition-all duration-200 cursor-pointer 
                        hover:bg-richblack-900 hover:text-richblack-5 p-2 `}
              key={index}
              onClick={() => setMyCards(element)}
            >
              {element}
            </div>
          );
        })}
      </div>

      <div className="lg:h-[150px]"></div>

      {/* course card ka group */}

      <div className=" w-11/12  mt-[50px] lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap  lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black lg:mb-0 mb-7 lg:px-0 px-3">
        {courses.map((element, index) => {
          return (
            <CourseCard
              key={index}
              cardData={element}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>
    </>
  );
};
export default ExploreMore;
