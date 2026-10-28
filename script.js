const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {

    const tarefa = taskInput.value;

    const li = document.createElement("li");

    li.textContent = tarefa;

    taskList.appendChild(li);

    taskInput.value = "";
});