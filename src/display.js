import { storage, projectsStore, teamStore, inboxStore } from './pageLoad';
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

// function toDay() {
//     const article = document.getElementById('article');
//     const header = document.getElementById('header');
//     header.textContent = '';
//     header.textContent = 'Today';
//     article.textContent= '';
//     const topSlide = document.createElement('div');
//     const header3 = document.createElement('h3');
//     const topContent = document.createElement('div');
//     const bottomSlide = document.createElement('div');
//     const header4 = document.createElement('h4');
//     const bottomContent = document.createElement('div');

//     header3.textContent = 'My Projects';
//     topContent.textContent = 'hello'
//     header4.textContent = 'Team';
//     bottomContent.textContent = 'hello world';

//     topSlide.appendChild(header3);
//     topSlide.appendChild(topContent);
//     bottomSlide.appendChild(header4);
//     bottomSlide.appendChild(bottomContent);
//     article.appendChild(topSlide);
//     article.appendChild(bottomSlide);

    
// }

function inboxx() {
    const article = document.getElementById('article');
    const header = document.getElementById('header');
    header.textContent = '';
    header.textContent = 'Inbox';
    article.textContent= '';

    console.log(inboxStore)
    inboxStore.forEach(function(project){
  
      const card = document.createElement('article');
      const cardBtn = document.createElement('button');
      const cardDetails = document.createElement('div');
      const cardName = document.createElement('p');
      const cardTime = document.createElement('p');
      card.id = 'card'
      cardDetails.id = 'details'
      cardBtn.textContent = 'X';
      cardName.textContent = project//'Put details here' 
      cardTime.textContent = 'Due: 3:00 am'
      
      cardDetails.appendChild(cardName);
      cardDetails.appendChild(cardTime);
      
      card.appendChild(cardBtn);
      card.appendChild(cardDetails);
      
        cardBtn.addEventListener('click', ()=>{
          article.removeChild(card)
          let go = inboxStore.indexOf(project)
          inboxStore.splice(go)
          console.log(inboxStore)
        })
      
        article.appendChild(card)          
    });
    
}

function projects() {
    
    const article = document.getElementById('article');
    const header = document.getElementById('header');
    header.textContent = '';
    header.textContent = 'My Projects';
    article.textContent = ''


    projectsStore.forEach(function(project){
  
      const card = document.createElement('article');
      const cardBtn = document.createElement('button');
      const cardDetails = document.createElement('div');
      const cardName = document.createElement('p');
      const cardTime = document.createElement('p');
      card.id = 'card'
      cardDetails.id = 'details'
      cardBtn.textContent = 'X';
      cardName.textContent = project//'Put details here' 
      cardTime.textContent = 'Due: 3:00 am'
      
      cardDetails.appendChild(cardName);
      cardDetails.appendChild(cardTime);
      
      card.appendChild(cardBtn);
      card.appendChild(cardDetails);
      
      
        cardBtn.addEventListener('click', ()=>{
          article.removeChild(card)
          let go = projectsStore.indexOf(project)
          let goo = inboxStore.indexOf(project)
          projectsStore.splice(go)
          inboxStore.splice(goo)
        })
      
        article.appendChild(card)
    })


          
 };

function teams() {
    const article = document.getElementById('article');
    const header = document.getElementById('header');
    header.textContent = '';
    header.textContent = 'Team';
    article.textContent= '';

    teamStore.forEach(function(project){
  
      const card = document.createElement('article');
      const cardBtn = document.createElement('button');
      const cardDetails = document.createElement('div');
      const cardName = document.createElement('p');
      const cardTime = document.createElement('p');
      card.id = 'card'
      cardDetails.id = 'details'
      cardBtn.textContent = 'X';
      cardName.textContent = project//'Put details here' 
      cardTime.textContent = 'Due: 3:00 am'
      
      cardDetails.appendChild(cardName);
      cardDetails.appendChild(cardTime);
      
      card.appendChild(cardBtn);
      card.appendChild(cardDetails);
      
      
        cardBtn.addEventListener('click', ()=>{
          article.removeChild(card)
          let go = teamStore.indexOf(project)
          let goo = inboxStore.indexOf(project)
          teamStore.splice(go)
          inboxStore.splice(goo)
        })
      
        article.appendChild(card)
    })

};

export{cards,projects,teams,inboxx}


