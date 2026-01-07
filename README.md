# 🐉 Dragon News

# [🐉 Dragon News](https://dragon-news-ebff7.web.app/category/0)

A modern, responsive online news portal built with **React (Vite)**, **Tailwind CSS**, **DaisyUI**, and **Firebase**. Dragon News delivers fast, clean, and structured news reading experiences with authentication and protected routes.

---

## 🚀 Live Features

- 📰 Dynamic news listing
- 🗂 Category-wise news filtering
- 🔍 News details page
- 🔐 Firebase Authentication (Login / Register)
- 🛡 Protected routes
- ⚡ Fast build with Vite
- 📱 Fully responsive UI

---

## 🛠 Tech Stack

**Frontend**

- React (Vite)
- React Router DOM
- Tailwind CSS
- DaisyUI

**Backend / Services**

- Firebase Authentication
- Firebase Hosting (optional)

---

## 📁 Project Structure

```bash
src/
├── assets/          # Images & static assets
├── components/      # Reusable UI components
├── layouts/         # Main & auth layouts
├── pages/           # All pages (Home, Login, Register, NewsDetails)
├── routes/          # Route & ProtectedRoute setup
├── firebase/        # Firebase config
├── App.jsx
└── main.jsx
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

⚠️ **Never push `.env` to GitHub**

---

## 📦 Installation & Setup

```bash
npm install
npm run dev
```

---

## 🔑 Authentication Flow

- User can Register & Login
- Firebase automatically manages auth state
- `onAuthStateChanged` is used for session persistence
- Protected routes restrict unauthorized access

---

## 🌐 Firebase CLI (Using NPX)

```bash
npx firebase login
npx firebase init
npx firebase deploy
```

---

## 🎨 UI & UX Highlights

- Clean newspaper-style layout
- Header + Category Sidebar + Main Content + Right Aside
- Loading states handled properly (no UI blink)
- Mobile-first responsive design

---

## 📌 Best Practices Used

- Environment variables for credentials
- Modular folder structure
- Reusable components
- Clean routing pattern
- Auth state driven navigation

---

## 🧑‍💻 Author

**Anik Shajol**
Frontend Developer | React Enthusiast

---

## 📄 License

This project is for learning and demo purposes.

---

🔥 _Dragon News — Read Fast. Stay Informed._
