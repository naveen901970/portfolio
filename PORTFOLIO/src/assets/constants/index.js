import project2 from "../projects/zerodha.png";
import project1 from "../projects/airbnb.png";

export const HERO_CONTENT = `I'm a passionate full-stack developer with a focus on building robust, scalable web applications. I specialize in front-end technologies like React and Next.js, and back-end technologies including Node.js, Express.js, MySQL, and MongoDB. My mission is to craft innovative solutions that drive business impact and deliver seamless user experiences.`;

export const ABOUT_TEXT = `With over 5 years of experience, I'm a dedicated full-stack developer who thrives on solving real-world problems through code. My tech stack includes React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey began with curiosity about how the web works, which evolved into a passion for creating high-quality, user-centric applications. I enjoy working in collaborative environments, learning new technologies, and contributing to open-source projects. In my free time, I like to stay active and explore emerging trends in software development.`;

export const EXPERIENCES = [
  {
    year: "Completed in 2025",
    role: "Full Stack Web Development Course",
    company: "Apna College",
    description: `Completed an intensive Full Stack Web Development course covering both front-end and back-end technologies. Developed multiple real-world projects using JavaScript, React.js, Node.js, Express.js, and MongoDB. Gained practical experience in building RESTful APIs, implementing authentication, and managing application state.`,
    technologies: [
      "JavaScript",
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "HTML",
      "CSS",
      "RESTful APIs",
      "MySQL",
      "Bootstrap",
      "Tailwind CSS"
    ]
  }
];

export const PROJECTS = [
  {
    title: "WanderWorld",
    image: project1,
    description: `WanderWorld is a full-stack Airbnb clone that enables users to browse, add, and manage travel listings. It features user authentication, image uploads via Cloudinary, interactive maps with Mapbox, and review management. Built with Node.js, Express.js, MongoDB, and Bootstrap, it follows the MVC architecture and includes essential security measures like validation with Joi, cookies, and flash messages.`,
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Node.js",
      "MongoDB",
      "Express.js",
      "JavaScript",
      "RESTful APIs"
    ]
  },
  {
    title: "StockVista",
    image: project2,
    description: `StockVista is a Zerodha-inspired trading platform clone that simulates real-time stock monitoring, portfolio management, and transaction tracking. Built with a modern MERN stack, it features user authentication, interactive charts using Chart.js, and dynamic dashboards. It emphasizes responsive design, security, and real-time data simulation.`,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "HTML",
      "CSS",
      "RESTful APIs",
      
    ]
  }
];

export const CONTACT = {
  phoneNo: "+91 9019793837",
  email: "naveenkumar9009845@gmail.com"
};
