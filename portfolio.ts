import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Harsh Anilkumar Ramani",
  title: "Hi all, I'm Harsh",
  description:
    "I'm a passionate Full Stack Developer with hands-on experience in building robust web applications using Python, Django, React.js, and cloud technologies. I thrive on learning new tools and frameworks, continuously pushing myself to stay updated with the latest in tech. Known for being self-driven and collaborative, I enjoy turning ideas into real-world solutions through clean, scalable code and effective teamwork.",
  resumeLink: "https://drive.google.com/file/d/1zeZL1xr2On5ZOmz-eVi99wgS8ZZ1JCrn/view?usp=sharing",
};

export const openSource = {
  githubUserName: "harshramani00",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:harshramani76@gmail.com",
  linkedin: "https://www.linkedin.com/in/ramani-harsh/",
  github: "https://github.com/harshramani00",
  //instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "ADAPTIVE FULL STACK DEVELOPER BUILDING CLOUD-NATIVE AND SCALABLE SOLUTIONS",
  data: [
    {
      title: "Full Stack & Cloud Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json",
      skills: [
        emoji("⚡ Creating responsive web apps and micro frontends using React.js and Next.js"),
        emoji("⚡ Automating deployment pipelines with GitHub Actions and Jenkins"),
        emoji("⚡ Optimizing databases with indexing, caching (Redis), and query tuning for high concurrency"),
      ],
      softwareSkills: [
        { skillName: "Python", iconifyTag: "logos:python" },
        { skillName: "Django", iconifyTag: "vscode-icons:file-type-django" },
        { skillName: "JavaScript", iconifyTag: "logos:javascript" },
        { skillName: "TypeScript", iconifyTag: "logos:typescript-icon" },
        { skillName: "Reactjs", iconifyTag: "vscode-icons:file-type-reactjs" },
        { skillName: "Nextjs", iconifyTag: "vscode-icons:file-type-light-next" },
        { skillName: "Nodejs", iconifyTag: "logos:nodejs-icon" },
        { skillName: "AWS", iconifyTag: "logos:aws" },
        { skillName: "Docker", iconifyTag: "logos:docker-icon" },
        { skillName: "Terraform", iconifyTag: "logos:terraform-icon" },
        { skillName: "MongoDB", iconifyTag: "logos:mongodb-icon" },
        { skillName: "PostgreSQL", iconifyTag: "logos:postgresql" },
        { skillName: "Redis", iconifyTag: "logos:redis" },
        { skillName: "GitHub", iconifyTag: "akar-icons:github-fill" },
        { skillName: "Jenkins", iconifyTag: "logos:jenkins" },
      ],
    },
  ],
};


export const educationInfo: EducationType[] = [
  {
    schoolName: "Stony Brook University, NY",
    subHeader: "Master of Science in Computer Science",
    duration: "August 2023 - May 2025",
    desc: "Relevant Coursework: Theory of Database Systems, Algorithms, Distributed Systems",
    grade: "",
    descBullets: [
      "Graduate coursework focused on scalable systems, data structures, and advanced databases",
      "Research assistant for gesture-based desktop control project using CV/ML"
    ],
  },
  {
    schoolName: "Mumbai University, India",
    subHeader: "Bachelor of Engineering in Computer Engineering",
    duration: "August 2019 - May 2023",
    desc: "Relevant Coursework: Data Structures, DBMS, Algorithms, Distributed Computing",
    grade: "",
    descBullets: [
      "Built scalable academic projects focused on real-time data handling and microservices",
      "Graduated with distinction in core CS fundamentals and system design"
    ],
  },
];


export const experience: ExperienceType[] = [
  {
    role: "Research Project Assistant",
    company: "Stony Brook University",
    companyLogo: "/img/icons/common/stonybrook.png", // Replace with your actual logo path if available
    date: "Aug 2024 – Dec 2024",
    desc: "Developed a gesture-based desktop control system using OpenCV, MediaPipe, and PyAutoGUI, improving accessibility and user interaction. Reduced gesture recognition latency by 25% by optimizing gesture-mapping algorithms with NumPy vectorized operations.",
  },
  {
    role: "Software Developer Intern",
    company: "Dharmanandan Techno Projects Pvt. Ltd.",
    companyLogo: "/img/icons/common/dtppl.png", // Replace with your actual logo path if available
    date: "June 2022 – July 2023",
    desc: "Redesigned REST API architecture and introduced Redis caching, reducing latency by 15%. Enhanced database performance by 40% through index tuning and query restructuring. Developed scalable user-focused features and automated CI/CD pipelines using Jenkins and GitLab.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Sparrow-Health",
    desc: "A full-stack telemedicine platform enabling secure authentication, real-time chat, appointment scheduling, and Stripe-powered billing. Tech stack: React.js, Node.js, MongoDB, AWS.",
    github: "https://github.com/harshramani00/Sparrow-Health",
  },
  {
    name: "ShareEdu",
    desc: "A microservices-based learning management system (LMS) for 10K+ users, featuring real-time collaboration, RESTful APIs, WebSocket communication, and AWS-backed infrastructure.",
    github: "https://github.com/harshramani00/ShareEdu",
  },
  {
    name: "Serverless Webapp",
    desc: "A serverless backend system with Terraform-based AWS provisioning, MySQL support, and CI/CD automation using GitHub Actions. Built with Node.js and Express.",
    github: "https://github.com/harshramani00/Serverless-Webapp",
  },
  {
    name: "StudyBuddy",
    desc: "A Discord-style real-time chat app for students using Django, REST APIs, and WebSockets. Supports collaborative study sessions and instant communication.",
    github: "https://github.com/harshramani00/StudyBuddy",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Harsh Ramani | Portfolio",
  description: greetings.description,
  author: "Hanzla Tauqeer",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Harsh",
    "Harsh Ramani",
    "@harshramani00",
    "harshramani00",
    "Portfolio",
    "Harsh Portfolio ",
    "Harsh Ramani Portfolio",
  ],
};
