type Project = {
  image: string
  name: string
  description: string
  video: string
  id: string
}

type Backend = {
  image: string
  name: string
  description: string
  video: string
  id: string
}

type Frontend = {
  image: string
  name: string
  description: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}


export const BACKEND_PROJECTS: Project[] = [
  {
    image: "/ecomerce.png",
    name: "Ecomerce Platforms",
    description:
      "built to support high-traffic global transactions. Engineered for performance, it ensures fast, secure transactions and seamless user experiences",
    video: "https://res.cloudinary.com/youraccount/video/upload/v1/ecommerce_demo.mp4",
    id: "backend1",
  },
  {
    image: "/facial.png",
    name: "Attendance Management systems",
    description:
      "using real-time facial recognition for accurate, fast, and contactless tracking improving operational efficiency for modern organizations", 
      video: "https://res.cloudinary.com/youraccount/video/upload/v1/api_demo.mp4",
    id: "backend2",
  },
  {
    image: "/payments.png",
    name: "Fintech Solutions",
    description:
      "Leveraging cutting-edge technology to deliver secure, fast, and scalable digital payment systems, transforming the way businesses and individuals manage financial transactions. ", 
      video: "https://res.cloudinary.com/youraccount/video/upload/v1/api_demo.mp4",
    id: "backend3",
  },
  {
    image: "/webdesign.png",
    name: "Website Design and Development",
    description:
      "to create visually compelling and animated interfaces engaging user experiences with a focus on performance and visual appeal.",
    video:
      "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0",
    id: "backend4",
  },

];

export const FRONTEND_PROJECTS: Project[] = [
  {
    image: "/backend.png",
    name: "Backend Technologies",
    description:
      " Python & Flask for rapid development, Node.js for efficient concurrency, MongoDB & SQL for flexible data management, and Redis for fast caching—ensuring a robust and scalable solution..",
    video:
      "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0",
    id: "frontend1",
  },
  {
    image: "/frontend.png",
    name: "Frontend Technologies",
    description:
      "React.js for dynamic UIs, Next.js for performance and SEO, TypeScript for type safety, Tailwind CSS for efficient styling, and JavaScript as the core for interactivity, enabling fast and scalable web apps.",
    video:
      "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0",
    id: "frontend2",
  },
  
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Click Theraputics',
    title: 'Backend Engineer',
    start: 'Sep 2024',
    end: 'Dec 2024',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Fullstack Software Engineer',
    start: '2019',
    end: 'Present',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Software Developer',
    start: '2010',
    end: '2018',
    id: 'work3',
  },
]



export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/pytbyte',
  },
 
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/pytbyte/',
  },
  
]

export const EMAIL = 'heretolearn1@gmail.com'
