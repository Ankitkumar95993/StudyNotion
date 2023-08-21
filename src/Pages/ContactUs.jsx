import React from 'react';
import Footer from '../components/common/Footer';
import ContactUsForm from "../components/core/ContactPage/ContactUsForm";
import {IoIosChatboxes} from "react-icons/io";
import {MdMyLocation} from "react-icons/md";
import {MdCall} from "react-icons/md"
 

const ContactUs = ()=>{

    return( 
    <div className="flex flex-col">
        <div className=' flex mx-auto w-[80%] gap-x-10 justify-evenly mt-[100px]'>
            <div className='flex flex-col bg-richblack-800 h-[380px] rounded-md gap-y-8 p-10'>
                <div>
                    <div className='flex gap-3 items-center'>
                    <IoIosChatboxes w="20px" h="20px" color="white"/>
                    <h1 className='text-lg text-richblack-5 font font-semibold'>Chat On Us</h1>
                    </div>
                    <p className='text-richblack-500 px-6'>Our friendly team is here to help.</p>
                    <p className='text-richblack-500 px-6'>@mailaddress</p>
                </div>
                <div>
                    <div className='flex gap-3 items-center'>
                    <MdMyLocation w="20px" h="20px" color="white"/>
                    <h1 className='text-lg text-richblack-5 font font-semibold'>Visit Us</h1>
                    </div>
                    <p className='text-richblack-500 px-6'>Come and say hello at our office HQ</p>
                    <p className='text-richblack-500 px-6'>Here is the location/address</p>
                </div>
                <div>
                    <div className='flex gap-3 items-center'>
                    <MdCall w="20px" h="20px" color="white" />
                    <h1 className='text-lg text-richblack-5 font font-semibold'>Call Us</h1>
                    </div>
                    <p className='text-richblack-500 px-6'> Mon - Fri from 8am to 5pm</p>
                    <p className='text-richblack-500 px-6'>+1234567890</p>
                </div>
            </div>
            <div className='flex flex-col border-2 border-richblack-700 rounded-md w-[60%] justify-start p-5'>
            <h1 className='text-3xl text-richblack-5 mt-5 w-[75%] mx-auto'>Got a Idea? We’ve got the skills. Let’s team up</h1>
            <p className='text-[14px] text-richblack-600 mt-5 text-left w-[75%] mx-auto'>Tall us more about yourself and what you’re got in mind.</p>
            <ContactUsForm/>
            </div>
         </div>

            <div className='mt-[100px]'>
                <Footer/>
            </div>

            {/* Reveiews from other */}
            <section>
                
            </section>
            
        

        </div>
        

    )

}

export default ContactUs;