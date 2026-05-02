export const PROFILE = {
  name: "Aasim Syed",
  role: "Backend Engineer | Java | Spring Boot",
  experience: "2.7+ years",
  location: "Maharashtra, India",
  intro: "Backend Software Developer with 2.7+ years of experience building scalable microservices, REST/gRPC APIs, and data-intensive systems.",
  email: "sayedaasim555@gmail.com",
  github: "https://github.com/aasimsyed97",
  linkedin: "#" // Placeholder
};

export const SKILLS = [
  {
    category: "Backend",
    items: ["Java (Core, Java 8+)", "Spring Boot", "Spring MVC", "JPA / Hibernate"]
  },
  {
    category: "Distributed Systems",
    items: ["REST APIs", "gRPC", "RabbitMQ", "Hazelcast"]
  },
  {
    category: "Database & Search",
    items: ["PostgreSQL", "Elasticsearch"]
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Jenkins", "Maven", "Liquibase", "Git", "Jira"]
  },
  {
    category: "Security",
    items: ["OWASP", "Audit Logging (Spring Envers)"]
  },
  {
    category: "Frontend (secondary)",
    items: ["Angular", "HTML/CSS"]
  }
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase projects and experience",
    link: "https://aasimsyed97.github.io/",
    github: "",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    insight: "Designed as a dual-mode SPA with seamless state management for developer and standard user experiences."
  },
  {
    title: "Spring Stack Playground",
    description: "Collection of backend engineering practice projects demonstrating CRUD APIs, JPA/Hibernate mappings, Elasticsearch queries, RabbitMQ async workflows, and gRPC communication.",
    link: "",
    github: "https://github.com/aasimsyed97/spring-stack-playground",
    tags: ["Java", "Spring Boot", "Elasticsearch", "RabbitMQ", "gRPC"],
    insight: "Architected as a set of loosely coupled services highlighting robust integration patterns and scalable message processing."
  }
];

export const EXPERIENCE = [
  {
    role: "Software Developer",
    company: "Prospecta Software (SAP Partner)",
    period: "June 2023 – Present",
    points: [
      "Built and maintained 20+ Spring Boot microservices",
      "Migrated Spring Boot versions (2.7 → 3.2 → 4.0)",
      "Upgraded Elasticsearch (7.x → 9.x)",
      "Improved API performance by 25%",
      "Reduced latency by 30% using gRPC",
      "Implemented OWASP security fixes",
      "Built audit logging using Spring Envers"
    ]
  },
  {
    role: "Vocational Trainer",
    company: "Previous Role",
    period: "Prior to June 2023",
    points: [
      "Delivered technical training and mentored students in core programming concepts."
    ]
  }
];
