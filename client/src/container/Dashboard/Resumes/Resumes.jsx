import React, { useState } from "react";
import { templates } from "../../../data/index.data";
import { sampleData } from "../../../data/index.data";
import { ResumeTemplateCard } from "../../../components";

const Resumes = () => {
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const data = sampleData[1];

    const TemplateComponent = selectedTemplate?.component;

    console.log(selectedTemplate);
    return (
        <div className="flex flex-col md:flex-row">
            <div className="grid grid-cols-1 gap-4 gap-y-14 p-4 md:grid-cols-2">
                {templates.map((template) => (
                    <ResumeTemplateCard
                        key={template.id}
                        {...template}
                        onClick={() => setSelectedTemplate(template)} 
                        width={"w-60"}
                        selected={selectedTemplate?.id === template?.id}
                    />
                ))}
            </div>

            <div>
                {TemplateComponent ? (
                    <TemplateComponent data={data} />
                ) : (
                    <p>Please select a template</p>
                )}
            </div>
        </div>
    );
};

export default Resumes;
