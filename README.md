# AURA - Clothing & Accessories Store

A sleek, glassmorphism-styled e-commerce application built with the MERN stack.

## Prerequisites

- Node.js
- MongoDB (Running locally on default port 27017)

## Setup & Run

### 1. Backend (Server)

The backend handles the database connection and API.

```bash
cd server
npm install
npm run seed  # Seeds the database with sample products
npm start
```

Server runs on http://localhost:5000

### 2. Frontend (Client)

The frontend is the React user interface.

```bash
cd client
npm install
npm run dev
```

Client runs on http://localhost:5173

## Features

- **Design**: Modern glassmorphism aesthetic with gaussian blur and animations.
- **Shop**: Separate Clothing and Accessories sections.
- **Cart**: Fully functional cart with quantity management.
- **Checkout**: Simulated payment gateway integration.
- **Tech**: React, Node.js, Express, MongoDB.
