

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector("#btn-clear");
const filter = document.querySelector("#search");

function loadEventListeners(){
    
    form.addEventListener("submit", addTask);
    taskList.addEventListener("click", removeTask);
    clearBtn.addEventListener("click", clearAllTask);
    filter.addEventListener("keyup", filterTask);
    
}

loadEventListeners();

// Add Task
function addTask(e){

    e.preventDefault();

    const li = document.createElement("li");
    li.className = "collection-item";
    li.innerText = taskInput.value;

    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = `<i class="fa fa-remove"></i>`;

    li.appendChild(link);
    taskList.appendChild(li);

    taskInput.value = "";

}



// Remove Task
function removeTask(e){
   if(e.target.parentElement.classList.contains("delete-item")){
    if(confirm("Are you sure delete ?")){
        e.target.parentElement.parentElement.remove();
        alert("task Deleted ...");
    }
   }
}

// Filter Task 
function filterTask(e){
    const searchText = e.target.value.toLowerCase();

    const tasks = document.querySelectorAll(".collection-item")
    
    tasks.forEach(task =>{
        const taskName = task.textContent.toLowerCase();

        task.style.display = taskName.includes(searchText) ? "block" : "none";
    })
}

// Clear All Task 
function clearAllTask(){
    if(confirm("Are you sure Delete All Task ?")){
        taskList.innerHTML = "";
    }
}