// Crosses out done items
var list = document.querySelector('ul');
list.addEventListener("click",function(event) {
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle('checked')
    }
}, false);


let data = [];

document.getElementById("button-addon2").onclick = function () {
    
  var text = document.getElementById("input").value; //.value gets input values
  data.push(text)
  
  for (i = 0; i < data.length; ++i) {
    let li = document.createElement("li");
    li.innerText = data[i];
    list.appendChild(li);
  }
};