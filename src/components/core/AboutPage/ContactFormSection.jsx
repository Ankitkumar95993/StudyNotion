import React from "react";
import ContactUsForm from "../ContactPage/ContactUsForm";

const ContactFormSection = () =>{
    return(
        <div className="mx-auto w-[60%] flex flex-col justify-center items-center mt-[100px]">
             <h1 className="text-3xl text-richblack-5 font-semibold">Get In Touch</h1>
             <p className="text-[14px] text-richblack-300 mt-4">
             We’d love to here for you, Please fill out this form.
             </p>
          <div>
            <ContactUsForm/>
          </div>
 


        </div>
    )
}

export default ContactFormSection;