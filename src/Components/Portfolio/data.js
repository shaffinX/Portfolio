const projects = [
    {
      id: 1,
      title: "Smart Interview and Skill Gap Analyzer",
      description: "JobLens is an AI-driven smart interview and skill gap analyzer designed to streamline corporate recruitment by automating candidate assessments. Built on a full-stack architecture with a responsive React frontend and a high-performance Flask backend, the platform leverages a multi-modal AI core to evaluate candidates across eight key dimensions. It assesses Emotion and Composure using a custom EfficientNetB2 model for visual and behavioral cues. Confidence, Clarity, and Professionalism are measured by combining openSMILE for acoustic feature extraction with SBERT and word lists for semantic text analysis. Finally, Logical Thinking, Maturity, and Adaptability are evaluated using the Gemini API to analyze candidate reasoning through situational judgment scenarios. By processing audio, video, and text inputs independently, these integrated pipelines generate a unified, rubric-based score and comprehensive HR report.",
      techStack: ["React","Flask","PostgreSQL","SBERT","Whisper", "EfficientNetB2","openSMILE","Gemini"],
      sourceCode: "#",
      image: "/ImageArr/project07.png"
    },
    {
      id: 2,
      title: "Electrical Engineering Project Manager",
      description: "This project was created for a client in the electrical engineering field to simplify task management and billing for their engineering team. Developed using React Native, the app allows engineers to post jobs they are responsible for completing, with all necessary details included. Once a job is completed, it is displayed in the admin-only Bill Section where it tracks completed tasks and generates a PDF bill for record-keeping. To ensure tasks are completed on time, the app features a built-in notification system that reminds engineers about pending jobs. A key challenge was designing an effective in-app notification system without relying on external services like Firebase. This was successfully implemented using local notification libraries, ensuring reliability and user-friendly reminders. The app achieved the client’s goals by providing an efficient task management and billing solution, improving team accountability and productivity.",
      techStack: ["React Native","Firebase","Cross-Platform","Android","IOS"],
      sourceCode: "#",
      image: "/ImageArr/project01.png"
    },
    {
      id: 3,
      title: "Finance Assistant Website",
      description: "Capital Core is a mern-stack web application built with React, Express, and MongoDB that empowers users to manage their finances efficiently. The platform allows users to track expenses, set budgets, and monitor savings with intelligent insights into spending trends. Key features include customizable expense categories, automated financial reports (journals, ledgers, balance sheets), and visual analytics. It also offers motivational finance tips, receipt uploads, secure login, and a user-friendly dashboard. Designed with students and hostel residents in mind, this all-in-one tool eliminates the need for traditional notebooks or multiple apps for personal finance management.",
      techStack: ["React", "Express", "MongoDB", "Website", "MERN Stack","Rest API","Node.js"],
      sourceCode: "https://github.com/shaffinX/MyFinanceManager",
      image: "/ImageArr/project06.png"
    },
    {
      id: 4,
      title: "CRM Solution for a University Project",
      description: "This project is a comprehensive CRM (Customer Relationship Management) application developed as part of a university project, showcasing expertise in software design and development. Built using C# Windows Forms and powered by a PostgreSQL database, the application incorporates advanced design patterns for scalability and maintainability. The project includes a full suite of Software Design artifacts such as UML diagrams, ERDs, and detailed documentation to ensure clarity and alignment with best practices. The CRM system provides features for managing customer information, tracking interactions, and streamlining business workflows. The integration of robust design patterns demonstrates a commitment to creating high-quality, reusable, and modular code. This project is a testament to my ability to design and develop professional-grade applications with a strong foundation in software architecture.",
      techStack: ["C#", ".Net", "Windows Form", "Windows App", "PostgreSQL"],
      sourceCode: "https://github.com/shaffinX/C-app/tree/main",
      image: "/ImageArr/project02.jpg"
    },
    {
      id: 5,
      title: "Hardware Ecommerce Store Demo",
      description: "This project is a web application for a hardware e-commerce store, developed using React and Firebase. The platform allows users to browse, search, and purchase hardware products with ease. It features secure user authentication, real-time database integration for product inventory management, and a responsive design to ensure a seamless shopping experience across devices. Firebase is utilized for backend services, including authentication, cloud storage, and real-time updates, while React powers the dynamic and intuitive user interface. This project highlights expertise in building scalable, user-centric e-commerce solutions with modern web technologies.",
      techStack: ["React", "Firebase", "Website"],
      sourceCode: "https://github.com/shaffinX/Hardware-Website",
      image: "/ImageArr/project03.jpg"
    },
    {
      id: 6,
      title: "Project Management Web app",
      description: "Created a project management tool using Vue.js and Laravel for task tracking, team collaboration, and reporting. PosgreSql and Rest API",
      techStack: ["Vue.js", "Laravel", "PostgreSQL", "Rest API", "Website","PHP"],
      sourceCode: "https://github.com/shaffinX/Absence-Management",
      image: "/ImageArr/project04.jpg"
    },
    {
      id: 7,
      title: "Website for Reading Books",
      description: "This project is a web application designed to connect authors and readers, developed using React, Node.js, Express.js, and MSSQL. Authors can register, create, and manage their writings, while readers can browse, read, and interact with the content. The platform features secure authentication, role-based access control, and a responsive design for an optimized user experience across devices. The backend, built with Node.js and Express.js, efficiently handles server-side logic and API development, while MSSQL ensures reliable data management. This application demonstrates proficiency in creating scalable, user-focused solutions with a clean and intuitive interface.",
      techStack: ["React", "Node.js", "Express.js", "MSSQL", "Website", "Full Stack"],
      sourceCode: "https://github.com/shaffinX/Musanif-Website",
      image: "/ImageArr/project05.jpg"
    }
  ];

  const codelab = [
    {
      id: 1,
      title: "ConnectMe",
      description: "A university project: a social media-style Android app built with Kotlin, MySQL, and PHP APIs, featuring posts, stories, calls, messaging, and a follow system.",
      techStack: ["Kotlin", "PHP", "MySQL", "Apache", "Android"],
      sourceCode: "https://github.com/shaffinX/ConnectMe3",
      image: "/ImageArr/codelab1.jpg"
    },
    {
      id: 2,
      title: "Solo Store",
      description: "A university project: a mini e-commerce platform built with Java, JavaFX, and PostgreSQL, allowing users to create stores and sell items.",
      techStack: ["Java", "JavaFX", "PostgreSQL", "MVC", "Desktop App"],
      sourceCode: "https://github.com/shaffinX/Solo-Store",
      image: "/ImageArr/codelab2.png"
    },
    {
      id: 3,
      title: "Research Facility Network Simulation",
      description: "A university project: a research facility network simulation in Cisco Packet Tracer using NAT, DHCP, PAT, dynamic routing protocols (EIGRP, RIP, OSPF), with configured DNS and web servers.",
      techStack: ["CISCO Packet Tracer", "Networking", "Simulation"],
      sourceCode: "https://github.com/shaffinX/Network-Simulation-CISCO",
      image: "/ImageArr/codelab3.png"
    },
    {
      id: 4,
      title: "Traffic Light Circuit Design",
      description: "A university project: a traffic signal circuit simulation in Proteus designed using a 555 timer IC and a 4017 counter IC to automate the sequencing of traffic lights with accurate timing intervals.",
      techStack: ["Proteus", "Circuit Design", "Simulation"],
      sourceCode: "https://github.com/shaffinX/Traffic-Light-Proteus-Project",
      image: "/ImageArr/codelab4.png"
    },
    {
      id: 5,
      title: "Brick Breaker x86",
      description: "A university project: a classic Brick Breaker game developed in x86 Assembly (MASM), featuring paddle and ball mechanics with collision detection and score tracking.",
      techStack: ["X86", "Assembly", "MASM"],
      sourceCode: "https://github.com/shaffinX/Brick-Breaker-Game-x86",
      image: "/ImageArr/codelab2.png"
    },
    {
      id: 6,
      title: "TORCS Client MLP Model",
      description: "An intelligent driver client for TORCS that autonomously drives a car using a Multi-Layered Perceptron (MLP) neural network.The model processes real-time telemetry data to predict steering, acceleration, and braking decisions.",
      techStack: ["Neural Networks", "MLP", "Python","Pytorch","TensorFlow","Keras"],
      sourceCode: "https://github.com/shaffinX/TORCS-Client-ANN",
      image: "/ImageArr/codelab5.png"
    },
  ];
  export {projects,codelab};