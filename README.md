# Visitor Management System Documentation

The Visitor Management System is a web application that allows organizations to manage the check-in and check-out process for visitors. It provides a user-friendly interface for capturing visitor details, storing them in a database, and facilitating a smooth visitor management process.

## Technologies Used

The Visitor Management System is built using the following technologies:

- Front-end:
  - React: A JavaScript library for building user interfaces
  - Material-UI: A popular UI component library for React applications

- Back-end:
  - Node.js: A JavaScript runtime for server-side development
  - Express: A web application framework for Node.js
  - MySQL: A relational database management system for data storage

## Project Structure

The project follows a client-server architecture, with the front-end and back-end components separated into different directories:

client/ # Contains the front-end React application
src/ # Contains the source code for React components, styles, and routes
public/ # Contains the HTML template and other static assets

server/ # Contains the back-end Node.js application
index.js # The main entry point of the server application
routes.js # Defines the API routes for handling check-in and check-out requests
database.js # Handles the database connection and query execution


## Installation and Setup

To run the Visitor Management System locally, follow these steps:

1. Clone the project repository from GitHub.
2. Install Node.js and npm (Node Package Manager) if not already installed.
3. Open a terminal and navigate to the project directory.
4. Install the project dependencies by running the command: `npm install`.
5. Set up the MySQL database by creating a new database and importing the provided SQL schema.
6. Configure the database connection details in `server/database.js`.
7. Start the server by running the command: `npm run start:server`.
8. Start the client application by running the command: `npm run start:client`.
9. Access the Visitor Management System in a web browser at `http://localhost:3000`.

## Usage

The Visitor Management System provides the following functionalities:

1. **New Visitor Page**: Allows capturing visitor details for check-in.
2. **Existing Visitor Page**: Allows checking-in and checking-out existing visitors.
3. **Admin Dashboard**: Provides an overview of visitor statistics and history.

- **Check-In Process**:
  1. On the New Visitor Page, enter the visitor's details such as first name, last name, email, phone, company, and purpose of the visit.
  2. Click the "Check In" button to submit the form.
  3. The data will be sent to the server and stored in the database.

- **Check-Out Process**:
  1. On the Existing Visitor Page, enter the visitor's ID and purpose of the visit.
  2. Click the "Check Out" button to submit the form.
  3. The data will be sent to the server for processing.

## Future Enhancements

The Visitor Management System can be further enhanced with the following features:

- Integration with external systems such as access control systems or notification systems.
- Improved data validation and error handling.
- User authentication and role-based access control for administrators.
- Additional reporting and analytics capabilities.

---

This documentation provides an overview of the Visitor Management System project, including its technologies, project structure, installation instructions, usage guide, and potential future enhancements.

For more detailed information, please refer to the source code and relevant documentation files.

