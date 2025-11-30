# 📞 Contacts API with JWT Authentication

This project is a **backend-only Node.js API** built to learn and practice:

* Creating REST APIs
* Implementing **CRUD operations**
* Handling authentication with **JWT**
* Structuring an Express backend
* Connecting and working with **MongoDB**
* Testing APIs using **Postman**

It is a learning-focused backend project where I explored how professional APIs are built from scratch.

---

## 🚀 Tech Stack

**Backend Framework:**

* **Node.js** + **Express.js**

**Database:**

* **MongoDB** (connected using Mongoose ORM)

**Authentication:**

* **JWT (JSON Web Token)** for user login and access control
* Protected routes using custom middleware

**Other Libraries:**

* bcrypt (password hashing)
* dotenv (environment variables)
* nodemon (development server auto-reload)

---

## 📌 Features

### 🔐 **User Authentication**

* Register new users
* Login with email & password
* Generate JWT tokens
* Access protected routes using Bearer tokens
* Middleware to validate user tokens

### 📇 **Contacts CRUD**

All contact routes are protected (authentication required):

* **Create** a new contact
* **Get all** contacts belonging to the logged-in user
* **Get one** contact by ID
* **Update** contact details
* **Delete** a contact

Each contact is linked to the user who created it.

---

## ▶️ How to Run the Project

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Set environment variables

Create a `.env` file with:

```
PORT=5000
CONNECTION_STRING=your_mongodb_url
ACCESS_TOKEN_SECRET=your_secret_key
```

### 3️⃣ Start the server

```bash
npm start
```

### 4️⃣ Test all routes using **Postman**

Use the following base endpoints:

```
/api/user/register
/api/user/login
/api/user/current

/api/contacts
/api/contacts/:id
```

---

## 🎯 What I Learned

This project helped me understand:

* How backend APIs are structured in real-world applications
* How JWT works and how to protect routes
* How to organize controllers, routes, models, and middleware
* How to handle errors cleanly
* How to test APIs effectively using Postman
* Basics of connecting and querying MongoDB with Mongoose

---

