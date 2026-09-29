const textarea = document.querySelector('textarea')
const addButton = document.getElementById('addButton')
const todoContainer = document.querySelector('.todoContainer')

let todoList = []

function addTask(){
    const todo = textarea.value
    if (!todo) {return}

        console.log('Add todo: ', todo)
        todoList.push(todo)
        textarea.value =''
        updateUI()
}

function editTodo(index){
    textarea.value = todoList[index]
    todoList = todoList.filter((element, element)=>{
    })
}
function deleteTodo(index){
    todoList = todoList.filter((element,elementIndex) =>{
        if (index === elementIndex) {return false}
        return true
    })
}
function UpdateUI(){
    let newInnerHTML = ''
    todoList.forEach[(todoElement, taskIndex) => (
        newInnerHTML += `
            <div class = "todo">
            <p>${todoElement}</p>
           
            <div class = "btnContainer">
                <button class ="iconBtn" onclick = "editTask(${taskIndex})">
                    <i class="fa-regular fa-pen-to-square"></i>
                </button>
                <button class ="iconBtn" onclick = "deleteTask(${taskIndex})">   
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </div>
    </div>
    `
    )]

    todoContainer.innerHTML = newInnerHTML
    
}

addButton.addEventListener('click', addTask)