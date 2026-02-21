const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const themeBtn = document.getElementById("theme-btn");

// --- 1. THEME LOGIC (Day 2 Refined) ---
function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
});

// --- 2. TASK LOGIC (Day 5 CRUD Refined) ---
function addTask() {
    const taskValue = inputBox.value.trim();
    
    if (taskValue === '') {
        alert("Action Required: Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskValue; // Safer than innerHTML for plain text
    
    const span = document.createElement("span");
    span.innerHTML = "\u00d7"; 
    li.appendChild(span);

    listContainer.appendChild(li);
    inputBox.value = "";
    saveData();
}

// Event Delegation: One listener for the whole list
listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

// Listen for Enter key
inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

// --- 3. STORAGE LOGIC ---
function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function loadData() {
    const savedData = localStorage.getItem("tasks");
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}

// INITIALIZE APP
applySavedTheme();
loadData();