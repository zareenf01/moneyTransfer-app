# Money-Transfer App
Money Transfer MERN stack app with authentication, it is a full-fledged web app designed for transactions and user accounts. It includes authentication features using Zod for data validation, JWT for secure user authentication, and React Tailwind for styling the frontend components.

## Table of Contents
* [Features](#features)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Usage](#usage)

## Features
* User authentication (signup, signin) using JWT tokens.
* Secure endpoints using JWT middleware for authorization.
* Money transfer between user accounts with transaction handling.
* User profile update functionality.

## Prerequisites
* Node.js and npm installed on your machine.
* MongoDB database instance (local or cloud-hosted).
* Postman or similar tool for API testing.

# Installation
 Backend
1. Clone the repository:
   
   ```
   https://github.com/zareenf01/moneyTransfer-app.git
   ```
2. Navigate to the backend folder:

   ```
   cd backend
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a .env file in the root directory and add your MongoDB connection URI and JWT secret:
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

5. Start the backend server:
   ```
   npm start
   ```
   
Frontend

6. Navigate to the frontend folder:
   ```
   cd frontend
   ```
7. Install frontend dependencies:
   ```
   npm install
   ```
8. Start the frontend development server:
   ```
   npm run dev
   ```

# Usage
Once both the backend and frontend servers are running, open your browser and navigate to localhost to use the money transfer application.
