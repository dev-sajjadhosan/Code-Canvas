const labelCo = document.querySelector('#co')
const inputColor = document.getElementById('color')
const todoBtn = document.querySelector('.add')
const todoContainer = document.querySelector('.new-todo')
const todoInput = document.querySelector('.input')
const todoLists = document.querySelector('.todo-lists')
const todoClose = document.querySelector('.close')
const todoOutput = document.querySelector('.todo-output')
const emptyCard = document.querySelector('.empty-card')
const todoRemove = document.querySelector('.remove')

const todos = []
let colorValue = '' // default to white

const getContrastColor = (color) => {
  color = color.replace('#', '')
  const r = parseInt(color.substr(0, 2), 16)
  const g = parseInt(color.substr(2, 2), 16)
  const b = parseInt(color.substr(4, 2), 16)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 125 ? '#000' : '#fff'
}

inputColor.addEventListener('input', (e) => {
  const color = e.target.value
  labelCo.style.background = color
  colorValue = color
})

const render = () => {
  todoLists.innerHTML = ''
  todoOutput.innerText = `list - ${
    todos.length < 10 ? '0' + todos.length : todos.length
  }`
  todos.length > 0
    ? (emptyCard.style.visibility = 'hidden')
    : (emptyCard.style.visibility = 'visible')

  todos.forEach((todo) => {
    const textColor = getContrastColor(todo.color)
    const li = document.createElement('li')
    li.innerHTML = `
      <label for="${todo.id}-checkbox" class="list" style="background: ${
      todo.color
    }">
        <input 
          type="checkbox" 
          class="checkbox" 
          id="${todo.id}-checkbox"
          hidden
          ${todo.completed ? 'checked' : ''} 
        />
        <p class="text" style="color: ${textColor}">${todo.text}</p>
          <button class="remove" onclick='handleTodoRemove(${
            todo.id
          })'><i class="fa-solid fa-xmark"></i></button>
      </label>`
    todoLists.appendChild(li)
  })
}

todoLists.addEventListener('change', (e) => {
  if (e.target.classList.contains('checkbox')) {
    const id = parseInt(e.target.id.split('-')[0], 10)
    toggleComplete(id)
    render()
  }
})

const toggleComplete = (id) => {
  const todo = todos.find((t) => t.id === id)
  if (todo) {
    todo.completed = !todo.completed
  }
}

todoBtn.addEventListener('click', (e) => {
  const btn = e.target.textContent

  if (btn === 'New ToDo') {
    todoContainer.classList.add('todo-active')
    labelCo.classList.add('co-active')
    todoClose.classList.add('close-active')
    todoBtn.classList.remove('start')
    todoInput.removeAttribute('hidden')
    e.target.innerText = 'Add'
  } else {
    const todo = todoInput.value
    if (todo === '') return
    const todoObj = {
      id: todos.length + 1,
      text: todo,
      color: colorValue,
      completed: false,
    }

    todos.push(todoObj)
    render()
    todoInput.value = ''
    // e.target.innerText = 'New ToDo'
  }
})

todoClose.addEventListener('click', () => {
  todoContainer.classList.remove('todo-active')
  labelCo.classList.remove('co-active')
  todoClose.classList.remove('close-active')
  todoInput.setAttribute('hidden', true)
  todoBtn.classList.add('start')
  todoBtn.innerText = 'New ToDo'
})

const handleTodoRemove = (id) => {
  const find = todos.findIndex((t) => t.id === id)
  if (find !== -1) {
    todos.splice(find, 1)
  }
  render()
}
