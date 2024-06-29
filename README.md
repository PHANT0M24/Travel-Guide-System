Destination Diary is a comprehensive tour guide system designed to enhance your travel experiences. This project was developed collaboratively by a team of four members using the MERN stack. It leverages the power of Tailwind CSS and DaisyUI for styling and JWT for secure authentication.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Introduction

Destination Diary aims to provide travelers with an intuitive platform to discover and document their travel experiences. Users can explore various destinations, read and write reviews, and keep a diary of their journeys.

## Features

- **User Authentication:** Secure login and signup using JWT.
- **Destination Discovery:** Explore destinations with detailed descriptions and user reviews.
- **User Reviews:** Read and write reviews for different destinations.
- **Travel Diary:** Keep a personal diary of your travels.
- **Responsive Design:** Mobile-first design with Tailwind CSS and DaisyUI.

## Tech Stack

- **Frontend:** React, Tailwind CSS, DaisyUI
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)

## Installation

Follow these steps to set up the project locally.

### Prerequisites

- Node.js
- MongoDB

### Clone the repository

```bash
git clone https://github.com/yourusername/destination-diary.git
cd destination-diary
Install dependencies
Backend
bash
Copy code
cd backend
npm install
Frontend
bash
Copy code
cd frontend
npm install
Environment Variables
Create a .env file in the backend directory and add the following variables:

makefile
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Running the application
Backend
bash
Copy code
cd backend
npm start
Frontend
bash
Copy code
cd frontend
npm start
Open your browser and go to http://localhost:3000.

Acknowledgements
MERN Stack
Tailwind CSS
DaisyUI
JWT
