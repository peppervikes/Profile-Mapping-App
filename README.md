<h1 align="center">Profile Mapping Web Application</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
  <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" />
</p>

## Overview
The **Profile Mapping Web Application** is a full-stack project utilizing modern web architecture to facilitate the management of dynamic user profiles. This project serves as an excellent demonstration of successfully connecting a React front-end to an Express/Node.js REST API with a persistent MySQL database.

## 🚀 Key Features
- **Centralized Data Management**: A robust Admin panel for creating, updating, viewing, and deleting user profile records.
- **RESTful API**: Custom Express backend providing clean and predictable endpoints for all CRUD operations.
- **Relational Database**: Leverages MySQL for structured data storage, ensuring data integrity across relationships like contacts and addresses.
- **Responsive Interface**: The application frontend dynamically renders content based on device dimensions for optimal mobile and desktop user experiences.

## 💻 Technical Architecture
- **Frontend**: React.js, Axios, modular CSS
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Middleware**: CORS handling, Body-parser

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14+)
- MySQL Server

### 1. Database Setup
Create a new MySQL database (e.g. `profile_mapping`) and establish the appropriate schema mimicking the fields within the server's logic.

### 2. Backend Initialization
1. Navigate into the backend directory.
   ```bash
   cd backend
   npm install
   ```
2. Create an environment `.env` file containing the following connections points:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=profile_mapping
   PORT=5000
   ```
3. Start the Node Server:
   ```bash
   npm start
   ```

### 3. Frontend Initialization
1. Navigate into the frontend directory.
   ```bash
   cd frontend
   npm install
   ```
2. Start the React development server:
   ```bash
   npm start
   ```
The Client bounds to `localhost:3000` and the API serves to `localhost:5000`.

## 🤝 Contribution Guidelines
This project highlights a solid understanding of the React-Express-SQL stack. Feel free to fork, enhance, and submit pull requests referencing improved states or hooks!

*Licensed under MIT.*
