# 📝 Redux Todo App (React + TailwindCSS)

A fully responsive Todo application built with **React**, **Redux Toolkit**, and **Tailwind CSS**.  
It demonstrates global state management, live statistics, persistence, dark mode, accessibility, and smooth UI.

---

## 🚀 Features

- **CRUD for Todos**
  - Add, Edit, Toggle Complete, Delete
  - Inline or Modal editing
- **Filtering**
  - All | Active | Completed
- **Statistics**
  - Shows total, completed, and remaining todos in the header
- **Global State with Redux**
  - Centralized todo management
  - Actions: `addTodo`, `editTodo`, `toggleTodo`, `deleteTodo`, `clearCompleted`, `setFilter`
- **Persistence**
  - Todos saved to `localStorage`
  - Small "Saved ✅" indicator when tasks are updated
- **Dark Mode**
  - Toggle between **Light 🌞** and **Dark 🌙**
  - Persists user preference
- **Responsive Design**
  - Works on **Mobile, Tablet, Desktop**
- **Accessibility**
  - Keyboard shortcuts
    - **Enter** → Add task
    - **Esc** → Cancel editing
- **Animations**
  - Smooth transitions for add/remove/toggle

---

## 🛠️ Tech Stack

- **React (CRA)** – UI library
- **Redux Toolkit** – State management
- **Tailwind CSS** – Styling & responsive design
- **localStorage** – Data persistence

---

## 📦 Installation & Setup

Clone the repository and install dependencies:
bash
git clone https://github.com/your-username/redux-todo-app.git
cd redux-todo-app
npm install

npm start

npm run build
