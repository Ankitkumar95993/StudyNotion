import HighlightText from "../Homepage/HighlightText";
import CTAButton from "../Homepage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText:"Anyone, Anywhere",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText:"learn More",
    BtnLink:"/",
  },
  {
    order:1,
    heading:"Curriculum Based on Industry Needs",
    description:"Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs."
  },
  {
    order:2,
    heading:"Our Learning",
    description:"The learning process uses the namely online and offline."
  },
  {
    order:3,
    heading:"Certification",
    description:"You will get a certificate that can be used as a certification during job hunting."
  },
  {
    order:4,
    heading:"Rating Auto-grading",
    description:"You will immediately get feedback during the learning process without having to wait for an answer or response from the mentor."
  },
  {
    order:5,
    heading:"Ready to Work",
    description:"Connected with over 150+ hiring partners, you will have the opportunity to find a job after graduating from our program."
  }

];

const LearningGrid = () => {
  return (
    <div className="grid mx:auto grid-col-1 lg:grid-cols-4 p-5 mb-10" >
    {
        LearningGridArray.map((card,index)=>{
            return(
                <div key={index}
                 className = {`${index===0 && "lg:col-span-2 lg:h-[280px] p-5 bg-richblack-900"}
                 ${(card.order) % 2 === 1 ? "bg-richblack-700 lg:h-[280px] p-5" : "bg-richblack-800 lg:h-[280px] p-5"} 
                 ${card.order === 3 && "lg:col-start-2"}`
                }
                 >
                    {
                        card.order<0
                        ?(<div className="lg:w-[90%] pb-5 gap-3 ">
                            <div className="font-semibold text-4xl text-richblack-5">
                                {card.heading}
                                <HighlightText text={card.highlightText}/>
                            </div>
                            <p className="font-medium text-[14px] text-richblack-200 mt-3">{card.description}</p>
                            <div className="w-fit mt-10">
                                <CTAButton active={true}  linkto={card.BtnLink}>{card.BtnText}</CTAButton>
                                  
                            </div>
                        </div>)
                        :(<div className="flex flex-col gap-8 p-7">
                          <div className="text-richblack-5 text-lg">
                                {card.heading}
                          </div>
                           
                            <p className="text-[14px] text-richblack-300 font-medium">{card.description}</p>
                        </div>)

                    }
                </div>
            )
        })
    }
  </div>

  )
 
};

export default LearningGrid;
