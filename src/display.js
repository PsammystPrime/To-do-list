import { storage } from "./pageLoad";

/******Displays new cards*///////
function cards() {
const display = document.getElementById('display');   

const card = document.createElement('article');
const cardBtn = document.createElement('button');
const cardDetails = document.createElement('div');
const cardName = document.createElement('p');
const cardTime = document.createElement('p');
card.id = 'card'
cardBtn.textContent = 'X'
cardName.textContent = storage()//'Put details here' 
cardTime.textContent = 'Due: 9:00 am'

cardDetails.appendChild(cardName);
cardDetails.appendChild(cardTime);

card.appendChild(cardBtn);
card.appendChild(cardDetails);
 

  cardBtn.addEventListener('click', ()=>{
    display.removeChild(card)
  })
  
 return  display.appendChild(card)
};

export {cards}
