# 📝 Todo App Backend (Node.js + MongoDB + JWT)

A simple and secure **Todo Management System** backend built using **Node.js**, **Express**, **MongoDB (Mongoose)**, and **JWT Authentication**.  
It supports **user signup, login**, and complete **CRUD operations** for todos with authentication protection.

---

## 🚀 Features

- 🔐 **User Authentication**
  - Signup and Login using JWT (JSON Web Token)
  - Passwords securely hashed using bcrypt

- ✅ **Todo CRUD Operations**
  - Create a new todo (requires valid token)
  - Read all todos for the logged-in user
  - Update an existing todo
  - Delete a todo

- 🧱 **MVC Folder Structure**
  - Organized into Models, Controllers, Routes, and Middleware

---

## 🧩 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB with Mongoose ODM  
- **Authentication:** JWT (JSON Web Token)  
- **Password Security:** bcrypt  

---

## 📁 Folder Structure

project-root/
├── config/
│ └── db.js
├── controllers/
│ ├── authControllers.js
│ └── todoControllers.js
├── middlewares/
│ └── authMiddleware.js
├── models/
│ ├── User.js
│ └── Todo.js
├── routes/
│ ├── authRoutes.js
│ └── todoRoutes.js
├── .env
├── server.js
└── package.json

yaml
Copy code

---

## ⚙️ Installation and Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/todo-backend.git
2️⃣ Install Dependencies
bash
Copy code
npm install

4️⃣ Start the Server
bash
Copy code
nodemon server.js
or (for development with auto-restart)

bash
Copy code
npm run dev
📮 API Endpoints
🔑 Authentication Routes
Method	Endpoint	Description
POST	/api/user/signup	Register a new user
POST	/api/user/login	Login and receive JWT token

📝 Todo Routes (Protected)
Method	Endpoint	Description
POST	/api/todo	Create a new todo
GET	/api/todo	Get all todos for logged-in user
PUT	/api/todo/:id	Update a specific todo
DELETE	/api/todo/:id	Delete a specific todo

⚠️ All /api/todo routes require an Authorization header with a valid JWT token:

makefile
Copy code
Authorization: Bearer <your_token>
🧪 Example Requests
✅ Signup
POST /api/user/signup

json
Copy code
{
  "name": "Prasad",
  "email": "prasad@example.com",
  "password": "123456"
}
✅ Login
POST /api/user/login

json
Copy code
{
  "email": "prasad@example.com",
  "password": "123456"
}
Response:

json
Copy code
{
  "message": "Login successful",
  "token": "<your_jwt_token>"
}
✅ Add Todo
POST /api/todo

json
Copy code
{
  "title": "Learn Node.js",
  "description": "Practice JWT authentication"
}
🧰 Dependencies
Package	Purpose
express	Web framework
mongoose	MongoDB ODM
dotenv	Environment variable management
bcrypt	Password hashing
jsonwebtoken	Authentication token management
nodemon	Auto-restart for development

🧑‍💻 Author
Prasad Prabhu
📍 From Bhatkal, India
💼 MERN Stack Developer
🎯 Focused on secure and scalable backend systems