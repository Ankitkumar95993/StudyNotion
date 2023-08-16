import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { sendOtp } from "../services/operations/authAPI";
import OTPInput from 'react-otp-input';
import {signUp} from "../services/operations/authAPI"
const VerifyEmail = ()=>{
    
    const [otp,setOtp] = useState("");
    const {signupData,loading} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        if(!signupData){
            navigate("/signup");
        }
    },[]);

    const handleOnSubmit = (e)=>{
       e.preventDefault();
       const{
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        } = signupData;
       dispatch(signUp(accountType, firstName,lastName,email,password,confirmPassword,otp,navigate));

    }

    return(
        <div>
            {
                loading?(
                    <div>
                        ...Loading
                    </div>
                ):(
                    <div>
                        <h1>Verify Email</h1>
                        <p>A verification code has been sent to you. Enter the code below</p>
                        <form onSubmit={handleOnSubmit}>
                            <OTPInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderSeparator={<span>-</span>}
                            renderInput={(props) => <input {...props} />}
                            />
                            <button type='submit'>
                                Verify Email
                            </button>
                        </form>
                        <div>
                            <Link to="/login">
                                <p>Back To Login</p>
                            </Link>
                        </div>
                        <button onClick={()=>dispatch(sendOtp(signupData.email,navigate))}>
                            Resend Otp
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default VerifyEmail