import { storage,storage2 } from './pageLoad';
/******Displays new cards*///////

function cards() {   
const article = document.getElementById('article');
const header = document.getElementById('header');
header.textContent = '';
header.textContent = "Let's Plan";


const card = document.createElement('article');
const cardBtn = document.createElement('button');
const cardDetails = document.createElement('div');
const cardName = document.createElement('p');
const cardTime = document.createElement('p');
card.id = 'card'
cardDetails.id = 'details'
cardBtn.textContent = 'X';
cardName.textContent = storage()//'Put details here' 
cardTime.textContent = 'Due: 9:00 am'

cardDetails.appendChild(cardName);
cardDetails.appendChild(cardTime);

card.appendChild(cardBtn);
card.appendChild(cardDetails);
 

  cardBtn.addEventListener('click', ()=>{
    article.removeChild(card)
  })

  article.appendChild(card)
};

function searcH() {
    const article = document.getElementById('article');
    const header = document.getElementById('header');
    header.textContent = '';
    header.textContent = 'Search';
    article.textContent= '';
}

function toDay() {
    const article = document.getElementById('article');
    const header = document.getElementById('header');
    header.textContent = '';
    header.textContent = 'Today';
    article.textContent= '';
    const topSlide = document.createElement('div');
    const header3 = document.createElement('h3');
    const topContent = document.createElement('div');
    const bottomSlide = document.createElement('div');
    const header4 = document.createElement('h4');
    const bottomContent = document.createElement('div');

    header3.textContent = 'My Projects';
    topContent.textContent = 'hello'
    header4.textContent = 'Team';
    bottomContent.textContent = 'hello world';

    topSlide.appendChild(header3);
    topSlide.appendChild(topContent);
    bottomSlide.appendChild(header4);
    bottomSlide.appendChild(bottomContent);
    article.appendChild(topSlide);
    article.appendChild(bottomSlide);

    
}

function inboxx() {
    const article = document.getElementById('article');
    const header = document.getElementById('header');
    header.textContent = '';
    header.textContent = 'Inbox';
    article.textContent= '';
    
}

function projects() {
    
    const projects = storage2()
    const article = document.getElementById('article');
    const header = document.getElementById('header');
    header.textContent = '';
    header.textContent = 'My Projects';
    article.textContent= '';
    
while (storage2.length -1) {
        const card = document.createElement('article');
    const cardBtn = document.createElement('button');
    const cardDetails = document.createElement('div');
    const cardName = document.createElement('p');
    const cardTime = document.createElement('p');
    card.id = 'card'
    cardDetails.id = 'details'
    cardBtn.textContent = 'X';
    cardName.textContent = projects//'Put details here' 
    cardTime.textContent = 'Due: 21:00 '
    
    cardDetails.appendChild(cardName);
    cardDetails.appendChild(cardTime);
    
    card.appendChild(cardBtn);
    card.appendChild(cardDetails);
     
    
      cardBtn.addEventListener('click', ()=>{
        article.removeChild(card)
      })
    
      article.appendChild(card)
}

  /*  const cardDetails = document.createElement('div');
    cardDetails.textContent = storage2()
    article.appendChild(cardDetails)*/

          
};
function teams() {
    const article = document.getElementById('article');
    const header = document.getElementById('header');
    header.textContent = '';
    header.textContent = 'Team';
    article.textContent= '';

};

export {cards, toDay,searcH,inboxx,projects,teams}


