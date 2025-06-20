// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask(taskText, save = true) {
        if (taskText && taskText.trim() !== '') {
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
                
                // Update Local Storage
                let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

                tasks = tasks.filter(t => t !== taskText);
                
                localStorage.setItem('tasks', JSON.stringify(tasks)); 
            };

            // Append the Remove button to the list item
            li.appendChild(removeBtn);

            // Add the list item to the task list
            taskList.appendChild(li);

            // Clear the input field
            taskInput.value = '';
 
            // Save to Local Storage if required
            if (save) {
                const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

                tasks.push(taskText);
                
                localStorage.setItem('tasks', JSON.stringify(tasks)); 
            }
        } else {
            alert('Please enter a task first!');
        }
    }

    // Function to load tasks from Local Storage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        tasks.forEach(function (task) {
            addTask(task, false);
        });
    }

    // Attach event listeners
    addButton.addEventListener('click', () => addTask(taskInput.value.trim()));
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value.trim()); 
        }
    });

    // Initial load of tasks from Local Storage
    loadTasks();
});