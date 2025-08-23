import React from "react";
import { 
  FiHome, 
  FiFileText, 
  FiPlusSquare, 
  FiEdit, 
  FiMail, 
  FiUser 
} from "react-icons/fi";

export const sections = [
  {
    type: "single",
    name: "Dashboard Home",
    path: "/dashboard",
    icon: <FiHome className="text-lg" />,
  },
  {
    type: "group",
    name: "Resumes",
    icon: <FiFileText className="text-lg" />,
    items: [
      { name: "My Resumes", path: "/dashboard/resumes", icon: <FiFileText className="text-sm" /> },
      { name: "Resume Builder", path: "/dashboard/resume-builder", icon: <FiPlusSquare className="text-sm" /> },
      { name: "Resume Editor", path: "/dashboard/resume-editor", icon: <FiEdit className="text-sm" /> },
    ],
  },
  {
    type: "group",
    name: "Cover Letters",
    icon: <FiMail className="text-lg" />,
    items: [
      { name: "My Cover Letters", path: "/dashboard/cover-letter", icon: <FiMail className="text-sm" /> },
      { name: "Cover Letter Builder", path: "/dashboard/cover-letter-builder", icon: <FiPlusSquare className="text-sm" /> },
      { name: "Cover Letter Editor", path: "/dashboard/cover-letter-editor", icon: <FiEdit className="text-sm" /> },
    ],
  },
  {
    type: "single",
    name: "Profile",
    path: "/dashboard/profile",
    icon: <FiUser className="text-lg" />,
  },
];
