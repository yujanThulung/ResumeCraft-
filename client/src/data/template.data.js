import { t1, t2, t3 } from "../assets/index.assets";

import {
    ModernTemplate,
    // CreativeTemplate,
    ClassicTemplate,
    MinimalTemplate,
    // BoldTemplate,
    // TechSavvyTemplate,
    // ProfessionalTemplate,
} from "../components/Resume/templates/index.template";

export const templates = [
    {
        id: 1,
        name: "Modern Professional",
        image: t1,
        description: "A sleek and modern design perfect for professionals.",
        component: ModernTemplate,
    },
    {
        id: 2,
        name: "Creative Designer",
        image: t2,
        description: "A modern and creative design perfect for designers.",
        component: "CreativeTemplate",
    },
    {
        id: 3,
        name: "Classic Elegance",
        image: t3,
        description: "A classic and elegant design perfect for professionals.",
        component: ClassicTemplate,
    },
    {
        id: 4,
        name: "Minimalist Style",
        image: t1,
        description: "A minimalist design that focuses on simplicity and clarity.",
        component: MinimalTemplate,
    },
    {
        id: 5,
        name: "Bold Impact",
        image: t2,
        description: "A bold design that makes a strong impression.",
        component: "BoldTemplate",
    },
    {
        id: 6,
        name: "Tech Savvy",
        image: t3,
        description: "A tech-inspired design for those in the tech industry.",
        component: "TechTemplate",
    },
];
