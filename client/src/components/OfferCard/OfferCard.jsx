import React from "react";

const OfferCard = ({ icon, text }) => {
    return (
        <div
            className="flex items-center gap-6
                border border-white/10 bg-white/5
               p-5 rounded-md 
               backdrop-blur-md  backdrop-opacity-5shadow-lg"
        >
            <div className="w-12 h-12 bg-white rounded-md p-1">
                {typeof icon === "string" ? (
                    <img src={icon} alt="" className="w-10 h-auto" />
                ) : (
                    icon
                )}
            </div>
            <p className="text-white font-semibold">{text}</p>
        </div>
    );
};

export default OfferCard;
