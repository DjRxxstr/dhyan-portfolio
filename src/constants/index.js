import {
  college,
  school,

  bolt,
  beachhack,
  
  reactjs,
  redux,
  tailwind,
  threejs,
  git,
  firebase,
  next,
  html,
  css,
  javascript,
  bootstrap,
  framer,
  tanstack,
  typescript,

  fooddelivery,
  busbooking,

  springboot,
  mysql,
  jwt,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects"
  }
];

const education = [
  {
    type: "B.Tech",
    name: 'Christ College of Engineering',
    duration: "2022 - Present",
    icon: college,
    details: [
      "Bachelor's Degree in Computer Science and Engineering",
      "CGPA : 8.4",
    ],
  },
  {
    type: "High School",
    name: "Bharatiya Vidya Bhavan",
    duration: "2020 - 2022",
    icon: school,
    details: [
      "High School, Computer Science",
      "Board : CBSE",
      "Percentage : 93.6",
    ],
  },
]

const technologies = [
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Firebase",
    icon: firebase
  },
  {
    name: 'NextJS',
    icon: next
  },

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
    name: 'Bootstrap',
    icon: bootstrap
  },
  
  {
    name: "Framer Motion",
    icon: framer
  },

  {
    name: "TypeScript",
    icon: typescript
  },
  
  // {
  //   name: 'Tanstack Query',
  //   icon: tanstack
  // },

];

const experiences = [
  {
    title: "Artificial Intelligence Intern",
    company_name: "Bolt IoT Inventrom Private Limited",
    icon: bolt,
    iconBg: "white",
    date: "Jan 2025 - Feb 2025",
    points: [
      "Built two AI-integrated web applications by connecting frontend logic with external APIs.",
      "Created step-by-step tutorial videos explaining the project flow and implementation, later used as training content for other students.",
      "Gained hands-on experience in web development, API integration, and technical documentation."
    ],
  },
  {
    title: "Event Co-ordinator",
    company_name: "Beach Hack",
    icon: beachhack,
    iconBg: "white",
    date: "Feb 2025",
    points: [
      "Organized a football-themed auction event as part of a tech fest, inspired by the UEFA Champions League.",
      "Managed team registrations, coordinated with faculty, and ensured smooth on-ground execution.",
      "Handled live participant engagement, issue resolution, and overall event flow alongside a small team."
    ],
  },
];

const testimonials = [
  {
    testimonial:"", name: "",
    designation: "",
    company: "",
    image: "",
  }
];

const projects = [
  {
    name: "Food Delivery App",
    description:
      "Developed CraveCart, a full-stack food delivery web application using React.js, Redux and Firebase. Implemented dynamic meal listings, real-time cart synchronization, and order management. Handled order and cart operations via Firebase’s real-time backend services.",
    tags: [
      {
        name: "React",
        icon: reactjs
      },
      {
        name: "Redux",
        icon: redux
      },
      {
        name: "CSS",
        icon: css
      },
      {
        name: "Firebase",
        icon: firebase
      },
    ],
    image: fooddelivery,
    source_code_link: "https://github.com/DjRxxstr/food-delivery-app",
    live_link: "https://food-delivery-app-five-alpha.vercel.app/"
  },
  {
    name: "Bus Booking System",
    description:
      "Developed a full-stack bus booking app using React.js, Spring Boot, and MySQL with real-time seat selection and booking. JWT-based authentication, role-based access control, and integrated payment processing. Admin dashboard for managing routes, bookings, users, and viewing real-time analytics.",
    tags: [
      {
        name: "React",
        icon: reactjs
      },
      {
        name: "Springboot",
        icon: springboot
      },
      {
        name: "CSS",
        icon: css
      },
      {
        name: "MySQL",
        icon: mysql
      },
      {
        name: "JWT-Token",
        icon: jwt
      }
    ],
    image: busbooking,
    source_code_link: "https://github.com/DjRxxstr/bus-booking-system",
    live_link: "https://bus-booking-system-eta.vercel.app/"
  },
];

export { education, technologies, experiences, testimonials, projects };