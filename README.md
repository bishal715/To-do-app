# Simple Todo App

A clean, responsive, and user-friendly Todo application built with vanilla HTML, CSS, and JavaScript. This project demonstrates core web development skills by creating a dynamic single-page application that allows users to manage their daily tasks efficiently.

---

## ✨ Features

* **Add Tasks:** Quickly add new tasks to your list.
* **Mark as Complete:** Toggle tasks between active and completed states with a single click.
* **Filter Tasks:** View all tasks, only active tasks, or only completed tasks.
* **Delete Tasks:** Remove individual tasks from the list.
* **Clear Completed:** Instantly clear all completed tasks with one button.
* **Persistent Storage:** Your tasks are saved in the browser's `localStorage`, so your list is preserved even after closing the tab.
* **Responsive Design:** The layout is fully responsive and works beautifully on desktop, tablet, and mobile devices.
* **Empty State:** A helpful message appears when there are no tasks to display for the current filter.

---

## 🛠️ Technologies Used

* **HTML5:** For the structure and semantic markup of the application.
* **CSS3:** For custom styling, responsive design (using Flexbox), and animations.
* **JavaScript (ES6+):** For all the application logic, including DOM manipulation, event handling, and state management.

---

## 🚀 How to Run

No special setup is required! Since this is a vanilla web project, you can run it directly in your browser.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd your-repository-name
    ```
3.  **Open `index.html`:**
    Simply open the `index.html` file in your favorite web browser (like Chrome, Firefox, or Edge).

---

## 🔑 Key Concepts Implemented

* **DOM Manipulation:** Dynamically creating, updating, and deleting HTML elements using JavaScript to reflect the current state of the task list.
* **Event Handling:** Using `addEventListener` to manage user interactions like clicks and keyboard inputs.
* **State Management:** Maintaining the application's state in a single JavaScript array (`todos`) and re-rendering the UI whenever the state changes.
* **Local Storage:** Utilizing the browser's `localStorage` API to persist data across sessions, providing a seamless user experience.
* **Accessibility:** Using semantic HTML and `aria-label` attributes to ensure the application is usable by screen readers.
