# Project Details

## Overview

This project is a user management system built using React for the frontend, with a backend powered by JSON Server. It is a simple CRUD (Create, Read, Update, Delete) application that allows users to register, edit their credentials, and log in. The project uses various libraries and tools to streamline development and provide a robust user experience.

## Technologies Used

### Frontend

- **Vite + React**: Fast and modern frontend build tool and framework.
- **react-hook-form**: Handles form validation and management.
- **axios**: For making HTTP requests.
- **react-router-dom**: Enables routing for the React application.
- **react-bootstrap**: Provides Bootstrap components for styling.

### Backend

- **JSON Server**: A simple JSON-based backend for prototyping and mocking REST APIs.

## Folder Structure

The project follows a well-organized folder structure to keep the code modular and maintainable:

- **src/**
  - **components/**: Contains reusable UI components.
  - **pages/**: Contains page components for different routes.
  - **App.js**: Main application component that sets up routing.
  - **index.js**: Entry point of the React application.
  - **db.json**: JSON Server database file to store user data.

## Features

### User Registration

- Route: `/register`
- Allows users to register with their email and password.
- Form validation ensures all required fields are filled.

### User Login

- Route: `/login`
- Allows users to log in with their email and password.
- Validates user credentials against the data stored in JSON Server.

### Edit User Credentials

- Route: `/users`
- Allows users to view and edit their credentials.
- Fetches user data from JSON Server and displays it in a form.

## Running the Project

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- JSON Server

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/raviycoder/react_assignment.git
   cd react-user-management