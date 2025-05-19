document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (!taskText) return;
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;
    span.onclick = function() {
        li.classList.toggle('completed');
    };
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'deleteBtn';
    delBtn.onclick = function() {
        li.remove();
    };
    li.appendChild(span);
    li.appendChild(delBtn);
    document.getElementById('taskList').appendChild(li);
    input.value = '';
}