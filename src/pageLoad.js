/*const { add } = require("date-fns");*/
//const { container } = require("webpack");
    const container = document.getElementById('container')
    const list = document.createElement('ul');
    const display = document.createElement('div');
    const header = document.createElement('h1');
    const article = document.createElement('div');
    list.id = 'list';
    display.id = 'display';
    article.id = 'article';
    header.textContent = "Let's Plan";
    display.appendChild(header);
    display.appendChild(article);
    import Icon from './house.jpg';
    import  {cards,toDay,inboxx,projects,teams}  from './display';


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
    todayName.href = '#'
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
    
    searchName.addEventListener('click',()=>{
       cards();
    })
    taskName.addEventListener('click',()=>{
        newTask().showModal()
    });
    todayName.addEventListener('click', ()=>{
        toDay();
    });
    inboxName.addEventListener('click', ()=>{
        inboxx();
    });
    myProjectsName.addEventListener('click', ()=>{
        projects();
    });
    teamName.addEventListener('click', ()=>{
        teams();
    });

    return container.appendChild(list),
    container.appendChild(display);
    };

/*****create modal for user input******/
function newTask() {
const dialog = document.createElement('dialog');
const form = document.createElement('form');
const input = document.createElement('input');
const selections = document.createElement('div');
const dueDate = document.createElement('button');
const priority = document.createElement('button');
const category = document.createElement('button');
const addbtns = document.createElement('div')
const cancel = document.createElement('button');
const addTask = document.createElement('button');

dialog.id = 'favDialog';
selections.className = 'selections';
addbtns.className = 'addbtns';
dueDate.textContent = 'DueDate';
priority.textContent = 'Priority';
category.textContent = 'Category';
cancel.textContent = 'Cancel';
addTask.textContent = 'Add';

form.appendChild(input);
selections.appendChild(dueDate);
selections.appendChild(priority);
selections.appendChild(category);
addbtns.appendChild(cancel);
addbtns.appendChild(addTask);
form.appendChild(selections);
form.appendChild(addbtns)
dialog.appendChild(form);

    cancel.addEventListener('click', ()=>{dialog.close()});
    addTask.addEventListener('click', ()=>{
        store.push(input.value),
        dialog.close(),
        cards();
        
    });

return display.appendChild(dialog)
};
 
/*************store the user input*/
const store = [];

function storage() {
    return store.toString()
    
    

    
};



export { populate, storage };

