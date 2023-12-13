const submit = document.querySelector('.submit')
const input = document.getElementById('input')
const para = document.querySelector('.p1');
const para2 = document.querySelector('.p2');
const display = document.querySelector('div');
const high =document.getElementById('high');
const medium = document.getElementById('medium');
const low = document.getElementById('normal')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')

high.addEventListener('click', ()=>{
    para2.textContent= 'high'
})
medium.addEventListener('click', ()=>{
    para2.textContent= 'medium'
})
low.addEventListener('click', ()=>{
    para2.textContent= 'low'
})

submit.addEventListener('click', (e)=>{
e.preventDefault();
if (input.value !=='') {

      if (para2.textContent=== 'high') {
        para.textContent = 'high List Added'
const list=document.createElement('li');
const item = document.createElement('span');
const removeList = document.createElement('button');

item.textContent = input.value;
removeList.textContent = "X";

list.appendChild(item);
list.appendChild(removeList);
one.appendChild(list);
input.value = ''
para2.textContent= para.textContent
para.textContent = 'When it gets tough, put it down on paper!'


removeList.addEventListener('click',()=>{
    one.removeChild(list)
    para2.textContent = 'A very Urgent list removed'
})
    }else if (para2.textContent=== 'medium') {
        para.textContent = 'medium List Added'
        const list=document.createElement('li');
const item = document.createElement('span');
const removeList = document.createElement('button');

item.textContent = input.value;
removeList.textContent = "X";

list.appendChild(item);
list.appendChild(removeList);
two.appendChild(list);
input.value = ''
para2.textContent= para.textContent
para.textContent = 'Trust your process,only you know what it takes to be you!'

removeList.addEventListener('click',()=>{
    two.removeChild(list)
    para2.textContent = 'An urgent list removed'
})
        
    }else if (para2.textContent=== 'low') {
        para.textContent = 'low List Added'
        const list=document.createElement('li');
const item = document.createElement('span');
const removeList = document.createElement('button');

item.textContent = input.value;
removeList.textContent = "X";

list.appendChild(item);
list.appendChild(removeList);
three.appendChild(list);
input.value = ''
para2.textContent= para.textContent
para.textContent = 'Simplicity is key'


removeList.addEventListener('click',()=>{
    three.removeChild(list)
    para2.textContent = 'normal list removed'
})
    }
    

}else {
    para.textContent = 'No task added!'
}

})