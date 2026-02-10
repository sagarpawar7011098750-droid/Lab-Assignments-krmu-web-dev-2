# 📅 Smart Event Calendar

A responsive, interactive web application for managing daily events and tasks. This project demonstrates DOM manipulation, event handling, and responsive CSS design.

## 🚀 Features

* **Add Events:** Users can input an event Title, Date, Category, and Description.
* **Category Color Coding:** Events are visually distinct based on their category:
    * 🔵 **Work** (Blue)
    * 🟢 **Personal** (Green)
    * 🟡 **Other** (Yellow)
* **Responsive Design:** Layout adjusts seamlessly between Desktop (side-by-side) and Mobile (stacked) views.
* **Interactivity:**
    * **Delete:** Remove individual events.
    * **Clear All:** Wipe the entire list with a confirmation prompt.
    * **Sample Data:** Quickly populate the calendar with test data for demonstration.
* **No Page Reloads:** Uses `preventDefault()` to handle form submissions smoothly.

## 🛠️ Technologies Used

* **HTML5:** Structure and semantic tags.
* **CSS3:** Flexbox for layout, media queries for responsiveness, and hover effects for interactivity.
* **JavaScript (Vanilla):** DOM manipulation (`createElement`, `appendChild`), Event Listeners, and form validation.

## 📂 Project Structure

```text
├── index.html      # Main structure of the application , also contains css internally.
├── java.js         # Logic for adding/removing events
└── README.md       # Project documentation