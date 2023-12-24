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
    let span = document.createElement('span'); // add x button
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = '';
}

// Crosses out done items
listContainer.addEventListener("click",function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
    }
    else if(e.target.tagName === 'SPAN'){
      e.target.parentElement.remove()
    }
}, false);


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