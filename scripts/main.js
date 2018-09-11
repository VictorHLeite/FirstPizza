var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pepperoni-pizza.jpg') {
      myImage.setAttribute ('src','images/tuna-pizza.jpg');
    } else {
      myImage.setAttribute ('src','images/pepperoni-pizza.jpg');
    }
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Pizza, ' + myName;
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Pizza, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
