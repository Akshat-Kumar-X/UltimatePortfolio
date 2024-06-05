import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    pricewise,
    sumz,
    rentaride,
    aimeds,
    metaverse,
    grow,
    school,
    vit,
    iquest,
    finance
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Education",
    },
    {
      id: "tech",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Problem Solving",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "ST Teresa School",
      company_name: "CBSE",
      icon: school,
      iconBg: "#89CFF0",
      date: "2019 - 2022",
      points: [
        "CBSE Class 10th | Aggregate: 90%",
        "CBSE Class 12th | Aggregate: 86%"
      ],
    },
    {
      title: "Vellore Institute of Technology",
      company_name: "Vellore",
      icon: vit,
      iconBg: "#ffffff",
      date: "2022 - 2026",
      points: [
        "BTech, Computer Science and Engineering | CGPA: 8.5",
      ],
    },
    {
      title: "Technical Head",
      company_name: "Innovator's Quest VIT",
      icon: iquest,
      iconBg: " #000000",
      date: "2023 - 2024",
      points: [
        "Organized and Managed Hackathons, Workshops and Seminars.",
        "Contributing to Official Club Website"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Solved 300+ programming question on Code Chef and 100+ DSA questions on LeetCode",
      name: "Akshat_Kumar11",
      designation: "LeetCode",
      company: "Acme Co",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4h4yf5vhuu8_Dqf5VC1l1tFbIJ88N4H24jg&s",
    },
    {
      testimonial:
        "Developed AI-Meds which Secured 7th position in Technica 24 Hackathon by ISTE VIT",
      name: "ISTE VIT",
      designation: "Technica 24",
      company: "DEF Corp",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLo-fP7MQjiWSdmSn8rkuapP8LO6gwpSbwxw&s",
    },
    {
      testimonial:
        "Achieved 80K+ YouTube subscribers through Design Creation, Editingand Audience Outreach",
      name: "Demon Clan",
      designation: "Youtube",
      company: "456 Enterprises",
      image: "https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg",
    },
  ];
  
  const projects = [
    {
      name: "PriceWise",
      description:
        "E-Commerce Price Tracking Full Stack application using Web Scrapping Technologies as well as Next.js and React.js. Developed a RESTful API to monitor real-time price changes",
      tags: [
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
        {
          name: "WebScraping",
          color: "pink-text-gradient",
        },
      ],
      image: pricewise,
      source_code_link: "https://github.com/",
      url: "https://pricewise-dun.vercel.app/"
    },
    {
      name: "Rent a Ride",
      description:
        "Fully Functional Car Rental Portal using PHP, Bootstrap and MySQL also Created an Admin Panel Implementing CRUD operations to manage rent requests and update cars for rent.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: rentaride,
      source_code_link: "https://github.com/",
      url: "https://rent-a-carr.great-site.net/"
    },
    {
      name: "AI-Meds",
      description:
        "Personalized AI Health Care platform for Patients and Doctors using Machine Learning for identifying Diseases and React.js, Executed CRUD operations for seamless Doctor Appointment Scheduling",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "MachineLearning",
          color: "green-text-gradient",
        },
        {
          name: "CRUD",
          color: "pink-text-gradient",
        },
      ],
      image: aimeds,
      source_code_link: "https://github.com/",
      url: "https://ai-meds.netlify.app/"
    },
    {
      name: "Metaverse",
      description:
        "Responsive Front End Web application using Framer Motion and React.js interactive Front-End experience using advanced Framer Motion animations, focusing on modern UI/UX principles",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "UI/UX",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: metaverse,
      source_code_link: "https://github.com/",
      url: "https://metaverse-world-madness.vercel.app/"
    },
    {
      name: "SumZ",
      description:
        "Intelligent Article and Website Summarizer Tool using OpenAI API and React.js Used OpenAI API’s advanced language models and API to generate concise and accurate summaries",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
      ],
      image: sumz,
      source_code_link: "https://github.com/",
      url: "https://sumz-openai-summerizer.netlify.app/"
    },
    {
      name: "Finance Market",
      description:
        "Implemented cutting-edge design techniques to deliver a seamless browsing experience with cross-browser compatibility Engineered a visually stunning and responsive user interface,",
      tags: [
        {
          name: "Next",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "Responsive",
          color: "pink-text-gradient",
        },
      ],
      image: finance,
      source_code_link: "https://github.com/",
      url: "https://akshat-batch-systems.vercel.app/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };