/*const { add } = require("date-fns");
const { container } = require("webpack");*/

/*****create input modal******/
function newTask() {
const container = document.getElementById('container');

const dialog = document.createElement('dialog');
const form = document.createElement('form');
const input = document.createElement('input');
const dueDate = document.createElement('button');
const priority = document.createElement('button');
const category = document.createElement('button');
const cancel = document.createElement('button');
const addTask = document.createElement('button');

dialog.id = 'favDialog'
dueDate.textContent = 'DD';
priority.textContent = 'Priority';
category.textContent = 'Cat';
cancel.textContent = 'Del';
addTask.textContent = 'Add';

form.appendChild(input);
form.appendChild(dueDate);
form.appendChild(priority);
form.appendChild(cancel);
form.appendChild(addTask);
dialog.appendChild(form);

    dueDate.addEventListener('click', (e)=>{
    e.preventDefault()
    });
    priority.addEventListener('click', (e)=>{
        e.preventDefault()
    });
    category.addEventListener('click', (e)=>{
        e.preventDefault()
    });
    cancel.addEventListener('click', (e)=>{
        e.preventDefault()
    });
    

return container.appendChild(dialog)
}
 
function btns() {
   

}


export {newTask}

