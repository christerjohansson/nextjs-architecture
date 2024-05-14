# Next.js Scalable Project Architecture

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of Contents

- [Next.js Scalable Project Architecture](#nextjs-scalable-project-architecture)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
    - [Gitflow example](#gitflow-example)
  - [Getting Started](#getting-started)
  - [Deployment](#deployment)

## Features

A scalable Next.js project architecture with support for:

- TypeScript
- GIT version control
- GIT Branching strategy (GitFlow flavoured)
- ESLint
- Prettier
- Jest
- Next.js
- React
- Tailwind CSS
- Husky (Pre-Commit)
- Engine locking
- Enforced code formatting rules (Prettier)
- StoryBook (separate branch)

### Gitflow example

      A---B---C---D---E---F---G---H---I---J---K---L---M  main
       \                       \   \       \       \
        \                       \   \       \       \     
         D---E---F---G---H---I---J---K---L---M---N---O  develop
                                  ^   ^       ^       ^
                               v0.1 v0.2   v0.3     v0.4

Explanation:
main: Main branch where production-ready code is merged.
develop: Develop branch where development takes place.
tags: Tags like v0.1, v0.2, etc., indicate versions on the main branch.

## Getting Started

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/your-nextjs-project.git
cd your-nextjs-project
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 with your browser to see the result.

Project Structure
This project follows a scalable architecture to ensure maintainability and ease of development. Below is an overview of the key directories and files:

```bash
my-nextjs-app/
├── .github/             # GitHub configuration files and workflows
│   └── workflows/
│       └── main.yml
├── .husky/              # Husky configuration for git hooks
│   └── pre-commit
├── .vscode/             # VSCode specific settings
│   └── settings.json
├── public/              # Static assets such as images
│   └── images/
│       └── logo.png
├── src/                 # Source code of the application
│   ├── __tests__/       # Test files for the project
│   │   ├── Dashboard/
│   │   │   ├── page.test.tsx
│   │   │   └── layout.test.tsx
│   │   ├── Header/
│   │   │   ├── Header.test.tsx
│   │   │   └── Header.module.css.test.ts
│   │   └── api/
│   │       └── hello.test.ts
│   ├── app/             # Application logic and main pages
│   │   ├── api/
│   │   │   └── hello/route.ts
│   │   ├── dashboard/
│   │   │   ├── page.tsx
│   │   │   └── layout.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── components/  # Reusable UI components
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Header.module.css
│   │   │   │   └── Header.types.ts
│   │   │   └── Footer/
│   │   │       ├── Footer.tsx
│   │   │       ├── Footer.module.css
│   │   │       └── Footer.types.ts
│   │   ├── styles/      # Global and component-specific styles
│   │   │   ├── globals.css
│   │   │   └── variables.css
│   ├── contexts/        # React context for state management
│   │   └── UserContext.tsx
│   ├── hooks/           # Custom React hooks
│   │   └── useAuth.ts
│   ├── services/        # External services and API calls
│   │   └── apiClient.ts
│   ├── types/           # TypeScript type definitions
│   │   └── index.d.ts
│   ├── utils/           # Utility functions
│   │   └── helpers.ts
│   └── middleware.ts    # Middleware functions
├── .env                 # Environment variables
├── .env.local           # Local environment variables
├── .eslintignore        # ESLint ignore file
├── .eslintrc.js         # ESLint configuration
├── .gitignore           # Git ignore file
├── jest.config.js       # Jest configuration
├── next.config.js       # Next.js configuration
├── package.json         # NPM package configuration
├── README.md            # Project README file
├── tsconfig.json        # TypeScript configuration
└── yarn.lock            # Yarn lockfile
```

Development
To start developing, open your preferred editor and modify the files in the src directory. The project is configured to automatically reload changes as you save your files.

You can start editing the main page by modifying src/app/page.tsx.

Learn More
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.
You can check out the Next.js GitHub repository - your feedback and contributions are welcome!

## Deployment

To be written.
