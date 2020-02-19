

var myForm = document.querySelector('.myForm')

myForm.addEventListener('submit', dhacdo => {
event.preventDefault();
var todo = myForm.todo.value;
myForm.reset()

var todo_html = `
<h2>${todo}</h2>`

var data = document.querySelector('.data')

data.innerHTML += todo_html
console.log(todo)
} )

















