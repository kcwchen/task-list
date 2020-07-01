// UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all Event listeners
loadEventListeners();

function loadEventListeners() {
    // Add Task
    form.addEventListener('submit', addTask);

    // Remove task
    taskList.addEventListener('click', removeTask);

    // Clear tasks
    clearBtn.addEventListener('click', clearTasks);

    // Filter tasks
    filter.addEventListener('keyup', filterTasks);
}

function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    }

    // Create li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    // Create link
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>'

    // Append link to li & li to ul
    li.appendChild(link);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
    
    e.preventDefault();
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

function clearTasks() {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    
    document.querySelectorAll('.collection-item').forEach(
        function(task) {
            const item = task.firstChild.textContent;
            item.toLowerCase().indexOf(text) != -1 ? task.style.display = 'block' : task.style.display = 'none';
        }
    )
}