# WeRoad Travel Booking System

Welcome to the WeRoad Travel Booking System, a fake booking system for WeRoad customers to book Travels. This project is built using NestJS, GraphQL, Nuxt 3, and Tailwind CSS.

## Features

- Users can view available travels and book spots for their desired travel.
- Each travel has a maximum capacity of 15 travelers.
- Booked spots are reserved for 15 minutes during the checkout phase.
- Sold out travels are marked as sold out and cannot be booked.

## Tech Stack

- Backend: TypeScript, NestJS, GraphQL
- Frontend: TypeScript, Nuxt 3, Tailwind CSS

## Project Structure

## Getting Started

Backend: 
1. `cd backend && docker-compose up`


## Backend API Endpoints

- **GraphQL API Endpoint:** `http://localhost:4000/graphql`

## Testing

- **Unit Tests:** Backend tests can be run using `npm run test` in the `backend` folder.
- **End-to-End Tests:** Frontend tests can be run using `npm run test` in the `frontend` folder.

## TODO

- [ ] Switch to [Prisma ORM](https://docs.nestjs.com/recipes/prisma)
- [ ] Switch to [Vitest](https://vitest.dev/) (for both frontend/backend testing)