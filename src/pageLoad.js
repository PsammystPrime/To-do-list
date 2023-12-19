/*const { add } = require("date-fns");*/
//const { container } = require("webpack");
const container = document.getElementById('container');
import Icon from './house.jpg'

const admin = document.createElement('div');
const adminImg = document.createElement('img');
const adminName = document.createElement('button');
adminImg.id = 'nav'
adminImg.src = Icon
adminName.textContent = 'Psammyst'
admin.appendChild(adminImg);
admin.appendChild(adminName);

const task = document.createElement('div');
const  taskImg= document.createElement('img');
const taskName = document.createElement('button');
taskImg.id = 'nav'
taskImg.src = Icon
taskName.textContent = 'Add Task'
task.appendChild(taskImg);
task.appendChild(taskName);

const search = document.createElement('div');
const searchImg = document.createElement('img');
const searchName = document.createElement('button');
searchImg.id = 'nav'
searchImg.src = Icon
searchName.textContent = 'Search'
search.appendChild(searchImg);
search.appendChild(searchName);

const today = document.createElement('div');
const todayImg = document.createElement('img');
const todayName = document.createElement('button');
todayImg.id = 'nav'
todayImg.src = Icon
todayName.textContent = 'Today'
today.appendChild(todayImg);
today.appendChild(todayName);

const  inbox= document.createElement('div');
const  inboxImg= document.createElement('img');
const  inboxName= document.createElement('button');
inboxImg.id = 'nav'
inboxImg.src = Icon
inboxName.textContent = 'Inbox'
inbox.appendChild(inboxImg);
inbox.appendChild(inboxName);

const  myProjects= document.createElement('div');
const  myProjectsImg= document.createElement('img');
const  myProjectsName= document.createElement('button');
myProjectsImg.id = 'nav'
myProjectsImg.src = Icon
myProjectsName.textContent = 'My Projects'
myProjects.appendChild(myProjectsImg);
myProjects.appendChild(myProjectsName);

const  team= document.createElement('div');
const  teamImg= document.createElement('img');
const  teamName= document.createElement('button');
teamImg.id = 'nav'
teamImg.src = Icon
teamName.textContent = 'Team'
team.appendChild(teamImg);
team.appendChild(teamName);

container.appendChild(admin);
container.appendChild(task);
container.appendChild(search);
container.appendChild(today);
container.appendChild(inbox);
container.appendChild(myProjects);
container.appendChild(team);

/*****create input modal******/
function newTask() {
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

