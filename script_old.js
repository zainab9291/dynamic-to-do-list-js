// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            // Create a new list item
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create a Remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');

            // Attach an event to the Remove button to delete the task
            removeBtn.onclick = () => {
                taskList.removeChild(li);
            };

            // Append the Remove button to the list item
            li.appendChild(removeBtn);

            // Add the list item to the task list
            taskList.appendChild(li);

            // Clear the input field
            taskInput.value = '';
        } else {
            alert('Please enter a task first!');
        }
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});