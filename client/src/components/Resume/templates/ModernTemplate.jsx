import React from "react";

const ModernTemplate = ({ data }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      {/* Header */}
      <div className="border-b pb-4 mb-4">
        <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
        <p className="text-gray-600">{data.title}</p>
        <p className="text-gray-500">{data.email} | {data.phone}</p>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Experience</h2>
        {data.experience.map((exp, i) => (
          <div key={i} className="mb-2">
            <h3 className="font-semibold">{exp.role} - {exp.company}</h3>
            <p className="text-sm text-gray-600">{exp.duration}</p>
            <p className="text-sm">{exp.description}</p>
          </div>
        ))}
      </div>

      {/* Education */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        {data.education.map((edu, i) => (
          <div key={i} className="mb-2">
            <h3 className="font-semibold">{edu.degree}</h3>
            <p className="text-sm text-gray-600">{edu.institution}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModernTemplate;
