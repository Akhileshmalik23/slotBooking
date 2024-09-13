import { FaRegUser, FaCaretDown } from "react-icons/fa";
import { TbBell } from "react-icons/tb";
import { LuMessagesSquare } from "react-icons/lu";
import logo from "../../app/logo.png";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="text-white p-4 flex flex-col sm:flex-row justify-between items-center" style={{ backgroundColor: "#01B0F1" }}>
      <div className="flex items-center mb-4 sm:mb-0">
        <Image src={logo} alt="Logo" width={50} height={50} />

        <div className="flex items-center">
          <div className="text-white text-2xl font-bold">
            <span className="ml-2">Grad</span><span className="text-black">Hub</span>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-4">
        <div className="p-2 rounded-xl" style={{ backgroundColor: "#DCF6FF" }}>
          <LuMessagesSquare className="text-black text-xl cursor-pointer" />
        </div>
        <div className="p-2 rounded-xl" style={{ backgroundColor: "#DCF6FF" }}>
          <TbBell className="text-black text-xl cursor-pointer" />
        </div>
        <div className="p-2 rounded-xl flex" style={{ backgroundColor: "#DCF6FF" }}>
          <FaRegUser className="text-black text-xl cursor-pointer" />
          <FaCaretDown className="text-black cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
