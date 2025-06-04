# 🧠 Mental Wellness Application

## 🌐 Project Title

**Mental Wellness**

## 📖 Overview

**MentalWellness** is a comprehensive full-stack web application built to support and enhance users' mental health through an interactive and secure digital platform. The application utilizes the **MERN stack**—MongoDB, Express.js, React.js, and Node.js—along with **TailwindCSS** for styling and **Framer Motion** for smooth, modern animations.

The platform provides a calming, user-friendly space where individuals can access tools like guided breathing exercises, casual games, inspirational books, personal blogs, and motivational podcasts. All features are securely gated behind a robust authentication system to ensure user safety and privacy. 


**Link to the deployed project:** [MentalWellness](https://mentalwellness-5xb5.onrender.com/)

---

## 🛠️ Tech Stack

* **Frontend:** React.js, TailwindCSS, Framer Motion
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (NoSQL)
* **Animations:** Framer Motion

---

## 🧭 Application Flow and Pages

### 🏠 Home Page

* Introduction to the application’s mission and features.
* Navigation bar includes:

  * Home
  * About Us
  * Contact Us
  * Login / Register

### 🔐 Authentication

* Secure signup and login system.
* Authentication via **JWT tokens** and **hashed passwords**.
* Access to all wellness features post-login.

---

## ✨ Core Features (Post-Login)

### 1. 🧘‍♂️ Breathing and Exercises

* Guided breathing and physical exercises to reduce stress.
* Embedded video content (e.g., YouTube or hosted videos).
* Enhanced UX with Framer Motion animations.

### 2. 🎮 Entertainment Games

* Casual, fun games to help users relax.
* Mix of built-in and trusted external games.

### 3. 📚 Book Library

* Curated e-books and articles on wellness, personal development, and relaxation.
* In-browser viewing or download options.

### 4. ✍️ Blog

* Journaling space for personal expression.
* Posts can be saved privately or shared within the community (if enabled).

### 5. 🎧 Podcasts

* Motivational and mental wellness audio content.
* Categories include: mindfulness, meditation, personal growth, and more.

---

## 🎨 UI/UX Design

* **TailwindCSS:** For clean, responsive design using mobile-first principles.
* **Framer Motion:** For animated interactions, transitions, and modern UI behavior.
* **Design Ethos:** Minimalist layout, soft color palette, and intuitive navigation for a calming experience.

---

## 🧩 Key Challenges & Solutions

| Challenge                       | Solution                                                              |
| ------------------------------- | --------------------------------------------------------------------- |
| Embedding and displaying videos | Used responsive video components with embedded YouTube/hosted content |
| Secure authentication & routing | JWT-based auth + protected routes with Express middleware             |
| Making UI fluid and responsive  | TailwindCSS with responsive/mobile-first design principles            |
| Ensuring smooth animations      | GPU-accelerated transitions via Framer Motion                         |

---

---

## ✅ Conclusion

**MentalWellness** is a thoughtfully designed digital wellness platform that blends practical mental health tools with engaging content and a serene user experience. It showcases a modern, scalable full-stack architecture with an empathetic design philosophy, aiming to make mental wellness more accessible and impactful.

---

## 📂 Project Setup 

```bash
# Clone the repository
git clone https://github.com/Aadinath1234/MentalWellness.git

# Navigate to the project directory
cd mentalwellness

# Install dependencies for frontend and backend
cd server 
npm install       # For root and backend
cd client && npm install   # For React frontend

# Run the application
npm run dev       # Start both client and server concurrently
node index.js or nodemon index.js 
```
