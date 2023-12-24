const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById("list-container");

function addTask() { // function to add a task
  if(inputBox.value === '') { // if unput is empty
    alert('You must write something');
  }
  else{ // if input has a value 
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
  }
}

















// Crosses out done items
// var list = document.querySelector('ul');
// list.addEventListener("click",function(event) {
//     if(event.target.tagName === 'LI') {
//         event.target.classList.toggle('checked')
//     }
// }, false);


// let data = [];

// document.getElementById("button-addon2").onclick = function () {
    
//   var text = document.getElementById("input").value;
//   data.push(text)
  
//   for (i = 0; i < data.length; ++i) {
//     let li = document.createElement("li");
//     li.innerText = data[i];
//     list.appendChild(li);
//   }
// };