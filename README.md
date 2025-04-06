# API Communication Documentation

## Overview

This project is a full-stack application structured into two main components:

- **Client:** A React application using **Next.js** with **Server Actions** to communicate with the backend server. The client supports consuming both GraphQL API and REST API. The frontend application also includes **Storybook** for managing and documenting UI components.
- **Server:** A Fastify-based server with Mercurius for handling GraphQL requests, using Drizzle ORM for database interaction. It provides API documentation tools such as **GraphiQL** for GraphQL and **Swagger** for REST API.

### Purpose

The purpose of this project is to create a simple CRUD application where the client can interact with both **REST and GraphQL APIs**. The client can switch between consuming data from the REST API or the GraphQL API, providing flexibility and demonstrating the differences and similarities between both approaches.

### Project Description

The project is a **Post Web Application** where users can:

- Create, list, edit, and delete posts.
- Create, edit, and delete comments related to the posts.
- Toggle between REST and GraphQL APIs to perform these operations.
- The client application uses **Next.js** and **Server Actions** to communicate efficiently with the backend server.
- The frontend uses **Storybook** for UI documentation and component management.
- The backend provides **GraphiQL** for testing GraphQL queries and mutations, and **Swagger** for REST API documentation and testing.
- The project uses **Docker Compose** with a **PostgreSQL database** for persistence.

## Project Structure

```
- client/  (Frontend application)
- server/  (Backend application)
- .vscode/ (Project configuration files)
- docker-compose.yml (Docker setup for PostgreSQL)
```

### Technologies Used

- TypeScript
- Fastify
- Mercurius (GraphQL server for Fastify)
- Drizzle ORM
- React (Client-side)
- Apollo Client (GraphQL Client)
- **Next.js (with Server Actions)**
- **Storybook (Frontend documentation tool)**
- **GraphiQL (GraphQL Testing Interface)**
- **Swagger (REST API Documentation Tool)**
- **Docker Compose (for PostgreSQL setup)**

## Installation

Clone the repository and install dependencies:

```bash
$ git clone https://github.com/pleaobraga/api-communication.git
$ cd api-communication
$ pnpm install
```

## Usage

To start the database using Docker Compose:

```bash
cd server
$ docker-compose up -d
```

To start the backend server:

```bash
$ cd server
$ pnpm run dev
```

To start the frontend application:

```bash
$ cd client
$ pnpm run dev
```

Access the application at `http://localhost:3000`

## Available Scripts

- `pnpm run dev` - Runs the application in development mode.
- `pnpm run build` - Builds the application for production.
- `pnpm run start` - Runs the application in production mode.

## Database

- Drizzle ORM is used for defining and interacting with the database schema.
- Database configuration is handled within the `server/db` folder.
- A **PostgreSQL database** is used, managed through **Docker Compose**.

## APIs

### REST API

- Built with Fastify's built-in support for RESTful routes.
- Supports CRUD operations for posts and comments.
- **Swagger** is used for documenting and testing the REST API.

### GraphQL API

- Implemented using Mercurius with Fastify.
- Supports queries and mutations for handling posts and comments.
- **GraphiQL** is provided for testing and interacting with the GraphQL API.

## Next Steps

- Add testing.
- Implement **Clean Architecture** on the backend to enhance modularity, maintainability, and scalability.
