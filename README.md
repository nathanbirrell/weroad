# WeRoad Travel Booking System

Welcome to the WeRoad Travel Booking System, a fake booking system for WeRoad customers to book Travels. This project is built using NestJS, GraphQL, Nuxt 3, and Tailwind CSS.

## Features

- Users can view available travels and book spots for their desired travel.
- Each travel has a maximum capacity (configurable to any number of travelers).
- Sold out travels are marked as sold out and cannot be booked.

## Getting Started

1. Start backend database: `cd backend && docker-compose up`
1. Start backend API: `cd backend && pnpm run dev`
1. Start frontend: `cd backend && pnpm run dev`
1. Open http://localhost:3000/

## Project Structure & Tech Stack

- `./backend`: Application's API. Built with: TypeScript, NestJS, GraphQL
- `./frontend`: Application's User Interface. Built with: TypeScript, Nuxt 3, Tailwind CSS

## Testing

- Unit Tests: Backend tests can be run using `npm run test` in the `backend` folder.
- Integration Tests: WIP
- End-to-End Tests: WIP

## TODO

- [ ] Add database seeding step to populate new db with sample data
- [ ] Switch to [Prisma ORM](https://docs.nestjs.com/recipes/prisma)
- [ ] Switch to [Vitest](https://vitest.dev/) (for both frontend/backend testing)
- [ ] Add role-based access control to restrict who can create a Travel (Admins only)
- [ ] Add unit tests to frontend (Vitest & testing-library)
- [ ] Add a tool like Concurrently to run both frontend/backend in one terminal
- [ ] Complete monorepo CI/CD setup with [Nx](https://nx.dev/getting-started/installation)