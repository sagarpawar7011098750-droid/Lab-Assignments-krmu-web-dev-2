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