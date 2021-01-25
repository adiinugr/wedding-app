import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

export default function CustomHeader({ children, link = "" }) {
  return (
    <div className="bg-green-500 p-3 flex page-header items-center rounded-md text-gray-50 font-medium ">
      <Link to={link}>
        <div>
          <MdKeyboardArrowLeft size={24} className="cursor-pointer" />
        </div>
      </Link>
      <div className="ml-3">{children}</div>
    </div>
  );
}
