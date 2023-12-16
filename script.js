let toDoCreate = document.getElementById('form')
let arr =[];
toDoCreate.addEventListener("submit",(event)=>{
    event.preventDefault();
    let activity = document.getElementById('activity').value
    let todotime = document.getElementById('time').value
    let prior = document.getElementById('prior').value

    let newDiv = document.createElement('div')
    arr.push(newDiv);
    let idnew = arr.length-1;
    newDiv.setAttribute("id",idnew)
    newDiv.innerHTML = `<h3>${activity}</h3>
        <h4>${todotime}</h4>
        <h5>${prior}</h5>
        <button onclick="editTask(this)" data-id = ${idnew}>Edit</button>
        <button onclick="saveTask(this)" data-id = ${idnew}>Save</button>
        <button onclick="deleteTask(this)" data-id = ${idnew}>Delete</button>`
    let parentNode = document.getElementById('contain')
    parentNode.appendChild(newDiv)
})
function deleteTask(buttonref){
    let idedelete = buttonref.getAttribute("data-id");
    let deleteElement = document.getElementById(idedelete)
    for(let i =0; i<=arr.length;i++){
        if(i==idedelete){
            arr.splice(i,1);
            break;
        }
    }
    deleteElement.remove();
}
function editTask(buttonref){
    let idedit = buttonref.getAttribute("data-id");
    let idElement = document.getElementById(idedit)
    idElement.contentEditable=true;   
    idElement.style.backgroundColor = "#dddbdb"
}
function saveTask(buttonref){
    let saveedit = buttonref.getAttribute("data-id");
    let saveElement = document.getElementById(saveedit)
    saveElement.contentEditable=false;   
    saveElement.style.backgroundColor = "#ffffff"
}
function countTask(){
    let pid = document.getElementById("task-count")
    pid.innerText = `Task Count = ${arr.length}`
}
setInterval(countTask,1000);

