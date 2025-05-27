🚀 Tech Stack Overview
This project is a full-stack web application built using modern frontend and backend technologies, optimized for performance, scalability, and developer experience.

🧩 Frontend Stack
🔨 Vite + React
Vite is used as the build tool for fast development and HMR (Hot Module Replacement).

React provides a component-based architecture for building interactive UIs.

📦 React Query
Handles server-state management including caching, background updates, and synchronization.

Simplifies data fetching and reduces the need for complex Redux logic.

📝 React Hook Form + Zod
React Hook Form for efficient and performant form state management.

Zod provides type-safe schema-based validation, integrated seamlessly with RHF.

🧠 Context API + Redux Toolkit
Context API is used for lightweight global state (e.g., user auth context).

Redux Toolkit is implemented for more structured and scalable state management in larger modules.

🎨 Tailwind CSS
Utility-first CSS framework for rapid UI development.

Ensures consistent design and responsive layouts with minimal custom CSS.

🧭 React Router
Provides dynamic routing for SPA behavior and nested layouts.

🪝 React Hooks
Utilizes useState, useEffect, useContext, useReducer, and custom hooks to encapsulate logic.

💅 shadcn/ui
Prebuilt, accessible components styled with Tailwind and Radix UI primitives.

Speeds up UI development with customizable and production-ready components.

🧱 Backend Stack
🧬 Laravel (PHP Framework)
Backend API built using Laravel, a robust MVC framework with built-in tools for routing, authentication, and database interaction.

🔐 Laravel Sanctum
Lightweight API authentication (token-based) for SPAs and mobile applications.

Protects routes and manages login sessions for authenticated users.

🔧 Modular Architecture + Repository Pattern
Backend is organized using modules (e.g., User, Role, Product) to improve maintainability.

Repository Pattern abstracts data access, making business logic cleaner and testable.

🛡️ Spatie Laravel-Permission
Role-based access control (RBAC) integrated via this package.

Manages roles, permissions, and user-role relationships.

🗃️ Database
🛢️ MySQL
Relational database for persistent storage.

Efficient indexing, foreign key constraints, and normalization strategies applied.

⚙️ DevOps & Tooling
📂 Docker
Containerized local development setup for frontend, backend, and MySQL.

Ensures consistency across environments.

🤖 GitHub Actions
Automated CI/CD pipeline for:

Running tests

Linting & formatting checks

Deploying to production/staging (optional)

Docker builds and image pushes

project-root/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── redux/
│   │   └── App.tsx
│   └── vite.config.ts
├── backend/
│   ├── app/
│   │   ├── Modules/
│   │   │   ├── User/
│   │   │   ├── Role/
│   │   ├── Repositories/
│   │   └── Http/
│   ├── routes/
│   └── composer.json
├── docker-compose.yml
└── .github/
    └── workflows/
        └── ci.yml
