import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SidebarLinks } from "../../../data/dashboard-links";
import { logout } from "../../../services/operations/authAPI";
import { SidebarLink } from "./SidebarLink";
import {VscSignOut} from 'react-icons/vsc'
import ConfirmationalModal from '../../common/ConfirmationalModal';



const Sidebar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirmationalModal, setConfirmationalModal] = useState(null); 
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  );
  const { loading: authLoading } = useSelector((state) => state.profile);

  if (profileLoading || authLoading)
    return <div className="mt-10">...Loading</div>;

  return (
    <div>
      <div
        className="flex flex-col min-w-[222px] border-r-[1px] border-r-richblack-700
        h-[calc(100vh-3.5rem)] bg-richblack-800 py-10"
      >
        <div>
          {SidebarLinks.map((link, index) => {
            if (link.type && user?.accountType !== link.type) return null;
            return (
              <SidebarLink key={link.id} link={link} iconName={link.icon} />
            );
          })}
        </div>
        <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 richblack-600"></div>

        <div>
            <SidebarLink  link = {{name:"setting",path:"dashboard/settings"}}
            iconName={VscSettingsGear}
            />
        </div>

        <button onClick={()=>setConfirmationalModal({
          text1:"Are yor sure ?",
          text2:" You will be logged out of your Account",
          btn1text:"Logout",
          btn2text:"Cancle",
          btn1Handler:()=>dispatch(logout(navigate)),
          btn2Handler:()=>setConfirmationalModal(null),
        })}
         className="font-medium text-sm text-richblack-300">


          <div className="flex items-center gap-x-2">
            <VscSignOut className="text-lg"/>
            <span>logout</span>

          </div>
         </button>

      </div>
      {confirmationalModal && <ConfirmationalModal modalData={confirmationalModal}/>}
    </div>
  );
};

export default Sidebar;