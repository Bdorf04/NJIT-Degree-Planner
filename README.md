# NJIT Degree Planner

🔗 [Live Demo](https://njit-degree-planner.vercel.app)

A full-stack 4-year academic planner for NJIT Computer Science students.

## Features

- JWT authentication with protected routes
- Create and manage up to 3 named degree plans
- Course grid pre-populated with all 43 required CS courses at recommended semesters
- Drag-free course movement between semesters via action menus
- Prerequisite and corequisite conflict detection with visual warnings
- Progress tracker with credit breakdowns and completed/unscheduled buckets
- AI chat powered by Claude — move courses with natural language (e.g. "move CS 114 to semester 3")
- Undo last AI action
- Chat history persisted across page refreshes via localStorage
- Fully responsive — desktop sidebar + mobile slide-in drawer

## Tech Stack

- **Frontend:** Next.js 15, Tailwind CSS v4, TypeScript
- **Backend:** Next.js API routes, Prisma ORM, PostgreSQL (Neon)
- **Auth:** Auth.js v5 (credentials provider, bcryptjs)
- **AI:** Anthropic API (claude-sonnet-4-6)