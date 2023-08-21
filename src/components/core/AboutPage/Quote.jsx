import HighlightText from "../Homepage/HighlightText"

const Quote=()=>{
    return(
        <div className="text-3xl text-richblack-400 font-semibold">
            "We are passionate about revolutionizing the way we learn. Our innovative platform <span>{" "}</span>
            <HighlightText text={"combines technology"}/>
            <span className="text-brown-300">
                {" "}
                expertise
                {" "}
            </span>
            and community to create an
            <span className="text-brown-300">
                {" "}
                unparalleled educational experience."
            </span>


        </div>
    )
}
export default Quote;