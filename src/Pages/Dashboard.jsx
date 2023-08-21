import React from "react"
import { MdViewSidebar } from "react-icons/md";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";



const Dashboard = ()=>{

    const {loading:authLoading} = useSelector((state)=>state.auth);
    const {loading:profileLoading} = useSelector((state)=>state.profile);

    if(profileLoading || authLoading)
    {
        return (
            <div className="mt-10">
                Loading...
            </div>
        )
    }


    return(
        <div className="flex relative min-h-[calc(100vh-3.5rem)]">
            <Sidebar/>
            <div className="h-[calc(100vh-3.5rem)] overflow-auto">
                <div className="mx-auto w-11/12 max-w-[1000px] py-10">
                    <Outlet/>
                </div>

            </div>
             
        </div>
    )

} 