function addTask() {

    let task = document.getElementById("taskInput").value;

    if (task == "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let taskText = document.createElement("span");
    taskText.innerHTML = task;

    // Complete button
    let completeButton = document.createElement("button");
    completeButton.innerHTML = "Complete";

    completeButton.onclick = function() {
        taskText.style.textDecoration = "line-through";
        taskText.style.color = "green";
    };

    // Delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";

    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(taskText);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
}