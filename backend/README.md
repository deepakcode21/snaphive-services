# SnapHive - Backend

This is the **backend** of the SnapHive Services, built using **Node.js, Express, and MongoDB**. It provides authentication, booking management, and professional availability tracking with a secure API.

## Tech Stack 🛠️

- **Backend:**                   Node.js, Express.js
- **Database:**                  MongoDB (Mongoose ODM)
- **Authentication:**            JWT (JSON Web Tokens)
- **File Uploads:**              Multer & Cloudinary
- **Payment Gateway:**           Razorpay
- **Environment Variables:**     Dotenv

---

## Folder Structure 📂

```
backend/
│── config/
│   ├── cloudinary.js         # Cloudinary Config
│   ├── mongoDB.js            # MongoDB Connection
│
│── controllers/
│   ├── adminController.js    # Admin functionalities
│   ├── proController.js      # Professional functionalities
│   ├── userController.js     # User functionalities
│
│── middlewares/
│   ├── authAdmin.js          # Admin authentication middleware
│   ├── authPro.js            # Professional authentication middleware
│   ├── authUser.js           # User authentication middleware
│   ├── multer.js             # File upload middleware
│
│── models/
│   ├── bookingModel.js       # Booking schema
│   ├── professionalModel.js  # Professional schema
│   ├── userModel.js          # User schema
│
│── routes/
│   ├── adminRoute.js         # Admin routes
│   ├── proRoute.js           # Professional routes
│   ├── userRoute.js          # User routes
│
│── .env                      # Environment variables
│── .gitignore                # Ignore sensitive files
│── package.json              # Dependencies & scripts
│── server.js                 # Main server file
```

---

## Installation & Setup 🛠️

1️⃣ Clone the repository:
```sh
 git clone https://github.com/deepakcode21/snaphive-services.git
```

2️⃣ Navigate to backend folder:
```sh
 cd backend
```

3️⃣ Install dependencies:
```sh
 npm install
```

4️⃣ Create a `.env` file in the root directory and add the necessary API keys and configurations:
```sh
MONGODB_URI = ''

CLOUDINARY_NAME = ''
CLOUDINARY_API_KEY = ''
CLOUDINARY_SECRET_KEY = ''

ADMIN_EMAIL = ''
ADMIN_PASSWORD = ''

JWT_SECRET = ''

RAZORPAY_KEY_ID = ''
RAZORPAY_KEY_SECRET = ''

CURRENCY = ''
```

5️⃣ Start the server:
```sh
 node server.js
```

---

## API Endpoints 🛠️

### Admin Routes
| Method | Route | Description |
|--------|-------|-------------|
| POST   | `/api/admin/add-professional` | Add a new professional |
| POST   | `/api/admin/login` | Admin login |
| POST   | `/api/admin/all-professional` | Get all professional |
| POST   | `/api/admin/change-availability` | Change professional availability |
| GET    | `/api/admin/bookings` | Get all bookings |
| POST   | `/api/admin/cancel-booking` | Cancel a booking |
| GET    | `/api/admin/dashboard` | Get all deatails |

### Professional Routes
| Method | Route | Description |
|--------|-------|-------------|
| POST   | `/api/professional/login` | Professional login |
| GET    | `/api/professional/bookings` | View own bookings |
| GET    | `/api/professional/profile` | Get own profile |
| POST   | `/api/professional/dashboard` | Get all deatails |
| POST   | `/api/professional/update-profile` | Update profile details |
| POST   | `/api/professional/cancel-booking` | Cancel booking |
| POST   | `/api/professional/complete-booking` | Mark booking as completed |

### User Routes
| Method | Route | Description |
|--------|-------|-------------|
| POST   | `/api/user/register` | Register a new user |
| POST   | `/api/user/login` | Login user |
| GET    | `/api/user/my-bookings` | View own bookings |
| POST   | `/api/user/book-services` | Book a professional |
| POST   | `/api/user/cancel-booking` | Cancel a booking |
| GET    | `/api/user/get-profile` | Get user profile |
| POST   | `/api/user/update-profile` | Update user profile |
| POST   | `/api/user/payment-razorpay` | User payment for services |
| POST   | `/api/user/verifyRazorpay` | Verify payment status |

---

## Dependencies 📦

```json
{
  "dependencies": {
    "bcrypt": "^5.1.1",
    "cloudinary": "^2.5.1",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.10.0",
    "multer": "^1.4.5-lts.1",
    "razorpay": "^2.9.6",
    "validator": "^13.12.0"
  }
}
```

---

## Author ✍️
Developed by **Deepak** ([GitHub](https://github.com/deepakcode21)) 🚀

---

## Contributing 🤝
Feel free to fork, modify, and submit a pull request if you want to enhance the system! 😊

---

## License 📜
This project is **licensed under MIT license**.
