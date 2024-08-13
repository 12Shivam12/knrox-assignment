# My knrox assignment with Vite and JSON Server

Welcome to the project! This README will guide you through setting up and running the project using React, Vite, and JSON Server.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Setup](#project-setup)
3. [Running the Project](#running-the-project)
4. [API Usage](#api-usage)

![Screenshot 2024-08-13 142652](https://github.com/user-attachments/assets/edb179d7-6811-488b-bcc5-d154e4d4bfba)

![Screenshot 2024-08-13 142712](https://github.com/user-attachments/assets/da9a343c-464e-4009-ba2b-5f9a5a9f5dd5)

## Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://classic.yarnpkg.com/)

## Project Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/your-project-name.git
   cd your-project-name
   ```

## Running the project

1. **Start the JSON Server**
   JSON Server provides a full fake REST API. To start it, run:

   ```
   npm run server
     or
    yarn server
   ```
   By default, JSON Server runs on http://localhost:4000. You can change the port in the package.json if needed.

2. **Start the Vite Development Server**
   Vite is a fast development server for React. To start it, run:

```bash
npm run dev
```
# or
```bash
yarn dev
```


## API Usage
The project uses JSON Server to mock the backend. The available API endpoints are:

1. Get all users: GET http://localhost:4000/users
2. Get a user by ID: GET http://localhost:4000/users/:id
3. Create a new user: POST http://localhost:4000/users with the user data in the request body
4. Delete a user: DELETE http://localhost:4000/users/:id

   




