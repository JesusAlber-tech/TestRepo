# Node.js RESTful API

This project is a simple RESTful API built with Node.js and Express that manages a list of users. It provides endpoints for retrieving, adding, updating, and deleting users, using an in-memory array for data storage. The API includes validation and error handling to ensure robust operations.

## Project Structure

```
nodejs-rest-api
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains user-related request handlers
│   │   └── userController.js
│   ├── routes                # Defines API routes
│   │   └── userRoutes.js
│   ├── models                # Contains data models
│   │   └── userModel.js
│   └── middlewares           # Custom middleware functions
│       └── errorHandler.js
├── package.json              # NPM configuration file
├── .env                      # Environment variables
└── README.md                 # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd nodejs-rest-api
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **API Endpoints:**
   - `GET /users` - Retrieve a list of all users
   - `POST /users` - Add a new user
   - `GET /users/:id` - Retrieve a user by ID
   - `PUT /users/:id` - Update a user by ID
   - `DELETE /users/:id` - Delete a user by ID

## Error Handling

The API includes middleware for error handling, which sends appropriate HTTP status codes and messages in case of errors.

## Environment Variables

You can configure environment variables in the `.env` file as needed for your application.