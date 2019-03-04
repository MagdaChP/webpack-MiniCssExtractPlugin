import Example from './assets/example.svg';

function component() {
    const parag = document.createElement('p');
  
    parag.innerHTML = 'Image from <a href="https://en.wikipedia.org/wiki/File:Example.svg">here!</a>';
    parag.classList.add('text');

    const myImg = new Image();
    myImg.src = Example;
    parag.appendChild(myImg);

    return parag;
  }
  
  document.body.appendChild(component());