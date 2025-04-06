# API Communication Server Documentation

## Overview

The API Communication Server is a backend application designed to handle RESTful and GraphQL API requests. It manages operations related to posts and comments, providing endpoints for creating, retrieving, updating, and deleting these resources.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Available Scripts](#available-scripts)
5. [API Endpoints](#api-endpoints)
   - [REST API](#rest-api)
   - [GraphQL API](#graphql-api)
6. [Database Migrations](#database-migrations)
7. [Code Quality and Formatting](#code-quality-and-formatting)
8. [License](#license)

## Getting Started

To get a local copy of the project up and running, follow these steps.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 22.14.0)
- [pnpm](https://pnpm.io/) (version 10.7.0)
- [Docker](https://www.docker.com/) (for running the database)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/pleaobraga/api-communication.git
   cd api-communication/server
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Start the database using Docker Compose:**

   ```bash
   docker-compose up -d
   ```

   This command will set up the PostgreSQL database as defined in the `docker-compose.yml` file.

## Configuration

Configuration settings are managed using environment variables. Create a `.env` file in the `server` directory with the following content:

```env
ENV=development
DATABASE_URL=postgres://user:password@localhost:5432/database_name
REST_PORT=3002
GRAPHQL_PORT=3001
```

Replace `user`, `password`, and `database_name` with your actual database credentials.

## Available Scripts

In the `server` directory, you can run:

- **`pnpm dev`**: Runs the server in development mode with hot-reloading.
- **`pnpm build`**: Compiles TypeScript code to JavaScript.
- **`pnpm start`**: Starts the compiled JavaScript server.
- **`pnpm lint`**: Lints the codebase using ESLint.
- **`pnpm format`**: Formats the codebase using Prettier.
- **`pnpm seed`**: Seeds the database with initial data.
- **`pnpm generate:migration`**: Generates a new database migration using Drizzle Kit.
- **`pnpm migrate`**: Applies pending database migrations.

## API Endpoints

### REST API

The server provides the following RESTful endpoints:

- **POST /posts**: Create a new post.
- **GET /posts/:id**: Retrieve a post by ID.
- **PUT /posts/:id**: Update a post by ID.
- **DELETE /posts/:id**: Delete a post by ID.
- **POST /comments**: Create a new comment.
- **GET /comments/:id**: Retrieve a comment by ID.
- **PUT /comments/:id**: Update a comment by ID.
- **DELETE /comments/:id**: Delete a comment by ID.

### GraphQL API

The server also exposes a GraphQL endpoint at `/graphql`. The available queries and mutations include:

- **Queries:**

  - `getPosts(id: ID): [Post]`

- **Mutations:**

  - `createPost(title: String!, description: String ,content: String!): Post`
  - `updatePost(id: ID!, title: String!, description: String, content: String!): Post`
  - `deletePost(id: ID!): Boolean`
  - `createComment(postId: ID!, content: String!): Comment`
  - `updateComment(id: ID!, content: String!): Comment`
  - `deleteComment(id: ID!): Boolean`

To explore and test the GraphQL API, you can use the GraphiQL interface available at `/graphql` when the server is running.

## Database Migrations

Database migrations are managed using [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm). To generate a new migration, run:

```bash
pnpm generate:migration
```

To apply pending migrations, run:

```bash
pnpm migrate
```

Ensure that your database is running and the `DATABASE_URL` is correctly set in your `.env` file.

## Code Quality and Formatting

The project uses ESLint for linting and Prettier for code formatting. To check for linting errors, run:

```bash
pnpm lint
```

To automatically format the codebase, run:

```bash
pnpm format
```

## License

This project is licensed under the ISC License. See the [LICENSE](../LICENSE) file for details.

---

For more detailed information, please refer to the [GitHub repository](https://github.com/pleaobraga/api-communication/tree/main/server).
