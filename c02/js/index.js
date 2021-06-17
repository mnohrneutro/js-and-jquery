var count = 0;
var countEl = document.getElementById('p');
var saveEl = document.getElementById('save-el');

function counter() {
    count++
    countEl.innerText = count;
}



function save() {
    var countStr = count + ' - ';
    saveEl.textContent += countStr; //textCOntent gets all the content
}

function reset() {
    count = 0;
    saveEl.textContent = "previous entries : ";
    countEl.innerText = count;
}