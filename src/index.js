import { newTask } from './pageLoad';
import './house.jpg';
import './style.css';
const container = document.getElementById('container');
const show = document.createElement('button');
show.textContent = 'Show';
container.appendChild(show);

const task = newTask()
show.addEventListener('click', ()=>{
    task.showModal()
})