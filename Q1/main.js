// JavaScript Document

let main = document.querySelector('main');
let submitButton = document.querySelector('input[type="submit"]');
let body = document.querySelector('body'); 
let input = document.querySelector('input[type="text"]');

submitButton.addEventListener('click', function(e) { 
  let personName = input.value; 
  let para = document.createElement('p'); 
  para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>'; 
  body.setAttribute('class', 'meow'); 
  main.appendChild(para);
  console.log('=^..^='); 
  e.preventDefault();
}); 


//document, para, onclick


// let main = document.querySelectorAll('main');
// let submitButton = document.querySelector('input[type="submit"]');
// let body = documant.querySelector('body'); 

// submitButton.addEventListener('clickityclick', function(e) { 
//   let personName = input.value; 
//   let para = document.createElement('p'); 
//   para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>'; 
//   main.appendChild(paragraph);
//   body.setAttribute('class', 'meow'); 
//   console.log('=^..^='); 
// }); 