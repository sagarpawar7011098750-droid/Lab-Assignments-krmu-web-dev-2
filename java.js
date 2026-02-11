const form = document.getElementById("form");
const titleInput = document.getElementById("event_title"); 
const dateInput = document.getElementById("event_date");   
const categoryInput = document.getElementById("category");
const descInput = document.getElementById("description");
const eventList = document.getElementById("eventList");
const clearBtn = document.getElementById("clearEvents");
const sampleBtn = document.getElementById("addSampleEvents");

form.addEventListener("submit", function(event) {
    
    event.preventDefault();

    
    if (titleInput.value === "") {
        alert("Please enter an Event Title.");
        return;
    }

   
    createEvent(titleInput.value, dateInput.value, categoryInput.value, descInput.value);

    
    form.reset();
});
function createEvent(title, date, category, desc) {
   
    const li = document.createElement("li");
    
   
    li.className = `event-card ${category}`;

   
    li.innerHTML = `
        <div class="info">
            <h3>${title} <small>(${category})</small></h3>
            <p><strong>Date:</strong> ${date || "No date"}</p>
            <p>${desc}</p>
        </div>
        <button class="delete-btn">Delete</button>
    `;

    
    li.querySelector(".delete-btn").addEventListener("click", function() {
        li.remove();
    });

    
    eventList.appendChild(li);
}



sampleBtn.addEventListener("click", function() {
    createEvent("Team Meeting", "2023-11-15", "work", "Discuss project roadmap.");
    createEvent("Grocery Shopping", "2023-11-16", "personal", "Buy milk and eggs.");
    createEvent("Gym", "2023-11-16", "personal", "exercise accordingly..");
});
clearBtn.addEventListener("click", function() {
    if(confirm("Delete all events?")) {
        eventList.innerHTML = "";
    }
});