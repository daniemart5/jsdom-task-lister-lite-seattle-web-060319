document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#create-task-form').addEventListener('submit', function(e){
    e.preventDefault()
    let priority = e.target[1][0].form[1].value
    let newTask = e.target[0].value
    if (newTask !== ""){
      addToList(newTask, priority)
      e.target[0].value = ""}
  })
});

function addToList(task, priority){
  let toDo = document.querySelector('#tasks')
  let newListItem = document.createElement('li')
  newListItem.innerHTML = task + '<button>x</button>'
  newListItem.id = task
  if (priority === "low"){
    newListItem.className = "low"
  } else if (priority === "medium"){
    newListItem.className = "medium"
  } else {
    newListItem.className = "high"
  }
  toDo.appendChild(newListItem)

  newListItem.addEventListener('click', function(e){
    document.getElementById(task).remove()
  })
}
