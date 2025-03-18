# SnapHive - Frontend

SnapHive is a professional service booking platform where users can explore and book services from verified professionals. This repository contains the frontend code for the SnapHive platform, built using React and TailwindCSS.

## 🚀 Live Demo
[SnapHive Live✈️](https://snaphive-service.vercel.app/)

## 📂 Project Structure
```
frontend/
├── src/
│   ├── assets/                # Static assets
│   ├── components/            # Reusable components
│   │   ├── Banner.jsx
│   │   ├── Category.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Navbar.jsx
│   │   ├── RelatedPro.jsx
│   │   ├── Testimonial.jsx
│   │   ├── TopProfessional.jsx
│   ├── context/
│   │   ├── AppContext.jsx      # Global context
│   ├── pages/                  # Page-level components
│   │   ├── About.jsx
│   │   ├── Booking.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── MyBookings.jsx
│   │   ├── MyProfile.jsx
│   │   ├── Professional.jsx
│   ├── index.css
│   ├── main.jsx
├── .env                         # Environment variables
├── index.html                   # Main HTML file
├── package.json                 # Dependencies & scripts
├── vite.config.js               # Vite configuration
└── README.md                    # Project Documentation
```

## 🛠️ Tech Stack
- **Frontend**: React, TailwindCSS, Framer Motion
- **State Management**: React Context API
- **Routing**: React Router DOM
- **API Handling**: Axios
- **Notifications**: React Toastify

## 📦 Dependencies
```json
"dependencies": {
    "@tailwindcss/vite": "^4.0.1",
    "axios": "^1.7.9",
    "dotenv": "^16.4.7",
    "framer-motion": "^12.4.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.4.0",
    "react-router-dom": "^7.1.3",
    "react-toastify": "^11.0.3",
    "tailwindcss": "^4.0.1"
}
```

## 🚀 Getting Started
### 1️⃣ Clone the repository
```sh
git clone https://github.com/deepakcode21/snaphive-services.git
cd frontend
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Set up environment variables
Create a `.env` file in the root directory and add the necessary API keys and configurations.

```
VITE_BACKEND_URL= ''
VITE_RAZORPAY_KEY_ID = ''
```

### 4️⃣ Run the project locally
```sh
npm run dev
```
The app will be available at `http://localhost:5173/`

## 🔥 Features
- ✅ **Explore Platform and Services** without login
- ✅ **Book services** by logging in
- ✅ **Check availability** of professionals
- ✅ **Online payments** via Razorpay
- ✅ **User profile management**
- ✅ **Admin & professional dashboards** (managed separately)

## 📜 License
This project is licensed under the MIT License.

## 🤝 Contribution
Feel free to contribute! Fork the repo, make changes, and submit a pull request.

---
Developed with ❤️ by [Deepak (ArrowMax)](https://github.com/deepakcode21)
