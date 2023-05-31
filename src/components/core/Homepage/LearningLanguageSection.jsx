import HighlightText from "./HighlightText";
import Image2 from "../../../assets/Images/Compare_with_others.png";
import Image1 from "../../../assets/Images/Know_your_progress.png";
import Image3 from "../../../assets/Images/Plan_your_lessons.png";
import FSTButton from "../../core/Homepage/Button";

const LearningLanguageSection = () => {
  return (
    <div>
      <div className="flex flex-col   mt-[130px] items-center justify-center mb-[100px]">
        <div className="text-4xl font-bold">
          Your swiss knife for <HighlightText text={"learning any language"} />
        </div>
        <div className="text-base text-richblack-600  w-[70%] text-center font-medium mt-4">
          <p>
            Using spin making learning multiple languages easy. with 20+
            languages realistic voice-over, progress tracking, custom schedule
            and more.
          </p>
        </div>

        <div className="flex flex-row items-center justify-center mt-5 ">
          <img
            src={Image1}
            alt="Know your progress"
            className=" object-contain -mr-36"
          />

          <img
            src={Image2}
            alt="compare with others"
            className="object-contain "
          />

          <img
            src={Image3}
            alt="plan your lessons"
            className="object-contain -ml-36"
          />
        </div>

        <FSTButton active={true} linkto="/signup">
          Learn More
        </FSTButton>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
