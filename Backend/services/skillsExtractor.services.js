const ALL_SKILLS = [
  "Angular",
  "Vue.js",
  "Flask",
  "FastAPI",
  "Django",
  "SignalR",
  "WebSockets",
  "RAG (Retrieval-Augmented Generation)",
  "Webflow",
  "Bootstrap",
  "Prisma",
  "Supabase",
  "Firebase",
  "Elasticsearch",
  "RabbitMQ",
  "Kafka",
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "Redux",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "SASS",
  "Responsive Design",
  "Accessibility (a11y)",
  "Web Performance Optimization",
  "Framer Motion",
  "Webpack",
  "Vite",
  "Node.js",
  "Express",
  "REST APIs",
  "GraphQL",
  "WebSockets",
  "Authentication (JWT, OAuth)",
  "API Design",
  "Microservices Architecture",
  "Event-Driven Architecture",
  "MongoDB",
  "SQL",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Database Indexing",
  "Query Optimization",
  "Data Modeling",
  "AWS",
  "Docker",
  "Kubernetes",
  "CI/CD Pipelines",
  "GitHub Actions",
  "Linux",
  "Nginx",
  "Terraform",
  "Serverless Architecture",
  "Monitoring (Prometheus, Grafana)",
  "NumPy",
  "Pandas",
  "Scikit-learn",
  "TensorFlow",
  "PyTorch",
  "Natural Language Processing (NLP)",
  "Computer Vision",
  "LLMs",
  "Prompt Engineering",
  "Hugging Face",
  "OpenAI APIs",
  "LangChain",
  "Vector Databases (Pinecone, FAISS)",
  "System Design",
  "Scalability",
  "Load Balancing",
  "Distributed Systems",
  "CAP Theorem",
  "Rate Limiting",
  "Fault Tolerance",
  "High Availability",
  "Sharding",
  "Jest",
  "Mocha",
  "Chai",
  "Cypress",
  "Playwright",
  "Unit Testing",
  "Integration Testing",
  "End-to-End Testing",
  "Git",
  "GitHub",
  "GitLab",
  "Postman",
  "Swagger",
  "Figma",
  "Jira",
  "VS Code",
  "Chrome DevTools",
  "Agile",
  "Scrum",
  "Kanban",
  "Test-Driven Development (TDD)",
  "Behavior-Driven Development (BDD)",
  "DevOps Culture",
  "Problem Solving",
  "Critical Thinking",
  "Communication",
  "Team Collaboration",
  "Leadership",
  "Time Management",
  "Adaptability",
  "Decision Making",
  "Ownership",
  "Mentoring",
  "Project Management",
  "Stakeholder Communication",
  "Product Thinking",
  "Roadmapping",
  "Sprint Planning",
  "Risk Management",
  "Resource Allocation",
];

const extractSkills = (text) => {
  if (!text) return [];

  const skills = new Set();
  const lowerText = text.toLowerCase();

  ALL_SKILLS.forEach((skill) => {
    if (lowerText.includes(skill.toLowerCase())) {
      skills.add(skill);
    }
  });

//   const words = text.split(/\s+/);

//   words.forEach((word) => {
//     const clean = word.replace(/[^a-zA-Z0-9.+#]/g, "");

//     // detect tech words like React, AWS, Prisma
//     if (clean.match(/^[A-Z][a-zA-Z0-9.+#-]*$/) && clean.length > 2) {
//       skills.add(clean);
//     }

//     // detect extensions like .js, .py
//     if (
//       clean.endsWith(".js") ||
//       clean.endsWith(".ts") ||
//       clean.endsWith(".py")
//     ) {
//       skills.add(clean);
//     }
//   });

  return Array.from(skills);
};

module.exports = { extractSkills };
