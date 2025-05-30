const projects = [
    {
      id: 1,
      title: "Electrical Engineering Project Manager",
      description: "This project was created for a client in the electrical engineering field to simplify task management and billing for their engineering team. Developed using React Native, the app allows engineers to post jobs they are responsible for completing, with all necessary details included. Once a job is completed, it is displayed in the admin-only Bill Section where it tracks completed tasks and generates a PDF bill for record-keeping. To ensure tasks are completed on time, the app features a built-in notification system that reminds engineers about pending jobs. A key challenge was designing an effective in-app notification system without relying on external services like Firebase. This was successfully implemented using local notification libraries, ensuring reliability and user-friendly reminders. The app achieved the client’s goals by providing an efficient task management and billing solution, improving team accountability and productivity.",
      techStack: ["React Native","Firebase","Cross-Platform","Android","IOS"],
      sourceCode: "#",
      image: "/imageArr/project01.png"
    },
    {
      id: 2,
      title: "Finance Assistant Website",
      description: "Capital Core is a mern-stack web application built with React, Express, and MongoDB that empowers users to manage their finances efficiently. The platform allows users to track expenses, set budgets, and monitor savings with intelligent insights into spending trends. Key features include customizable expense categories, automated financial reports (journals, ledgers, balance sheets), and visual analytics. It also offers motivational finance tips, receipt uploads, secure login, and a user-friendly dashboard. Designed with students and hostel residents in mind, this all-in-one tool eliminates the need for traditional notebooks or multiple apps for personal finance management.",
      techStack: ["React", "Express", "MongoDB", "Website", "MERN Stack","Rest API","Node.js"],
      sourceCode: "https://github.com/shaffinX/MyFinanceManager",
      image: "/imageArr/project06.png"
    },
    {
      id: 3,
      title: "CRM Solution for a University Project",
      description: "This project is a comprehensive CRM (Customer Relationship Management) application developed as part of a university project, showcasing expertise in software design and development. Built using C# Windows Forms and powered by a PostgreSQL database, the application incorporates advanced design patterns for scalability and maintainability. The project includes a full suite of Software Design artifacts such as UML diagrams, ERDs, and detailed documentation to ensure clarity and alignment with best practices. The CRM system provides features for managing customer information, tracking interactions, and streamlining business workflows. The integration of robust design patterns demonstrates a commitment to creating high-quality, reusable, and modular code. This project is a testament to my ability to design and develop professional-grade applications with a strong foundation in software architecture.",
      techStack: ["C#", ".Net", "Windows Form", "Windows App", "PostgreSQL"],
      sourceCode: "https://github.com/shaffinX/C-app/tree/main",
      image: "/imageArr/project02.jpg"
    },
    {
      id: 4,
      title: "Hardware Ecommerce Store Demo",
      description: "This project is a web application for a hardware e-commerce store, developed using React and Firebase. The platform allows users to browse, search, and purchase hardware products with ease. It features secure user authentication, real-time database integration for product inventory management, and a responsive design to ensure a seamless shopping experience across devices. Firebase is utilized for backend services, including authentication, cloud storage, and real-time updates, while React powers the dynamic and intuitive user interface. This project highlights expertise in building scalable, user-centric e-commerce solutions with modern web technologies.",
      techStack: ["React", "Firebase", "Website"],
      sourceCode: "https://github.com/shaffinX/Hardware-Website",
      image: "/imageArr/project03.jpg"
    },
    {
      id: 5,
      title: "Project Management Web app",
      description: "Created a project management tool using Vue.js and Laravel for task tracking, team collaboration, and reporting. PosgreSql and Rest API",
      techStack: ["Vue.js", "Laravel", "PostgreSQL", "Rest API", "Website","PHP"],
      sourceCode: "https://github.com/shaffinX/Absence-Management",
      image: "/imageArr/project04.jpg"
    },
    {
      id: 6,
      title: "Website for Reading Books",
      description: "This project is a web application designed to connect authors and readers, developed using React, Node.js, Express.js, and MSSQL. Authors can register, create, and manage their writings, while readers can browse, read, and interact with the content. The platform features secure authentication, role-based access control, and a responsive design for an optimized user experience across devices. The backend, built with Node.js and Express.js, efficiently handles server-side logic and API development, while MSSQL ensures reliable data management. This application demonstrates proficiency in creating scalable, user-focused solutions with a clean and intuitive interface.",
      techStack: ["React", "Node.js", "Express.js", "MSSQL", "Website", "Full Stack"],
      sourceCode: "https://github.com/shaffinX/Musanif-Website",
      image: "/imageArr/project05.jpg"
    }
  ];
  export default projects;