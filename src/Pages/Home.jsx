import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightText from "../components/core/Homepage/HighlightText";
import FSTButton from "../components/core/Homepage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/Homepage/CodeBlocks";
import TimelineSection from "../components/core/Homepage/TimelineSection";
import LearningLanguageSection from "../components/core/Homepage/LearningLanguageSection";
import InstructorSection from "../components/core/Homepage/InstructorSection";
import ExploreMore from "../components/core/Homepage/ExploreMore";

const Home = () => {
  return (
    <div>
  
      {/* {section 1} */}
      <div
        className="relative mx-auto flex flex-col width-11/12 items-center
              justify-between text-white"
      >
        <Link to={"/signup"}>
          <div
            className=" group mt-14  mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
                    transition-all duration-200 hover:scale-95 w-fit hover:border border-1 "
          >
            <div
              className="flex flex-row  gap-4 items-center transition-all duration-200 px-7 py-[10px] rounded-full
                        group-hover:bg-richblack-900 shadow-md hover:shadow-richblack-5"
            >
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="font-inter font-semibold text-richblack-5 mt-6 text-4xl">
          <p>
            Empower Your Future with <HighlightText text="Coding Skills" />
          </p>
        </div>
        <div className="text-richblack-300 w-7/12 max-w-max-content mt-4 text-center">
          <p>
            With our online coding courses, you can learn at your own pace, from
            anywhere in the world, and get access to a wealth of resources,
            including hands-on projects, quizzes, and personalized feedback from
            instructors.
          </p>
        </div>

        <div className="flex flex-row gap-7 mt-8">
          <FSTButton active={true} linkto={"/signup"}>
            Learn More
          </FSTButton>

          <FSTButton active={false} linkto={"/signup"}>
            Book a Demo
          </FSTButton>
        </div>

        <div className=" shadow-2xl shadow-blue-500  mt-14 border-r-[20px]  border-b-[20px]">
          <video muted loop autoPlay width="1035px" height="512px">
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* {codeSection1} */}

        <div className="w-9/12 mt-7">
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your <HighlightText text={" coding potential "} /> with
                our online courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            fstButton1={{
              text: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            fstButton2={{
              text: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeBlock={`<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n`}
          />
        </div>

        {/* {codeSection2} */}
        <div className="w-9/12 mt-7">
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Start <HighlightText text={" coding in seconds "} /> with our
                online courses.
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            fstButton1={{
              text: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            fstButton2={{
              text: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeColor={"text-pink-300"}
            codeBlock={`<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n`}
          />
        </div>

        <ExploreMore/>



      </div>

      {/* {section 2} */}

      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="bg_homepage h-[310px]">
          <div className="w-11/12 max-w-maxContent flex flex-col mx-auto  items-center justify-center  gap-5">
            <div className="h-[170px]"></div>
            <div className="flex flex-row gap-3 text-white">
              <FSTButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </FSTButton>

              <FSTButton active={false} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Learn More
                  <FaArrowRight />
                </div>
              </FSTButton>
            </div>
          </div>
        </div>

        <div className="w-10/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-7">
          <div className="flex flex-row gap-5 mt-[90px] mb-10">
            <div className="text-4xl font-bold w-[52%]">
              Get the skills you need for a
              <HighlightText text={"job that is in demand"} />
            </div>

            <div className=" flex flex-col gap-10 w-[45%] items-start">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <FSTButton active={true} linkto={"/signup"}>
                <div>Learn More</div>
              </FSTButton>
            </div>
          </div>
          <TimelineSection />
          <LearningLanguageSection />
        </div>
      </div>

      {/* {section 3} */}

      <div className="flex flex-col w-11/12 mx-auto mt-[80px] max-w-maxContent items-center justify-between
      gap-8 first-letters bg-richblack-900 text-white">
        
      <InstructorSection/>
      <h2 className="mt-[150px] text-4xl font-bold">Reviews from other Learners</h2>
        

      </div>

      {/* {footer} */}
    </div>
  );
};

export default Home;
