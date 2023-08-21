import React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../../services/apiconnector";
import { contactusEndpoint } from "../../../services/apis";
import CountryCode from "../../../data/countrycode.json";
// import Countryc

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    console.log("Logging data", data);
    try {
      setLoading(true);
      //   const response = await apiConnector(
      //     "POST",
      //     contactusEndpoint.CONTACT_US_API,
      //     data
      //   );
      const response = { status: "OK" };
      console.log("Logging response", response);
      setLoading(false);
    } catch (error) {
      console.log("ERROR:", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form onSubmit={handleSubmit(submitContactForm)}>
      <div className="flex flex-col gap-8 w-[80%] mx-auto mt-11 leading-4">
        {/* firstName */}
        <div className="flex gap-5 w-full">
          <div className="flex flex-col gap-3">
            <label htmlFor="firstname" className="text-white">First Name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter first name"
              className="text-white bg-richblack-800 rounded-md px-6 py-3 border-b-2 border-richblack-600"
              {...register("firstname", { required: true })}
            />
            {errors.firstname && <span>Please enter your name</span>}
          </div>

          {/* lastName */}
          <div className=" flex flex-col w-full gap-3">
            <label htmlFor="lastname" className="text-white">Last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Enter last name"
              className="text-white bg-richblack-800 rounded-md px-6 py-3 border-b-2 border-richblack-600"
              {...register("lastname", { required: true })}
            />
          </div>
        </div>

        {/* {email Address} */}
        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="text-white">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            className="text-white bg-richblack-800 rounded-md px-6 py-3 border-b-2 border-richblack-600"
            {...register("email", { required: true })}
          />
          {errors.email && <span>Please provide your email</span>}
        </div>

        {/* {phone Number} */}
        <div className="flex flex-col gap-3 ">
          <label htmlFor="phoneNo" className="text-white">Phone Number</label>
          <div className="flex flex-row gap-3">
            {/* {dropdown} */}

            <select
              name="dropdown"
              id="dropdown"
              className="text-white w-[25%] bg-richblack-800 rounded-md  border-b-2 border-richblack-600 text-left"
              {...register("countrycode", { required: true })}
            >
              {CountryCode.map((element, index) => {
                return (
                  <option key={index} value={element.code}>
                    {element.code} -{element.country}
                  </option>
                );
              })}
            </select>

            <input
              type="number"
              name="phoneNo"
              id="phoneNo"
              placeholder="12345 67890"
              className="text-white w-full bg-richblack-800 rounded-md px-6 py-3 border-b-2 border-richblack-600"
              {...register("phoneNo", {
                required: {
                  value: true,
                  message: "Please enter phone number",
                },
                maxLength: { value: 10, message: "Invalid Phone Number" },
                minLength: { value: 8, message: "Invalid Phone Number" },
              })}
            />
            {errors.phoneNo && <span>{errors.phoneNo.message}</span>}
          </div>
        </div>

        {/* message */}
        <div className="flex flex-col gap-3">
          <label htmlFor="message" className="text-white">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            placeholder="Enter your message here"
            className="text-white bg-richblack-800 rounded-md px-6 py-3 border-b-2 border-richblack-600"
            {...register("message", { required: true })}
          />
          {errors.message && <span>Please enter you message</span>}
        </div>

        <div className="text-2xl bg-yellow-50 rounded-md text-center text-black px-4 py-2">
          <button type="submit">Send Message</button>
        </div>
      </div>
    </form>
  );
};
export default ContactUsForm;
