# SnapHive - Admin Panel

This is the **Admin Panel** for managing users, professionals, and bookings. The system allows **admin users** to add professionals, view all bookings, and manage the platform efficiently. Professionals can log in and manage their bookings and profiles.

## 🚀 Live Demo
[SnapHive Admin ✈️](https://snaphive-services.vercel.app/)

## Features 🚀
- ✅ **Admin Dashboard** to manage professionals and bookings
- ✅ **Professional Dashboard** for service providers
- ✅ **Secure Authentication** for professionals
- ✅ **Seamless Navigation** using React Router
- ✅ **Real-time Notifications** with React Toastify
- ✅ **TailwindCSS Integration** for responsive design

## Project Setup 🛠️

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/deepakcode21/snaphive-services.git
cd admin
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set up environment variables
Create a `.env` file in the root directory and add the necessary API keys and configurations.
```sh
VITE_BACKEND_URL = ''
VITE_CURRENCY = ''
```

### 4️⃣ Run the Project
```sh
npm run dev
```
The app will be available at `http://localhost:5174/`

## Folder Structure 📂
```
admin/
│-- src/
│   │-- assets/                        # Static assets
│   │-- components/                    # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │-- context/                      # Global context
│   │   ├── AdminContext.jsx
│   │   ├── AppContext.jsx
│   │   ├── ProContext.jsx
│   │-- pages/                        # Page-level components
│   │   ├── Admin/                    # Page-level components for Admin
│   │   │   ├── AddPro.jsx
│   │   │   ├── AllBookings.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── ProList.jsx
│   │   ├── Professional/            # Page-level components for Professional
│   │   │   ├── ProBookings.jsx
│   │   │   ├── ProDashboard.jsx
│   │   │   ├── ProProfile.jsx
│   │   ├── Login.jsx
│   │-- App.jsx
│   │-- index.css
│   │-- main.jsx
│-- .env                             # Environment variables
│-- index.html
│-- package-lock.json
│-- package.json                    # Dependencies & Scripts
│-- README.md                       # Project Documentation
│-- vite.config.js                  # Vite configuration
```

## 🛠️ Tech Stack
- **Frontend**: React, TailwindCSS, Framer Motion
- **State Management**: React Context API
- **Routing**: React Router DOM
- **API Handling**: Axios
- **Notifications**: React Toastify

## Dependencies 📦
This project is built with the following dependencies:
```json
"dependencies": {
    "@tailwindcss/vite": "^4.0.6",
    "axios": "^1.7.9",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.1.5",
    "react-toastify": "^11.0.3",
    "tailwindcss": "^4.0.6"
  }
```


## 📜 License
This project is licensed under the MIT License.

## 🤝 Contribution
Feel free to contribute! Fork the repo, make changes, and submit a pull request.

##

Developed with ❤️ by [Deepak (ArrowMax)](https://github.com/deepakcode21)
