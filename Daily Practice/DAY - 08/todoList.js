let todoList  = ["HTML", "CSS", "JavaScript"]

let taskInputEl = document.getElementById("taskInput");
let addTaskBtnEl = document.getElementById("addTaskBtn");
let todoEditBtnEl = document.getElementById("todoEditBtn");
let todoDelBtnEl = document.getElementById("todoDelBtn");
let todoListEl = document.getElementById("todoList");


function displayTodo(){
    let todoIn = taskInputEl.value;
    todoList.push(todoIn);
    todoListEl.innerHTML = "";
    for(todo of todoList){
        
        const todoItemCont = document.createElement("div");
        todoItemCont.classList.add('todoItem');

        const checkboxAndHeading = document.createElement("div");

        const checkbox = document.createElement('input');
        checkbox.type="checkbox";
        checkboxAndHeading.appendChild(checkbox);
        
        const spanEl = document.createElement("span");
        spanEl.textContent = todo;
        checkboxAndHeading.appendChild(spanEl);

        todoItemCont.appendChild(checkboxAndHeading);


        const buttonsContainer = document.createElement("div");

        const editbtn = document.createElement('button');
        editbtn.textContent = "Edit";
        buttonsContainer.appendChild(editbtn);

        const deletebtn = document.createElement('button');
        deletebtn.textContent = "Delete";
        buttonsContainer.appendChild(deletebtn);

        todoItemCont.appendChild(buttonsContainer);
        todoListEl.appendChild(todoItemCont);
        console.log(todo);

    }
}
addTaskBtnEl.addEventListener("click", function () {
    let todo = taskInputEl.value;
    if (todo!==""){
        displayTodo();
    }
    taskInputEl.value = "" ;
})


todoEditBtnEl.addEventListener("click", function () {
    console.log("Edit the Todo")
})
deletebtn.addEventListener("click", function(){
  console.log("delete the Todo");
});