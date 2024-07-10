import React from "react";
import { useNavigate } from "react-router-dom";

const TopNav = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed w-full bg-white text-black sticky-top">
      <div className="flex justify-start gap-2 items-center px-8 py-4">
        <div onClick={() => navigate(-1)} className="cursor-pointer text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-left"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-left">{title}</h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default TopNav;
