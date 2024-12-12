# Profile Mapping Web Application

## Overview

This project is a **Profile Mapping Web Application** built using **React.js** for the frontend and **Node.js** with **Express** for the backend. The application allows users to create, view, update, and delete profiles, with a clean and easy-to-use admin panel for managing these profiles. The backend communicates with a MySQL database to store and retrieve profile data.

### Key Features:
- **User Profiles**: Create, view, and manage user profiles.
- **Admin Panel**: Add, edit, and delete profiles from an admin interface.
- **Responsive Design**: Mobile-friendly UI to provide a seamless experience on different devices.
- **Profile Details**: View additional details like address, contact, and interests.

## Project Structure

### Frontend (React App)
The frontend of the project is built using **React.js**. It includes:
- **AdminPanel.js**: The admin interface where profiles can be managed.
- **ProfileDetails.js**: Displays detailed information about a selected profile.
- **App.js**: The main React component, responsible for routing and rendering the app.

### Backend (Node.js with Express)
The backend is built with **Node.js** and **Express**, providing a RESTful API to interact with the profiles in the database. It includes:
- **server.js**: The main server file that handles API routes for profiles.
- **MySQL Database**: The database where profile data is stored (e.g., name, description, image URL, contact, and interests).

## Getting Started

### Prerequisites
Make sure you have the following software installed:
- **Node.js** (v14 or higher)
- **npm** (Node package manager, comes with Node.js)
- **MySQL** (or another database, but MySQL is used for this project)

### Installation Steps

#### 1. Clone the repository
First, clone the repository to your local machine:
```bash
git clone https://github.com/peppervikes/profile-mapping-app.git
cd profile-mapping-app
```

#### 2. Install dependencies for the frontend
Navigate to the `frontend/` directory and install the required dependencies:
```bash
cd frontend
npm install
```

#### 3. Install dependencies for the backend
Navigate to the `backend/` directory and install the required dependencies:
```bash
cd backend
npm install
```

#### 4. Setup MySQL Database
1. Create a new MySQL database, for example: `profile_mapping`
2. Import the necessary tables and data using the provided SQL scripts or manually create the tables (you can check the `server.js` file for table structure).

#### 5. Setup environment variables
Create a `.env` file in the `backend/` directory with the following content:
```plaintext
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=profile_mapping
PORT=5000
```
Make sure to replace `yourpassword` with your actual MySQL password.

#### 6. Run the backend
Start the backend server using the following command:
```bash
cd backend
npm start
```
The server will start on `http://localhost:5000`.

#### 7. Run the frontend
Now, go back to the `frontend/` directory and start the frontend development server:
```bash
cd frontend
npm start
```
The React app will start on `http://localhost:3000`.

### Accessing the Application
- Open the React app in your browser at `http://localhost:3000`.
- You can access the **Admin Panel** to manage profiles and view details for each profile.

## Usage

### Features of the Admin Panel:
- **Add New Profile**: The admin can create new profiles by entering the name, description, image URL, and address.
- **Edit Profile**: Click on the "Edit" button for any profile to update its details.
- **Delete Profile**: Profiles can be deleted from the admin panel.

### Features of the Profile Page:
- **View Profile Details**: Click on any profile in the list to view detailed information including the contact information and interests.

## Technologies Used

- **Frontend**: React.js, Axios (for API requests), CSS for styling
- **Backend**: Node.js, Express, MySQL
- **Database**: MySQL
- **Other Libraries**: 
  - `cors` for cross-origin requests
  - `body-parser` to parse incoming request bodies

## Project Structure

```plaintext
profile-mapping-app/
│
├── frontend/                # React frontend
│   ├── src/                 # React source code
│   ├── public/              # Public files like images
│   └── package.json         # Frontend dependencies and scripts
│
├── backend/                 # Node.js backend
│   ├── server.js            # Main server file
│   ├── db.js                # MySQL database connection
│   └── package.json         # Backend dependencies and scripts
│
├── .gitignore               # Files and folders to ignore by git
├── README.md                # Project documentation
└── package.json             # Root package.json (optional, for managing both frontend and backend together)
```

## Contributing

Feel free to fork this repository, create a branch, and submit pull requests. If you'd like to contribute to the project, please follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes and commit them (`git commit -am 'Add a new feature'`)
4. Push to your branch (`git push origin feature/your-feature-name`)
5. Create a pull request

## License

This project is open-source and available under the [MIT License](LICENSE).
