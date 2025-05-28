const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard. Features include product management, user authentication, and real-time inventory tracking.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
      sourceCode: "https://github.com/username/ecommerce-platform",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMTExMTExIi8+CjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjM2MCIgaGVpZ2h0PSIyNjAiIHJ4PSI4IiBmaWxsPSIjMjIyMjIyIiBzdHJva2U9IiNmZjAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSIyMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjIwIiBmaWxsPSIjZmYwMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5FLUNvbW1lcmNlPC90ZXh0Pgo8L3N2Zz4="
    },
    {
      id: 2,
      title: "AI Task Manager",
      description: "An intelligent task management application powered by AI that helps prioritize tasks, suggests optimal schedules, and provides productivity insights with beautiful data visualizations.",
      techStack: ["React", "TypeScript", "Python", "FastAPI", "OpenAI", "PostgreSQL"],
      sourceCode: "https://github.com/username/ai-task-manager",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMTExMTExIi8+CjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjM2MCIgaGVpZ2h0PSIyNjAiIHJ4PSI4IiBmaWxsPSIjMjIyMjIyIiBzdHJva2U9IiNkYzI2MjYiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSIyMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjZGMyNjI2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BSSBUYXNrIE1hbmFnZXI8L3RleHQ+Cjwvc3ZnPg=="
    },
    {
      id: 3,
      title: "Real-time Chat App",
      description: "A modern real-time messaging application with group chats, file sharing, emoji reactions, and end-to-end encryption. Features include voice messages and video calls.",
      techStack: ["React", "Socket.io", "Node.js", "MongoDB", "WebRTC", "Redis"],
      sourceCode: "https://github.com/username/realtime-chat",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMTExMTExIi8+CjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjM2MCIgaGVpZ2h0PSIyNjAiIHJ4PSI4IiBmaWxsPSIjMjIyMjIyIiBzdHJva2U9IiNlZjQ0NDQiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSIyMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjZWY0NDQ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5SZWFsLXRpbWUgQ2hhdDwvdGV4dD4KPHN2Zz4="
    },
    {
      id: 4,
      title: "Cryptocurrency Dashboard",
      description: "A comprehensive crypto portfolio tracker with real-time price updates, technical analysis charts, news feed, and portfolio performance analytics with profit/loss tracking.",
      techStack: ["React", "Chart.js", "Node.js", "CoinGecko API", "WebSocket", "Material-UI"],
      sourceCode: "https://github.com/username/crypto-dashboard",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMTExMTExIi8+CjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjM2MCIgaGVpZ2h0PSIyNjAiIHJ4PSI4IiBmaWxsPSIjMjIyMjIyIiBzdHJva2U9IiNmOTI2MjYiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSIyMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSIjZjkyNjI2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DcnlwdG8gRGFzaGJvYXJkPC90ZXh0Pgo8L3N2Zz4="
    }
  ];
  export default projects;