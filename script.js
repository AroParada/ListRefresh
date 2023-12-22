function addToList(t) {
    console.log(t.value)
}

var list = document.querySelector('ul');
list.addEventListener("click",function(event) {
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle('checked')
    }
}, false);
