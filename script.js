let input_box=document.getElementById("input-box");
let addTaskBtn=document.getElementById("addTaskBtn");
let task_list=document.getElementById("task-list");

addTaskBtn.addEventListener("click",function(){
    let task=input_box.value.trim();

    if(task!==""){
        let listElemnet=document.createElement("li");
        listElemnet.textContent=task;
        let deleteBtn=document.createElement("button");
        deleteBtn.textContent="❌";
        deleteBtn.className="delete-btn";
        deleteBtn.addEventListener("click",function(){
            task_list.removeChild(listElemnet);        });
        listElemnet.appendChild(deleteBtn);
        task_list.appendChild(listElemnet);
        input_box.value="";
    }
    else{
        alert("Please enter a task");
    }

    const li=document.createElement("li");
    li.classList.add("task-item");

    li.addEventListener("click",function(){
        li.classList.toggle("completed");
    });
});