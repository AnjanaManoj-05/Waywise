# WayWise - Smart Travel Itinerary Planner

## 📌 Overview

**WayWise** is a mobile travel planning application designed to help travelers organize, manage, and optimize their trips efficiently. The app enables users to create personalized itineraries, explore destinations, view locations on maps, check weather conditions, and manage travel schedules from a single platform.

WayWise aims to simplify travel planning by providing an intuitive and user-friendly experience for solo travelers and travel enthusiasts.

---

## ✨ Features

### 🗺️ Trip Planning

* Create and manage travel itineraries
* Add multiple destinations to a trip
* Organize daily travel schedules

### 📍 Location Services

* Google Maps integration
* Destination search and exploration
* Interactive map view

### 🌤️ Weather Information

* View weather conditions for destinations
* Get real-time weather updates

### 🔐 User Authentication

* Secure user registration and login
* JWT-based authentication
* Protected user data

### ❤️ Personalized Experience

* Save favorite destinations
* Manage personal travel plans
* Customized itinerary recommendations

### 📱 Modern Mobile UI

* Clean and intuitive interface
* Responsive design
* Smooth navigation experience

---

## 🛠️ Tech Stack

### Frontend

* React Native
* Expo Router
* Zustand (State Management)

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### APIs & Services

* Google Maps API
* Weather API
* JWT Authentication

---

## 📂 Project Structure

```text
WayWise/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── assets/
│   ├── store/
│   └── services/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── config/
│
├── docs/
│
├── screenshots/
│
├── README.md
└── package.json
```

---

## 🚀 Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/WayWise.git
cd WayWise
```

### Frontend Setup

```bash
cd frontend
npm install
npx expo start
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

---

## ⚙️ Environment Variables

Create a `.env` file in the backend directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

GOOGLE_MAPS_API_KEY=your_google_maps_api_key

WEATHER_API_KEY=your_weather_api_key
```

---

## 🏗️ System Architecture

```text
React Native App
        │
        ▼
    Express API
        │
        ▼
     MongoDB
        │
        ▼
External APIs
 ├─ Google Maps
 └─ Weather Service
```

---

## 🎯 Objectives

* Simplify travel planning for users.
* Provide a centralized platform for itinerary management.
* Offer location and weather-based travel assistance.
* Improve trip organization and user convenience.
* Deliver a seamless mobile experience.

---

## 🔮 Future Enhancements

* AI-based trip recommendations
* Budget tracking
* Hotel and flight booking integration
* Offline itinerary access
* Travel community features
* Real-time trip collaboration
* Expense management dashboard

---

**Project:** WayWise – Smart Travel Itinerary Planner

Developed as part of an academic software engineering and mobile application development project.

---


## ⭐ Support

If you find this project useful, consider giving it a star on GitHub.

**Happy Traveling with WayWise! 🌍✈️**
