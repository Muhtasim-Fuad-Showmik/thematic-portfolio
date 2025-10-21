export enum ProjectCategoryType {
  Personal = "personal",
  Professional = "professional"
}

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  type: ProjectCategoryType;
  techStack: string[];
  details: {
    problem: string;
    role: string;
    challenges: string[];
    achievements: string[];
    demoUrl?: string;
    githubUrl?: string;
    imageUrl?: string;
  };
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "EatsEasy POS",
    description: "A POS application for the restaurant industry that handles all day-to-day operations for restaurants while using modern UX principles and keeping the design intuitive and the process optimized and fast",
    type: ProjectCategoryType.Professional,
    techStack: ["Next", "TypeScript", ".NET", "Tailwind", "PostgreSQL", "GitHub Actions", "Docker", "AWS"],
    details: {
      problem: "Solving industry-wide concerns for restaurants with no well-known POS in the market providing an optimized user experience and proper business analytics",
      role: "Senior Software Engineer",
      challenges: [
        "Plan and develop the application with a small development team and ever-changing requirements",
        "Work on a product from scratch shouldering all technical responsibilites with no higher up to assist me",
        "Find the common ground for clients where the industry standards vary greatly from one restaurant to another",
        "Benchmark international solutions while tailoring to Bangladeshi needs",
        "Working with limited resources in a startup environment with very limited budget for tools"
      ],
      achievements: [
        "Designed and planned for the architecture of the entire application",
        "Developed the application from scratch with a small team of 4",
        "Performed R&D on requirements uniquely necessary for the unique needs of the project and implemented them as adequate for the clients"
      ],
    }
  },
  {
    id: 2,
    title: "Schertech MES",
    description: "MES software tailored to most industries connected to manufacturing of hardwares including parts for automobiles and electronics",
    type: ProjectCategoryType.Professional,
    techStack: ["React",  "Angular", "Laravel", "PostgreSQL", "Docker", "AWS", "SAP UI5", "SAP CAP", "SAP S4 Hana"],
    details: {
      problem: "Clients needed a MES software tailored to most industries connected to manufacturing of hardwares including parts for automobiles and electronics",
      role: "Deputy Team Lead (promoted from Senior Developer)",
      challenges: [
        "Gather requirements for projects from Schertech’s Italian and German clients despite of occassional language barriers",
        "Learn SAP UI5 and SAP CAP to implement modules for clients within a span of 1.5 months",
        "Localize application for German, Italian, French and English languages, where grammartical structures vary greatly",
        "Research and implement SAP UI5 modules using just released React and Angular libraries with limited community support",
        "Restructure existing teams and protocols working alongside Italian management to balance workflow between multiple versions of the MES"
      ],
      achievements: [
        "Introduced Test-Driven Development to the team for ensuring 100% retainment of business logic across all updates for the projects",
        "Reduced page load time with data syncing (for Derga) by 90% through code optimization using advanced data structures",
        "Developed the entire suite of applications for Derga Consulting with my SAP team of 8 members",
        "Migrated legacy MES application to modern Angular-Laravel tech stack",
        "Cloned existing MES application to SAP CAP and SAP UI5 for European clients who prefer SAP"
      ],
      demoUrl: "https://www.schertech.com/en",
    }
  },
  {
    id: 3,
    title: "Knowledge Repository for Department of Water Resources",
    description: "A specialized software for recording and maintaining data related to water resources and their scientific findings in Bangladesh.",
    type: ProjectCategoryType.Professional,
    techStack: ["Django", "React", "PostgreSQL", "Tailwind", "Docker", "AWS"],
    details: {
      problem: "The Department of Water Resources lacked a unified system to record and maintain data related to water resources and their scientific findings in Bangladesh.",
      role: "Junior Programmer",
      challenges: [
        "Train the dev team assigned to the project to use Python and React based on my own prior personal experience",
        "Learn Django while planning and implementing features for the project from scratch in a very tight deadline",
        "Localize application for Bengali and English languages"
      ],
      achievements: [
        "Successfully scaffolded the Django application with normalized data structure",
        "Participated in the entire SDLC flow with my first project where I was leading the team",
        "Helped implement user-friendly modules for accessing various format of files",
      ],
    }
  },
  {
    id: 4,
    title: "DRIP – Disaster and Climate Risk Information Platform",
    description: "A specialized software platform developed to integrate disaster and climate risk data into national development planning and budgeting processes in Bangladesh, enhancing institutional capacity for risk-informed public investment.",
    type: ProjectCategoryType.Professional,
    techStack: ["ASP .NET MVC", "Razor Pages", "PostgreSQL"],
    details: {
      problem: "Bangladesh lacked a unified system to incorporate disaster and climate risk data into development planning, leading to fragmented databases and inadequate risk assessments in public investment decisions.",
      role: "Junior Programmer",
      challenges: [
        "Assist in integrating diverse datasets from government and climate screening tools into a unified platform",
        "Support development of interfaces for Planning Commission officials to access sector-specific risk information",
        "Collaborate with senior developers to implement the Disaster Impact Assessment (DIA) tool",
        "Navigate limited documentation and evolving requirements from multiple stakeholders (mostly United Nations Development Programme)"
      ],
      achievements: [
        "Designed UML diagrams such as database ERD, Data Flow Diagram, Swimlane, etc to help plan for the project",
        "Contributed to backend development for data integration across fragmented government databases",
        "Helped implement user-friendly modules for accessing climate risk and vulnerability data",
        "Supported testing and deployment of the platform under guidance of senior engineers",
        "Participated in technical discussions to align platform features with national disaster management goals"
      ],
      demoUrl: "http://drip.plancomm.gov.bd/",
    }
  },
  {
    id: 5,
    title: "National Database - Micro-credit Regulation Authority",
    description: "Website for handling all operations of the Micro-credit Regulation Authority including licensing and auditing of businesses across Bangladesh.",
    type: ProjectCategoryType.Professional,
    techStack: ["Cake PHP", "MySQL", "Bootstrap"],
    details: {
      problem: "Legacy project with no documentation and limited resources and lack of features to ensure complete digitalization during the COVID lockdown.",
      role: "Junior Programmer",
      challenges: [
        "Migrate project from older Cake PHP version to latest version",
        "Discuss regarding the missing documents and figure out from clients what requirements the application was established on",
        "Update application from old undocumented legacy logic to modernized version",
        "Deal with business definition of requirement and client's expectations to settle on a common ground despite of lost documented agreements",
      ],
      achievements: [
        "Successfully migrated the legacy project to a modern version",
        "Prepared SQL scripts to generate MRA's client based reports as well as area and loan-wise reports",
        "Optimized code to improve performance and reduce crashes from data overload by implementing pagination and using advance data structures",
      ],
    }
  },
  {
    id: 6,
    title: "Tent",
    description: "A website that allows users to search for new campgrounds to visit, review campgrounds existing on the system, as well as add new campgrounds to the system. The application has several security implementations and map implementations on it. For a sample credential to use for the site you may use the username of \"Guest\" and the password \"guestpass\". (Currently downed from Heroku platform)",
    type: ProjectCategoryType.Personal,
    techStack: ["React", "MongoDB", "Express", "Node JS", "Mapbox"],
    details: {
      problem: "A website that allows users to search for new campgrounds to visit, review campgrounds existing on the system, as well as add new campgrounds to the system. The application has several security implementations and map implementations on it. For a sample credential to use for the site you may use the username of \"Guest\" and the password \"guestpass\". (Currently downed from Heroku platform)",
      role: "Self",
      challenges: [
        "Implement map integration for campgrounds with no prior experience on map libraries",
        "Implement user authentication and authorization for the system with no prior experience on authentication and authorization",
        "Learn, plan and maintain a MongoDB database",
      ],
      achievements: [
        "Successfully created the application",
        "Implemented complex data associations with MongoDB and Mongoose to understand Mongo properly",
        "Deployed the application with security and project configuration setup on Heroku",
      ],
      githubUrl: "https://github.com/Muhtasim-Fuad-Showmik/Tent",
      demoUrl: "http://powerful-river-65642.herokuapp.com/",
      imageUrl: "https://i.ibb.co/xj0p7XS/tent.png"
    }
  },
  {
    id: 7,
    title: "BodyWrap",
    description: "An ecommerce website that is tailored towards selling apparel items online. It has security implementations using AES hashing and also has an admin dashboard prepared for the business owner.",
    type: ProjectCategoryType.Personal,
    techStack: ["React", "MongoDB", "Express", "Node JS", "Mapbox"],
    details: {
      problem: "An ecommerce website that is tailored towards selling apparel items online. It has security implementations using AES hashing and also has an admin dashboard prepared for the business owner.",
      role: "Self",
      challenges: [
        "Create my first E-Commerce application",
        "Implement user authentication and authorization for the system with Passport.Js",
        "Learn, plan and maintain a MongoDB database",
      ],
      achievements: [
        "Created my first E-Commerce application",
        "Implemented complex data associations with MongoDB and Mongoose to understand Mongo properly",
        "Deployed the application with security and project configuration setup on Heroku",
      ],
      githubUrl: "https://github.com/Muhtasim-Fuad-Showmik/BodyWrap",
      imageUrl: "https://i.ibb.co/GPn2NC2/bodywrap.png"
    }
  },
];