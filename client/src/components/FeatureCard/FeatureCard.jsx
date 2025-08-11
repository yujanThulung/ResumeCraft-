import React from "react";

const FeatureCard = ({ icon, title, desc }) => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4 flex justify-center text-center">{icon}</div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-500 text-sm">{desc}</p>
        </div>
    );
};

export default FeatureCard;
