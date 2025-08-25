import React from "react";
import { FiCheck, FiCheckCircle } from "react-icons/fi";

const ResumeTemplateCard = ({ id, name, image, onClick, width, selected }) => {
    return (
        <div
            key={id}
            onClick={onClick}
            className={`flex-none snap-center  ${width}  rounded-lg relative overflow-hidden shadow-md no-scroll ${
                selected ? "border-green-500 border-2" : "border border-transparent"
            }`}
        >
            <div className="relative group">
                <img src={image} alt={name} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 opacity-0 hover:opacity-50 group-hover:bg-gray-900/80 group-hover:backdrop-blur-sm transition duration-300 flex items-center justify-center">
                    {" "}
                </div>
            </div>

            {selected && (
    <div className="absolute bottom-0 right-0 flex items-center justify-center text-white text-2xl rounded-tl-full bg-green-500 w-12 h-10 ">
        <FiCheck />
    </div>
)}


            <div className="p-4 text-center">
                <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
            </div>
        </div>
    );
};

export default ResumeTemplateCard;
