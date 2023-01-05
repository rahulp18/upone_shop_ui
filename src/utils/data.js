import { BsPersonLinesFill } from "react-icons/bs";

import { CgProfile } from "react-icons/cg";
import { MdOutlineDashboard, MdOutlineSchedule } from "react-icons/md";

export const navLinks = [
  {
    id: 1,
    icon: <MdOutlineDashboard className="text-xl" />,
    link: "dashboard",
  },
  {
    id: 2,
    icon: <BsPersonLinesFill className="text-xl" />,
    link: "stafs",
  },
  {
    id: 3,
    icon: <MdOutlineSchedule className="text-xl" />,
    link: "appointments",
  },
  {
    id: 4,
    icon: <CgProfile className="text-xl" />,
    link: "profile",
  },
];
