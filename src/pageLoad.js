/*const { add } = require("date-fns");*/
//const { container } = require("webpack");
    const container = document.getElementById('container')
    const list = document.createElement('ul');
    const display = document.createElement('div');
    const header = document.createElement('h1');
    const time = document.createElement('p');
    const article = document.createElement('div');
    list.id = 'list';
    display.id = 'display';
    article.id = 'article';
    header.id = 'header';
    header.textContent = "Let's Plan";
    time.textContent = 'Session started at: ' + new Date
    display.appendChild(time)
    display.appendChild(header);
    display.appendChild(article);

    import Icon from './house.jpg';
    import { projects,cards,teams,inboxx, toDay } from './display';


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
    list.appendChild(today);
    list.appendChild(inbox);
    list.appendChild(myProjects);
    list.appendChild(team);
    
    admin.addEventListener('click',()=>{
        alert("Ooops!! That's for the Admin only")
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
    const dueDate = document.createElement('input');
    // const priority = document.createElement('select');
    // const priority1 = document.createElement('option');
    // const priority2 = document.createElement('option');
    // const priority3 = document.createElement('option');
    const category = document.createElement('select');
    const category1 = document.createElement('option');
    const category2 = document.createElement('option');
    const category3 = document.createElement('option');
    const category4 = document.createElement('option');
    const addbtns = document.createElement('div')
    const cancel = document.createElement('button');
    const addTask = document.createElement('button');

    dialog.id = 'favDialog';
    selections.className = 'selections';
    addbtns.className = 'addbtns';
    input.placeholder = 'Type here...'
    input.className = 'input'
    dueDate.placeholder = 'Due';
    dueDate.type = 'date'
    cancel.textContent = 'Cancel';
    addTask.textContent = 'Add';
    // priority1.textContent = 'Low';
    // priority2.textContent = 'Medium'
    // priority3.textContent = 'High'
    category1.textContent = 'Category';
    category2.textContent = 'Team';
    category3.textContent = 'Work';
    category4.textContent = 'My Projects';

    // priority.appendChild(priority1);
    // priority.appendChild(priority2);
    // priority.appendChild(priority3);
    category.appendChild(category1);
    category.appendChild(category2);
    category.appendChild(category3);
    category.appendChild(category4);
    form.appendChild(input);
    selections.appendChild(dueDate);
    //selections.appendChild(priority);
    selections.appendChild(category);
    addbtns.appendChild(cancel);
    addbtns.appendChild(addTask);
    form.appendChild(selections);
    form.appendChild(addbtns)
    dialog.appendChild(form);

        const selectEl = dialog.querySelector("select");
        selectEl.addEventListener("change", () => {
            if (selectEl.value==='My Projects') {
                projectsStore.push(input.value)
            }else if (selectEl.value==='Team') {
                teamStore.push(input.value)
            } else {
                console.log('Task not urgent')
            }
        });

    addTask.addEventListener('click', ()=>{
            store.push(input.value)
            date.push(dueDate.value)

            inboxStore.push(input.value)
            dialog.close()
            cards();                       
    });

    cancel.addEventListener('click', ()=>{dialog.close()});

    return display.appendChild(dialog)
};
 
/*************store the user input*/
const store = [];
const projectsStore= [];
const teamStore = [];
const inboxStore = []
const date = []

function storage() {   
  const one = store.pop()
 return one
};

export { populate, storage, projectsStore, teamStore, inboxStore, date};

