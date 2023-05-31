import react from "react";

const courseCard = ({cardData,currentCard,setCurrentCard})=>{

    return (
        <div className="flex flex-col bg-richblack-700">

            <div className="text-xl text-black ">{cardData.course.heading}</div>
            <div className="text-sm text-richblack-300">{cardData.course.description}</div>
            <div className="flex flex-row" >

                <div>{currentCard.cardData.courses.level}</div>

                <div>{cardData.courses.lessonNumber}</div>

            </div>
              

        </div>
    )


}

export default courseCard;