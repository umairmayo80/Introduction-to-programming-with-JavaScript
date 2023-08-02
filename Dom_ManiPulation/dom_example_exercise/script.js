// Get the input and task list elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add a new task to the list
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return; // Don't add empty tasks

    const listItem = document.createElement("li");
    listItem.innerText = taskText;

    const completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
    completeButton.onclick = () => {
        listItem.classList.toggle("completed");
    };

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = () => {
        listItem.remove();
    };

    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = ""; // Clear the input field after adding the task
}

// Listen for Enter key press in the input field
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
