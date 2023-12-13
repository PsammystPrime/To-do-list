const submit = document.querySelector('.submit')
const input = document.getElementById('input')
const para = document.querySelector('p');
const display = document.querySelector('div');

submit.addEventListener('click', (e)=>{
e.preventDefault();
if (input.value !=='') {
    para.textContent = 'New List Added'

const list=document.createElement('li');
const item = document.createElement('span');
const removeList = document.createElement('button');

item.textContent = input.value;
removeList.textContent = "X";

list.appendChild(item);
list.appendChild(removeList);
display.appendChild(list);
input.value = ''

removeList.addEventListener('click',()=>{
    display.removeChild(list)
    para.textContent = 'list removed'
})
}else {
    para.textContent = 'No task added!'
}

})