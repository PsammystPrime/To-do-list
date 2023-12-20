/*const { add } = require("date-fns");*/
//const { container } = require("webpack");
    const list = document.createElement('ul');
    const display = document.createElement('div');
    list.id = 'list';
    display.id = 'display';
    display.textContent = 'Display';
    import Icon from './house.jpg'


/*******Application Logic ********/
function populate(){
    const admin = document.createElement('li');
    const adminImg = document.createElement('img');
    const adminName = document.createElement('a');
    adminImg.id = 'nav'
    adminImg.src = Icon
    adminName.textContent = 'Psammyst'
    adminName.href = '#'
    admin.appendChild(adminImg);
    admin.appendChild(adminName);
    
    const task = document.createElement('li');
    const  taskImg= document.createElement('img');
    const taskName = document.createElement('a');
    taskImg.id = 'nav'
    taskImg.src = Icon
    taskName.textContent = 'Add Task'
    taskName.href = '#'
    task.appendChild(taskImg);
    task.appendChild(taskName);
    
    const search = document.createElement('li');
    const searchImg = document.createElement('img');
    const searchName = document.createElement('a');
    searchImg.id = 'nav'
    searchImg.src = Icon
    searchName.textContent = 'Search'
    searchName.href = '#'
    search.appendChild(searchImg);
    search.appendChild(searchName);
    
    const today = document.createElement('li');
    const todayImg = document.createElement('img');
    const todayName = document.createElement('a');
    todayImg.id = 'nav'
    todayImg.src = Icon
    todayName.textContent = 'Today'
    todayName.href = 'www.github.com'
    today.appendChild(todayImg);
    today.appendChild(todayName);
    
    const  inbox= document.createElement('li');
    const  inboxImg= document.createElement('img');
    const  inboxName= document.createElement('a');
    inboxImg.id = 'nav'
    inboxImg.src = Icon
    inboxName.textContent = 'Inbox'
    inboxName.href = '#'
    inbox.appendChild(inboxImg);
    inbox.appendChild(inboxName);
    
    const  myProjects= document.createElement('li');
    const  myProjectsImg= document.createElement('img');
    const  myProjectsName= document.createElement('a');
    myProjects.id = 'projects'
    myProjectsImg.src = Icon
    myProjectsName.textContent = 'My Projects'
    myProjectsName.href= '#'
    myProjects.appendChild(myProjectsImg);
    myProjects.appendChild(myProjectsName);
    
    const  team= document.createElement('li');
    const  teamImg= document.createElement('img');
    const  teamName= document.createElement('a');
    team.id = 'team'
    teamImg.src = Icon
    teamName.textContent = 'Team'
    team.appendChild(teamImg);
    team.appendChild(teamName);
    
    
    list.appendChild(admin);
    list.appendChild(task);
    list.appendChild(search);
    list.appendChild(today);
    list.appendChild(inbox);
    list.appendChild(myProjects);
    list.appendChild(team);
    
    taskName.addEventListener('click',()=>{
        newTask().showModal()
    })
    return container.appendChild(list),
    container.appendChild(display);
    };

function gee() {
    newTask().close()
}

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


    cancel.addEventListener('click', ()=>{
        dialog.close()
    });
    

return display.appendChild(dialog)
};
 


export { populate };

