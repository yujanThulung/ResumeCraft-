import React, { useState } from "react";
import { templates } from "../../../data/index.data";
import { sampleData } from "../../../data/index.data";
import { ResumeTemplateCard } from "../../../components";
import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleTemplates } from "../../../features/uiSlice";
import { motion, AnimatePresence } from "framer-motion";

const Templates = () => {
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const data = sampleData[1];

    const showTemplates = useSelector((state) => state.ui.showTemplates);
    const dispatch = useDispatch();

    const TemplateComponent = selectedTemplate?.component;

    // console.log(selectedTemplate);
    return (
        <div className="flex flex-col md:flex-row">
            <AnimatePresence>
                {showTemplates && (
                    <motion.div
                        key="templates-drawer"
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "-100%", opacity: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="relative flex flex-col justify-center items-center bg-green-50"
                    >
                        <h2 className="text-2xl font-semibold text-cyan-600 py-4">
                            Select a template
                        </h2>

                        <button className="absolute top-6 right-6 text-gray-600">
                            <FiX size={24} onClick={() => dispatch(toggleTemplates())} />
                        </button>

                        <div className="grid grid-cols-1 gap-4 pt-10 gap-y-14 p-4 md:grid-cols-2">
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
                    </motion.div>
                )}
            </AnimatePresence>

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

export default Templates;
