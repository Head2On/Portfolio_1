import { bmw, tesla, wipro, spotify } from "../assets_3d_portfolio/assets/icons";
import {
    calculator,
    css,
    express,
    git,
    github,
    html,
    javascript,
    java,
    python,
    linkedin,
    mongodb,
    mysql,
    nextjs,
    nodejs,
    react,
    resume,
    docker,
    stopwatch,
    summiz,
    tailwindcss,
    TicTac,
    typescript,
    web
} from "../assets_3d_portfolio/assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl:docker,
        name: "Docker",
        type: "Data Management",
    },
    {
        imageUrl:mysql,
        name: "Mysql",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Web Developer",
        icon: web,
        date: "Oct 2024 - Nov 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Resume',
        iconUrl: resume,
        link: 'https://drive.google.com/file/d/1BHvmunu3omSgtQYkB03ej76x0tqd9tfI/view?usp=drive_link',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Head2On',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ishanbauri',
    },
];

export const projects = [
    {
        iconUrl: calculator,
        theme: 'btn-back-red',
        name: 'Calculator',
        description: 'Its ac bsic calculator but i add more functoin in latter days, I want to create all binary to deci and so on...',
        link: 'https://github.com/Head2On/Calculator',
    },
    {
        iconUrl: TicTac,
        theme: 'btn-back-green',
        name: 'Tic Tac Toe Game',
        description: 'Interactive UI for x and O Restart button to reset the game prervent further clicks after a win or draw. Responsive designe for both mobile and desktop..',
        link: 'https://github.com/Head2On/PRODIGY_WD_03',
    },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    {
        iconUrl: stopwatch,
        theme: 'btn-back-pink',
        name: 'Basic Stopwatch',
        description: 'This is a simple yet functional stopwatch web application built with HTML, CSS, and JavaScript. The app allows users to easily track elapsed time with features such as start, pause, reset, and lap recording.',
        link: 'https://github.com/Head2On/PRODIGY_WD_02',
    },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Chatbot ',
        description: 'Its a bsic chatbot that is not proper ready.',
        link: 'https://github.com/Head2On/Chatbot-dev',
    }
];