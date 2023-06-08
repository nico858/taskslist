# Basic Task List API

This project is a basic task list API that allows you to view, edit, add, and delete tasks. It uses the following technologies:

- Postgres: A relational database for storing task data.
- SQL queries: Used to interact with the Postgres database.
- React: A JavaScript library for building user interfaces.
- Node.js: A JavaScript runtime environment for server-side development.
- Docker: A platform for containerizing and deploying applications.

## Installation

To run the API locally, please follow these steps:

1. Clone the repository: `git clone `
2. Navigate to the project root directory: `cd tasklist`
3. Intall the dependecies for the API: `npm install`
4. Navigate to the client directory: `cd client`
5. Install the depedencies for the client: `npm install`

## Configuration
If you want to use the API you need to create the db. You can use the docker-compose file for it.

## Starting the API
To start the API and client, follow these steps:
1. In the project root directory, start the API server: `npm start`
2. Open a new terminal and navigate to the client directory: `cd client`
3. Start the client application: `npm start`

## API Endpoints
**`GET`**` /tasks` Retrieve all tasks.

**`POST`**` /tasks` Create a new task.

**`PUT`**` /tasks/:id` Update an existing task.

**`DELETE`**`/tasks/:id` Delete a task.
