import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import {Link} from "react-router-dom";
import { getPasswordResetToken } from "../services/operations/authAPI";
 
const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleOnSubmit = (e)=>{
    e.preventDefault();
    dispatch(getPasswordResetToken(email,setEmailSent));

  }



  return (
    <div className="text-white">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>{!emailSent ? "Reset Your Password" : "Check your Email"}</h1>
          <p>{!emailSent ? "" : ""}</p>
           
          <form onSubmit={handleOnSubmit}>
            {!emailSent && (
              <label>
                <p>Email Address*</p>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email Address"
                />
              </label>
            )}

             <button type="submit">
                {
                    emailSent ? "Reset Password":"Resend Email"
                }
            </button>
          </form>
          <div>
            <Link to="/login"><p>Back to login</p></Link>

          </div>
        </div>
      )}
    </div>
  );
};


export default ForgotPassword; 