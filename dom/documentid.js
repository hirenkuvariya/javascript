// var headertitle = document.getElementById('header-title');
// console.log(headertitle);
// headertitle.textContent= 'hiren kuvariya';
// headertitle.innerHTML="ramji";
// var header = document.getElementById('header');
// header.style.borderBottom = "5px solid black";
// var items = document.getElementsByClassName('list-item');
// for ( i =0; i <items.length; i++){
//     items[i].style.backgroundColor='yellow';
// }

// var input = document.querySelector('input')
// input.value = "Enter yout name" ;


var newDiv = document.createElement('div');
// add class
newDiv.className = 'box';
//id add
newDiv.id='textbox'; 
var newdivtext = document.createTextNode('this is cool');

// add text to div
newDiv.appendChild(newdivtext);
// console.log(newDiv);
var container = document.querySelector('#content');
var form = document.querySelector('form')
newDiv.style.color='red';
newDiv.style.backgroundColor='gray';
container.insertBefore(newDiv,form);



