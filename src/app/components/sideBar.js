import { SlHome, SlCalender } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineHelpOutline } from "react-icons/md";
export default function SideBar() {
  return (
    <div className="hidden h-[533px] w-[166px]  bg-white lg:flex md:flex flex-col justify-between items-center py-8">
      {/* Top Icons */}
      <div className="space-y-1">
        {/* Home */}
        <div className="flex justify-center items-center px-4 py-2 space-x-2">
          <SlHome className="text-2xl text-black" />
          <span className="text-base text-black">Home</span>
        </div>

        {/* Applicants */}
        <div className="flex justify-center items-center rounded-lg px-4 py-2 space-x-1" style={{backgroundColor:"#EAF9FF"}}>
          <FaRegUser className="text-2xl text-blue-600" />
          <span className="text-base text-blue-700">Applicants</span>
        </div>

        {/* Calendar */}
        <div className="flex justify-center items-center px-4 py-2 space-x-1">
          <SlCalender className="text-2xl text-black" />
          <span className="text-base text-black">Calender</span>
        </div>
      </div>

      {/* Bottom Icon */}
      <div className="flex justify-center items-center space-x-1">
        <MdOutlineHelpOutline className="text-2xl text-black" />
        <span className="text-sm text-black">Help</span>
      </div>
    </div>
  );
}
