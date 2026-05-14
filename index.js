
const input = document.querySelector("#task");
const add = document.querySelector("#submit-btn");
const ul = document.querySelector(".collection");
const clear_btn = document.querySelector(".clear-tasks");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach((task) => {
    createTask(task);
});

// add task
add.addEventListener("click", ()=>{

    let value = input.value.trim();
    if(value === ""){
        alert("Enter Input Value");
        return;
    }
    tasks.push(value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    createTask(value);
    input.value = "";

});

// remove a task
ul.addEventListener("click", (e)=>{
    if(e.target.classList.contains("fa-remove")){

        const li = e.target.parentElement.parentElement;

        const text = li.firstChild.textContent.trim();

        li.style.color = "green"

        tasks = tasks.filter(task => task !== text);

        localStorage.setItem("tasks", JSON.stringify(tasks));

        li.remove();
    }
});


// clear all tasks
clear_btn.addEventListener("click", ()=>{

    tasks = [];
    localStorage.removeItem("tasks");
    ul.innerHTML = "";

});

 // li design
function createTask(task){

    const li = document.createElement("li");
    li.className = "collection-item";
    li.textContent = task;
    const item = document.createElement("a");
    item.className = "delete-item secondary-content";
    item.innerHTML = `<i class="fa fa-remove"></i>`;
    li.appendChild(item);
    ul.appendChild(li);

}