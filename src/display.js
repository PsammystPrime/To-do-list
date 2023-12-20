import { storage } from "./pageLoad";

/******Displays new cards*///////
function cards() {   
const article = document.getElementById('article');

const card = document.createElement('article');
const cardBtn = document.createElement('button');
const cardDetails = document.createElement('div');
const cardName = document.createElement('p');
const cardTime = document.createElement('p');
card.id = 'card'
cardDetails.id = 'details'
cardBtn.textContent = 'X'
cardName.textContent = storage()//'Put details here' 
cardTime.textContent = 'Due: 9:00 am'

cardDetails.appendChild(cardName);
cardDetails.appendChild(cardTime);

card.appendChild(cardBtn);
card.appendChild(cardDetails);
 

  cardBtn.addEventListener('click', ()=>{
    article.removeChild(card)
  })

 return  article.appendChild(card)
};

function toDay() {
    alert('hey')
}

function inboxx() {
    alert('inbox')
}
function projects() {
    alert('projects')
}
function teams() {
    alert('teams')
}

export {cards, toDay,inboxx,projects,teams}


